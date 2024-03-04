const setResizecolumn = setInterval(() => {
    if ($('th').length > 0) {
        $('th').each(function (index) {
            $(this).attr("data-rtc-resizable", index);
        });
        (function (window, ResizableTablecolumns, undefined) {
            var els = document.querySelectorAll('table');
            for (var index = 0; index < els.length; index++) {
                var table = els[index];
                if (table['rtc_data_object']) {
                    continue;
                }
                var options = {
                    resizeFromBody: false,
                    maxInitialwidthHint: 10
                };
                if (table.querySelectorAll('thead > tr').length > 1) {
                    options.resizeFromBody = false;
                }
                new ResizableTablecolumns(els[index], options);
            }
        })(window, window.validide_resizableTablecolumns.ResizableTablecolumns, void (0));
        clearInterval(setResizeColumn)
    }
}, 3000);