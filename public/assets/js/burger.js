$(".devburger_name").on("click", function(event) {
    var id = $(this).data("burger_nameid");

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("devoured id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addburger_name").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addburger_name [name=burger_name]").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });       