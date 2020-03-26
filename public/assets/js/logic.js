
$(function() {

    //form
    $('.form').on('submit', function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $('#burger-input').val().trim(),
        devoured: 0
      };
    
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(function() {
        console.log('New Burger Added!');   
    
        location.reload();
      });
    });


  //eat btn
    $('.devour-btn').on('click', function(event) {

        event.preventDefault();
      var burgerId = $(this).data('id');
      
      var devouredState = {
        devoured: 1
      };
  
      $.ajax('/api/burgers/' + burgerId, {
        type: 'PUT',
        data: devouredState
      }).then(function() {
        console.log("ate burger");
        location.reload();
      });
    });

    //delete btn
    $('.delete-btn').on('click', function(event) {

        event.preventDefault();
        var burgerId = $(this).data('id');
    
        $.ajax('/api/burgers/' + burgerId, {
          type: 'DELETE',
     
        }).then(function() {
   
          location.reload();
        });
      });
  });