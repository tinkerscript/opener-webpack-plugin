# opener
Webpack page opener plugin

## Usage
```javascript
// webpack.config.js
const OpenerPlugin = require('opener-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new OpenerPlugin({
      url: 'http://localhost:8080' // here your dev URL
    })
  ]
}
      
```
