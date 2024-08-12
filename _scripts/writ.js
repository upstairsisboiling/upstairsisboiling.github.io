const writ = require('writ-cms')

// Make post.category = category
// Omit posts key to avoid circular referencing
// TODO: do it inside compiler
writ.useContentModel(contentModel => {
  contentModel.categories.forEach(category => {
    category.posts.forEach(post => {
      const { posts, ...restCategory } = category
      post.category = restCategory
    })
  })
  return contentModel
})


module.exports = writ
