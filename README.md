# Upstairs is boiling

Welcome to the source repository of <a href="https://upstairsisboiling.com">Upstairs is boiling website</a>.

<details>
<summary><h2>Install</h2></summary>

### Make sure you have these installed in your system:

- A command-line terminal program such as <a href="https://iterm2.com/">iTerm2</a> or <a href="https://git-scm.com/">Git Bash</a>.
- Git (<a href="https://git-scm.com">Download</a>)
- Node.js & npm (<a href="https://nodejs.org/en">Download</a>)

### Download the project by running this command:

```sh
# Clone the repo
git clone git@github.com:upstairsisboiling/upstairsisboiling.github.io.git

# Navigate to project directory
cd upstairsisboiling.github.io

# Install project dependencies
npm install 
```

### Start live preview:

```sh
npm start
```

Then open http://localhost:3000 in your browser.

Preview will automatically update itself as you make changes.

</details>


<details>
<summary><h2>Making changes</h2></summary>

### Content

Everything content-related resides inside `content` folder.

Writ-CMS works in a simple way:

- Text files inside `content` become posts,
- Text files inside `content/pages` folder become subpages,
- A text file named `index` or `homepage` inside `content` becomes the homepage,
- Folders inside `content` become categories,
- In `content` or in a category, a folder containing a post.md becomes a foldered post.
- In `pages`, a folder containing a page.md becomes a foldered post.
- Posts inside categories become categorized posts.

Sub-categories are currently not supported.

#### Text files

Text files can be written in HTML, markdown or plain text. You can use handlebars
expressions.

Accepted file extensions: `.md`, `.markdown`, `.txt`, `.html`, `.hbs`, `.handlebars`

Regardless of the format, text files may contain a front-matter section in the beginning
like this:
```
---
tags: web, hello world
---
Content comes here
```

More details can be found here: https://github.com/scriptype/writ-cms?tab=readme-ov-file#manual

### Theme

Everything theme-related resides inside `theme` folder.

#### Making quick changes

You can quickly make changes to the theme using `scripts.js`, `style.css` and `theme-settings.css`.

`scripts.js` and `style.css` recognize `theme/assets/custom` as the current directory.

Let's say you want to have a `colors.css` and import it into `style.css`:
- Put `colors.css` into `theme/assets/custom`
- Import it in `style.css` with: `@import url('./colors.css');`

#### Full editing

You can change how everything looks and behaves by making changes in `theme/templates` folder.

All templates are rendered using [Handlebars](https://handlebarsjs.com).

- `templates/base` handles the lower-level html organization
- `templates/components` and `templates/layouts` contain some reusable templates
- `templates/features` is automatically generated based on your settings, but your edits are preserved.
- `templates/pages` contains the templates for each page type.
- `templates/helpers.js` contains Handlebars helpers.

When make changes to the Handlebars helpers, you need to restart the watcher.

###### Adding new post types

`templates/pages/post` has a few subfolders, corresponding to different post types.
By adding another, you simply introduce a new post type.

You can set a post's type by adding `type: nameOfTheType` in its front-matter.

### Configuration

Writ-CMS is configured in the `settings.json` and extended programmatically inside `_scripts`.

All possible values for settings: https://github.com/scriptype/writ-cms/blob/3181ed4a31f240579c7a30f23cd4c7252ec8a329/src/settings.js

Inside `_scripts` folder is intended to be used by npm scripts. Here `_scripts/writ.js`
extends the writ-cms by using a hook for customizing the content model.

All hooks: https://github.com/scriptype/writ-cms/blob/3181ed4a31f240579c7a30f23cd4c7252ec8a329/src/hooks/index.js
Example usages of hooks: https://github.com/scriptype/writ-cms/blob/3181ed4a31f240579c7a30f23cd4c7252ec8a329/src/tests/programmatic.js#L621

</details>


<details>
<summary><h2>Releasing changes to website:</h2></summary>

- Stop the preview
- Build final output: `npm run build`
- Commit and push changes using git

The website is served from the `docs` folder, where the final output be built to. 
</details>
