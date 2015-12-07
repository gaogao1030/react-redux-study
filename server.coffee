webpack = require 'webpack'
webpackDevMiddleware = require 'webpack-dev-middleware'
webpackHotMiddleware = require 'webpack-hot-middleware'
config = require './webpack.config'

express = new require 'express'
app = new express
port = 3000

compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{ noInfo: true,publickPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get "/", (req,res) ->
  res.sendFile(__dirname + '/index.html')

app.listen(port,(error)->
  if error
    console.error error
  else
    console.info "listening on port %s.", port
)
