module.exports = function (templateParams) {
  return (
    `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>  ${templateParams.htmlWebpackPlugin.options.title} </title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="author" content=""/>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="HandheldFriendly" content="true">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta http-equiv="Cache-Control" content="no-transform">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <!--other: default, black, black-translucent-->
    <meta name="format-detection" content="telephone=no">
    </head>
    <script>

    </script>
    <body>
    <div id="container" style="height:100%"></div>
    <!--<div>development mode</div>-->
    </body>
    </html>`
  )
}
