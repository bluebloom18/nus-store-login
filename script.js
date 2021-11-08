function getFromServer(){
    $.getJSON('https://nusstore.glitch.me/cust', mydata );
    }

function mydata(data){
var text = "<p>" `<p class="display-1"> Account: ${item.user_id}, ${item.first_name} ${item.last_name}  
              <br> Email: ${item.email} </p>`

data.forEach(function(item){    
      text = text + `<tr><td> ${item.custId} </td> <td> ${item.pwd} </td> <td> ${item.name} </td>  
                  <td> ${item.gender} </td> </tr>`
      
      });

}
/* TABLE
function mydata(data){
      //console.log(data);
      var text ="<table width class='table table-striped table-dark'><thead><td>Cust ID</td> <td>Password</td> <td>Name</td><td>Gender</td></thead><tbody>";
      data.forEach(function(item){    
      text = text + `<tr><td> ${item.custId} </td> <td> ${item.pwd} </td> <td> ${item.name} </td>  
                  <td> ${item.gender} </td> </tr>`
      
      });
      text += "</tbody></table>"
      $(".mypanel").html(text);   
  }
*/