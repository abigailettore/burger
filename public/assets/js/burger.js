$(function(){
    $(".eat-burger").on("click", function(event)
    {
        var id = $(this).data("id");
        var eatBurger = $(this).data("eatBurger");

        var burgerState = {
            devoured:true
        };

        $.ajax("/api/burgers"+id,
        {
            type: "PUT",
            data: burgerState
        }).then(
            function(){
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event)
    {
        event.preventDefault();
        var addBurger = {
            burger_name: $("#burger").val.trim(),
            devoured: 0
        };

        $.ajax("/api/burger",
        {
            type: "POST",
            data: addBurger
        }).then(
            function()
            {
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event)
    {
        var id = $(this).data("id");

        $.ajax("/api/burgers"+ id,
        {
            type: "DELETE"
        }).then(
            function(){
                location.reload();
            }
        );
    });
});