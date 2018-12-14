$("#burgerform").on("submit", function(event) {
  event.preventDefault();

  let newBurger = {
      burgerName: $("#burgerinput").val().trim()
  };

  $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
  }).then(
      function() {
          console.log("New burger posted!");
          location.reload();
      }
  )
});

$("#devourbtn").on("click", function(event) {
    event.preventDefault();
    console.log("Clicked");
    let id = $(this).data("id");
    let devourState = $(this).data("devourState");

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
       
    }).then(
        function(){
            console.log("Changed Devoured state to: " + devourState);
            location.reload();
        }
    )
})
