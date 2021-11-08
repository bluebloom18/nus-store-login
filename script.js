function getFromServer(){
    $.getJSON('https://nusstore.glitch.me/cust', mydata );
    }


function mydata(data){
      console.log(data);
      var text ="<table width class='table table-striped table-dark'><thead><td>User ID</td> <td>Name</td> <td>Email</td></thead><tbody>";
      data.forEach(function(item){    
      text = text + `<tr><td> ${item.custId} </td> <td> ${item.pwd} ${item.name} </td>  
                  <td> ${item.gender} </td> </tr>`
      
      });
      text += "</tbody></table>"
      $(".mypanel").html(text);   
  }
