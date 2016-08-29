var SideKit = window.SideKit || {};
// ## SideKit.factory namespace 
// 
// Sub-namespace of SideKit that encapsulates the functionality to handle 
// widget Initialization. 
SideKit.factory = {};

(function (Factory, $) {
    'use strict';

    // **SideKit.factory.create()**
    //  
    // Initializes the widgets specified on the list. SideKit.factory holds a list
    // of available widgets as they register to its namespace dynamically when they
    // are inserted on the page.
    //
    // - `param Object[] widgets` - The list of collected widget configuration objects.  
    Factory.create = function (widgets) {
        var idx = 0;
        createWidgetFactorial(idx, widgets);
    };

    // **createWidgetFactorial()**
    //  
    // Initializes the widgets specified on the list. SideKit.factory holds a list
    // of available widgets as they register to its namespace dynamically when they
    // are inserted on the page.  
    // 
    // - `param integer idx - The current index
    // - `param Object[] widgets` - The list of collected widget configuration objects.  
    function createWidgetFactorial(idx, widgets) {
        if (idx < widgets.length) {
            var config = widgets[idx],
                name = config.w,
                w;

            if (Factory.hasOwnProperty(name)) {
                w = Factory[name];
                $.when(w.init(config.data)).then(function () {
                    w.run(config.id, config.data);
                    createWidgetFactorial(++idx, widgets);
                });
            }
        } else {
            widgets = null;
        }
    }
})(SideKit.factory, jQuery);