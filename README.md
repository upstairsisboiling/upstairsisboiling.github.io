# Upstairs is boiling

Welcome to the source repository of <a href="https://upstairsisboiling.com">Upstairs is boiling website</a>.

If you want to start a local preview of the website and release updates, then follow the way you prefer.

## Techno way

```sh
# Clone the repo
git clone git@github.com:upstairsisboiling/upstairsisboiling.github.io.git

# Navigate to project directory
cd upstairsisboiling.github.io

# Install project dependencies
npm i

# Start local preview server
npm start # Check http://localhost:3000

# Build final output in the docs folder
npm run build

# Commit and push changes to master
```

## Folk way

### Make sure you have these installed in your system:

- A command-line terminal program such as <a href="https://iterm2.com/">iTerm2</a> or <a href="https://git-scm.com/">Git Bash</a>.
- Git (<a href="https://git-scm.com">Download</a>)
- Node.js & npm (<a href="https://nodejs.org/en">Download</a>)
- Writ-CMS (<a href="https://github.com/scriptype/writ-cms#installation">Download</a>)

### Download the project by running this command:

```sh
git clone git@github.com:upstairsisboiling/upstairsisboiling.github.io.git
cd upstairsisboiling.github.io
```

### Start watcher:

```sh
npm start
```

Then open http://localhost:3000 in your browser.

Preview will automatically update itself as you make changes.

### Release changes to website:

- Stop the preview
- Build final output: `npm run build`
- Commit and push changes using git

The website is served from the `docs` folder, where the final output be built to. 
