$("document").ready(function(){
  var nameArray=[];
  
   //SET===================================================
  $("#submitButton").on('click', function(evt){
    evt.preventDefault();
   
        var cName = $("#inputId").val();  
        debugger;
        localStorage.clear();
        var jk= localStorage.setItem('fav_food', JSON.stringify(cName));


        //GET =====================================================
        var client =localStorage.getItem('fav_food');
          var gb = JSON.parse(client);
          console.log(gb);

        $("#displayName").html(gb);
     });

      //CLEAR SETTINGS ==========================================
      $("#clearButton").on('click', function (){
        localStorage.removeItem('fav_food');
      });


});