# Website maintenance guide

This is a Jekyll/al-folio site published by GitHub Actions. Routine content edits
should not require changes to templates or styles.

## Where to edit

| Update | File or folder |
| --- | --- |
| Bio, research interests, and portrait filename | `_pages/about.md` |
| Email and social profile IDs | `_config.yml` |
| Project cards and their order | `_data/project_repositories.yml` |
| Publication records | `_bibliography/papers.bib` |
| Announcements | `_posts/` |
| Teaching introduction and materials | `_pages/teaching.md` |
| Full CV PDF | `assets/pdf/Curriculum_Vitae_updated2.pdf` |
| Scholar and CV links, year selector | `_pages/publications.md` |

The email at the top and bottom of the site and the Teaching contact link uses
`email` in `_config.yml`. Edit it once. Social icons reuse that configuration.
Historical CV PDFs and resume data are separate documents; update those explicitly.

## Safe update routine

1. Create a short-lived branch from the latest `main`.
2. Make related edits together on that branch, using the templates below.
3. Open a pull request into `main`. The **Deploy site** workflow builds the site
   for the pull request but does not publish it. A successful build is not a visual preview.
4. Review the changed text, links, and images. If using a local checkout, run
   `bundle install` and `bundle exec jekyll serve`, then open the local preview.
5. Merge the reviewed change into `main` once. Wait for both **Deploy site** and
   **pages build and deployment** to finish successfully.
6. Refresh the public page and check the changed content and links. A commit or
   successful source build alone does not establish that the public site is updated.

For several changes, make one pull request rather than editing live `main` repeatedly.
To undo a mistake, revert the change in GitHub and let the corrected revision publish.
Do not delete the repository or rewrite its history for routine website edits.

## Add a project

Copy one item in `_data/project_repositories.yml`, edit the title, topic area,
description, and `owner/repository` value. The list order is the display order.
Use public repositories and label forks accurately. Do not add private repository
information to this public site. The page renders the cards automatically.

## Add a publication

Copy `_templates/publication.bib` into `_bibliography/papers.bib`, using a unique
citation key. Verify the title, complete author order, publication year, and links.
Use `and` between BibTeX authors. Use `Fahim Hafiz` for your own name.
Set `selected = {true}` only when it should appear in Selected Publications.
Put optional preview images in `assets/img/publication_preview/` and set `preview`.
Two existing featured papers have homepage-specific previews in `_layouts/bib.liquid`;
new papers can use the normal `preview` field. The Publications year filter builds
its options from the rendered entries automatically. Avoid duplicate preprint records.

## Add an announcement

Copy `_templates/announcement.md` into `_posts/YYYY-MM-DD-short-title.md`.
Edit the title, date/time with timezone, description, and body. Remove template
instructions and placeholders. Posts appear newest-first under Announcements and
on the homepage. The number shown on the homepage is `latest_posts.limit` in
`_config.yml`. Templates are excluded from the public build.

## Replace the CV

Upload the updated PDF using the existing filename
`assets/pdf/Curriculum_Vitae_updated2.pdf`. Keeping the filename means the
Publications link continues to work. The old `/cv/` page remains available but is
not in navigation; its historical resume data is not automatically updated by the PDF.

## Publishing safeguards

Production builds share a concurrency group, so newer runs cancel superseded runs.
Pull requests use separate groups and only build. Just before publishing, the
workflow verifies that its revision is still the tip of `main`; outdated reruns
skip publication. Manual publishing is limited to `main`.

If publishing fails, inspect the failing step in Actions. Fix or rerun the latest
`main` revision rather than an old run. Never treat a formatting-check notification
as proof that the website deployment failed; inspect **Deploy site** itself.

Reference: https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency

## Before you finish

- Check homepage navigation on a narrow and a wide window.
- Confirm images load and contact links point to the correct address.
- Test Publications year + keyword filters if publication data changed.
- Open new project links and the CV download.
- Keep a local copy of important source files and your current CV. A downloaded
  ZIP contains one revision's files, not the complete Git history.
