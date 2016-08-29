var SideKit = window.SideKit || {};
// ## SideKit.widget namespace 
// 
// Sub-namespace of SideKit that provides common funcionality for the widgets.
SideKit.widget = {};

(function (Widget, $, Mustache, undefined) {
    'use strict';
    // **SideKit.widget.env** 
    // 
    // Current development environment
    Widget.env = 'DEV';
    // **SideKit.widget.assetsPath** 
    // 
    // The path where the vendor files are located. If `cdnJs` is specified, the widget 
    // will load the correspondent scripts dynamically from its cdn source.
    Widget.assetsPath = null;

    // **SideKit.widget.getStyleSheet()**
    //  
    // Injects a stylesheet into the current document
    //
    // - `param string url` - The list of collected widget configuration objects.  
    Widget.getStyleSheet = function (url) {
        $d = $.Deferred();
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
        $d.resolve(link);
        return $d.promise();
    };

    // **SideKit.widget.getMainSideKitScriptTag()**
    //  
    // Returns the script tag that loads the library
    Widget.getMainSideKitScriptTag = function () {
        if (document.currentScript) {
            return document.currentScript.src;
        }
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].getAttribute('data-sidekit')) {
                Widget.env = scripts[i].src.match(/sidekit-core.min.js|sidekit-core.js/) ? 'PROD' : 'ENV';
                return scripts[i];
            }
        }
        return null;
    };

    // **SideKit.widget.getAssetsPath()**
    //  
    // Returns the vendor assets path. Its the value configured in the `data-sidekit` attribute 
    // of the script tag that loads the library.  
    Widget.getAssetsPath = function () {
        if (this.assetsPath === null) {
            var script = this.getMainSideKitScriptTag();
            this.assetsPath = script.getAttribute('data-sidekit');
        }
        return this.assetsPath;
    };

    // **SideKit.widget.render()**
    //  
    // Renders the widget to the document. 
    //
    // - `param jQuery Object $el - The element to render the contents
    // - `param string template` - The mustache string template to render the widget 
    // - `param Object data` - The mustache data to transform the template
    Widget.render = function ($el, template, data) {
        var html = '';
        if (template !== undefined && template.length) {
            try {
                html = Mustache.to_html(template, data ||  {});
            } catch (__error) {
                html = __error.toString();
            }
        }
        $el.html(html);
    };
})(SideKit.widget, jQuery, Mustache);
