$(() => {
    $(".devour-burger").on("click", function () {
      const id = $(this).data("id");
      const updateBurger = {
        devoured: true
      };
  
      $.ajax(`/api/burgers/${id}/devour`, {
        type: "PUT",
        data: JSON.stringify(updateBurger),
        contentType: "application/json; charset=UTF-8"
      }).then(() => {
        location.reload();
      });
    });
  
    $(".add-burger").on("submit", (event) => {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#name").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function () {
      const id = $(this).data("id");
  
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE"
      }).then(() => {
        location.reload();
      });
    });
  });