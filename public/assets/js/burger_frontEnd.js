$(document).ready(function () {
    console.log("ready!");


    $(".create-form").on("submit", function (event) {
        event.preventDefault()
        var newBurger ={
          burger_name: $("#burgerName").val().trim()  
        } 
        console.log(newBurger)

        // Send post request
        $.ajax("/api/burger",{
            type: "POST",
            data: newBurger
        }).then(function(result){
            console.log("created new burger")
            console.log(result)
            // Reload the page
            location.reload()
        }
        );


    });

});