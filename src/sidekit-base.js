// ## SideKit namespace 
// 
// This is the top level namespace of the library. 
(function (SideKit, $) {

    // **var widgets**
    // 
    // Widget list of rendered plugins with the information required for the widget factory
    // to initialize and create the widgets 
    var widgets = [];

    // **SideKit.init()** 
    //
    // Initializes the framework. This method should be called right after your document 
    // has been loaded. For example: 
    // ```js 
    // $(document).ready(function(){
    //  SideKit.init();    
    // });
    // ```
    SideKit.init = function () {
        initializePartialSelectorExpression();
        collectWidgetsConfigurationData();
        this.factory.create(widgets);
        widgets = [];
    };

    // **initializePartialSelectorExpression()** 
    //  
    // Creates a jquery expression to be able to select elements with data attributes 
    // such as `data-sidekit-*`
    function initializePartialSelectorExpression() {
        $.expr[':'].hasAttr = $.expr.createPseudo(function (regex) {
            var re = new RegExp(regex);
            return function (obj) {
                var attrs = obj.attributes;
                for (var i = 0; i < attrs.length; i++) {
                    if (re.test(attrs[i].nodeName)) return true;
                }
                return false;
            };
        });
    }

    // **collectWidgetsConfigurationData()**
    //
    // Collects and parse the data required for widgets initialization.
    function collectWidgetsConfigurationData() {
        $("*:hasAttr(^data-sidekit-.+$)").each(function () {
            parseWidgetData(this);
        });
    }

    // **parseWidgetData()** 
    // 
    // Parses collected element to get the configuration data for the widget's initialization 
    function parseWidgetData(el) {
        var prefix = 'data-sidekit-', attr, name, widget;
        for (var i = 0, aLen = el.attributes.length; i < aLen; i++) {
            attr = el.attributes[i];
            name = attr.name.toLowerCase();
            if (name.indexOf(prefix) === 0) {
                /**
                 * 
                 */
                if (window[attr.value]) {
                    widget = name.replace(prefix, '').toLowerCase();
                    widgets.push({ id: el.id, data: window[attr.value], w: widget });
                    $(el).removeAttr(name);
                } else {
                    throw "Something strange has happened. Widget '" + attr.name + "' data not found!";
                }
            }
        }
    }
})(window.SideKit = window.SideKit || {}, jQuery);