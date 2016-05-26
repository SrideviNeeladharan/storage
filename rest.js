$(document).ready(function()
{
    $("#table").hide();

  //var selected_index = -1;
  var tbClients  = localStorage.getItem("tbClients");//Retrieve the stored data 
  var tbz = JSON.parse(tbClients); 
  if(tbClients == null || tbClients == "null")
  {
      var tbClients = [];
  }

        $("#submitButton").click(function(event)
            {
                event.preventDefault();

              //generating the table 
          var client = JSON.stringify(
                      {
                      movie   : $("#movieName").val(),
                      release : $("#year").val(),
                      director: $("#dir").val()
                      });
          
          debugger;
          tbClients.push(client);
          localStorage.setItem("tbClients", JSON.stringify(tbClients));
          alert("The data is saved.");                              
          
          debugger;
                                       
          for(var i in tbClients)
          { 
            var cli = JSON.parse(tbClients[i]); 

          }
          $("#table1").append('<tr><td>' + cli.movie + '</td><td>' + cli.release + '</td><td>' + cli.director +'</td><td>' + '<button id="editButton">Edit</button>'+ '<button>Delete</button>' + '</td></tr>');
                      
                $("#form").hide();
                $("#table").show();
  
        });
                   
          //Click to update list=========================================================================================

             $("#button1").click(function(event)
                {
                   $("#table").hide();
                   $("#form").show();
                });
           

  });
//edit button ==============================================

  


//reset form ========================================================================================================================

  function resetForm()
  {
     $("#form").reset();

  }