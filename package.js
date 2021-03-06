Package.describe({
    name: 'zamphyr:dochead',
    summary: 'Isomorphic way to manipulate document.head for Meteor apps',
    version: '0.3.0',
    git: 'https://github.com/zamphyr/meteor-dochead.git'
})

Npm.depends({
    'load-script': '1.0.0'
})

var configure = function(api) {
    api.versionsFrom('1.3')
    api.use(['es5-shim', 'ecmascript', 'tracker'])
    api.use('kadira:flow-router-ssr@3.12.1', ['client', 'server'], {weak: true})

    api.addFiles('main.js', 'client')
    api.addFiles('lib/client.js', 'client')
}

Package.onUse(function(api) {
    configure(api)
    api.export('DocHead')
})

Package.onTest(function(api) {
    configure(api)
    api.use(['react', 'tinytest', 'random', 'tracker', 'underscore'])

    api.addAssets('test/fakescript.js', 'client')
    api.addFiles('test/client.js', 'client')
})
