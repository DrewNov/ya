(function ($) {
    $(function ($) {
        $.get('getTableData')
            .success(function (tableData) {
                $('.container').html(tableData);
            })
            .error(function () {
                $('.container').html('Can\'t load data.');
            });
    });
})(jQuery);