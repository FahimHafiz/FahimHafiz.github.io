import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("bibsearch");
  if (!search) return;
  const yearSelect = document.getElementById("publication-year");
  const status = document.getElementById("publication-filter-status");
  const headings = [...document.querySelectorAll("h2.bibliography")];
  const records = [];
  headings.forEach((heading) => {
    const year = heading.textContent.trim();
    let sibling = heading.nextElementSibling;
    while (sibling && sibling.tagName !== "H2") {
      if (sibling.matches("ol.bibliography")) {
        sibling.querySelectorAll(":scope > li").forEach((item) => {
          records.push({ item, year, text: item.textContent.toLowerCase() });
        });
      }
      sibling = sibling.nextElementSibling;
    }
  });
  if (yearSelect) {
    [...new Set(records.map((record) => record.year))].sort().reverse().forEach((year) => {
      yearSelect.add(new Option(year, year));
    });
  }
  const filterItems = () => {
    const term = search.value.trim().toLowerCase();
    const year = yearSelect ? yearSelect.value : "";
    if (CSS.highlights) highlightSearchTerm({ search: term, selector: ".bibliography > li" });
    let visible = 0;
    records.forEach((record) => {
      const matches = (!year || record.year === year) && (!term || record.text.includes(term));
      record.item.classList.toggle("unloaded", !matches);
      if (matches) visible++;
    });
    headings.forEach((heading) => {
      let sibling = heading.nextElementSibling;
      let hasVisible = false;
      while (sibling && sibling.tagName !== "H2") {
        if (sibling.matches("ol.bibliography")) {
          const populated = [...sibling.children].some((item) => !item.classList.contains("unloaded"));
          sibling.classList.toggle("unloaded", !populated);
          if (sibling.previousElementSibling.tagName === "H3") sibling.previousElementSibling.classList.toggle("unloaded", !populated);
          hasVisible = hasVisible || populated;
        }
        sibling = sibling.nextElementSibling;
      }
      heading.classList.toggle("unloaded", !hasVisible);
    });
    if (status) status.textContent = visible ? `Showing ${visible} of ${records.length} publications.` : "No publications match these filters.";
  };
  let timer;
  search.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(filterItems, 150);
  });
  if (yearSelect) yearSelect.addEventListener("change", filterItems);
  const updateFromHash = () => {
    try { search.value = decodeURIComponent(window.location.hash.slice(1)); }
    catch { search.value = ""; }
    filterItems();
  };
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});
