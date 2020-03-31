const openBrowser = require('./openBrowser')

const once = fn => {
  let called = false

  return function () {
    if (!called) {
      called = true
      fn.apply(this)
    }
  }
}

function OpenerPlugin (options) {
  options || (options = {})
  this.url = options.url
}

OpenerPlugin.prototype.apply = function (compiler) {
  const url = this.url

  const executeOpen = once(() => {
    openBrowser(url)
  })

  compiler.plugin('done', stats => {
    if (!stats.hasErrors()) {
      executeOpen()
    }
  })
}

module.exports = OpenerPlugin
