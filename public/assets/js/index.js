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
    let id = $(this).data("id");
    let devourState = $(this).data()
})
