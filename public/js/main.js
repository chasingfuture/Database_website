$(document).ready(function(){


$('.table-remove').click(function () {
    $(this).parents('tr').detach();
  });

//<td><span class="table-remove glyphicon glyphicon-remove">
//btn btn-success
//'.table-remove'

$("#mytable #checkall").click(function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
    
    //$("[data-toggle=tooltip]").tooltip();
});
