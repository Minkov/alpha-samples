$(function () {
    var template = $("#power-tmp").html();

    $(".tb-new-power").on("change", function () {
        var powerName = $(this).val();

        var $powerContainer = $(template);
        $powerContainer.find("span").html(powerName);
        $powerContainer.find("input").val(powerName);

        $powerContainer.insertBefore(this);
    });
});
