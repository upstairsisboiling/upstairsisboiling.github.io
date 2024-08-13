const writ = require('writ-cms')

// Make post.category = category
// Omit posts key to avoid circular referencing
// TODO: do it inside compiler
writ.useContentModel(contentModel => {
  contentModel.categories.forEach(category => {
    const { posts, ...restCategory } = category
    category.posts.forEach(post => {
      post.category = restCategory
    })
  })
  return contentModel
})


module.exports = writ
