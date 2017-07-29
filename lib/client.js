var titleDependency = new Tracker.Dependency()

DocHead = {
    currentTitle: null,
    
    setTitle(title) {
        titleDependency.changed()
        document.title = title
    },

    addMeta(info) {
        this._addTag(info, 'meta')
    },

    addLink(info) {
        this._addTag(info, 'link')
    },

    getTitle() {
        titleDependency.depend()

        return document.title
    },

    addLdJsonScript(jsonObj) {
        const strObj = JSON.stringify(jsonObj)
        this._addLdJsonScript(strObj)
    },

    loadScript(url, options, callback) {
        npmLoadScript(url, options, callback)
    },

    _addTag(info, tag) {
        const meta = this._buildTag(info, tag)

        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', meta)
    },

    _buildTag(metaInfo, type) {
        let props = ''

        for (let key in metaInfo) {
            props += `${key}="${metaInfo[key]}" `
        }

        props += 'dochead="1"'
        var meta = `<${type} ${props}/>`

        return meta
    },

    _addLdJsonScript(stringifiedObject) {
        const scriptTag = `<script type="application/ld+json" dochead="1">${stringifiedObject}</script>`

        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', scriptTag)
    },

    removeDocHeadAddedTags() {
        const elements = document.querySelectorAll('[dochead="1"]')

        for (let element of elements) {
            element.parentNode.removeChild(element)
        }
    }
}
