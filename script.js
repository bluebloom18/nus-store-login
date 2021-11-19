//syntax: $.getJSON(url, [data],[callback]);
//AJAX library  fdas,mnfmnasd
///fdslnf dsfnj

const uid = document.getElementById('custId');
const pass = document.getElementById('pwd');
const b1 = document.getElementById('b1');

function getFromServer(e){
  e.preventDefault();       //?
  var querryStr =  "https://nusstore.glitch.me/login?custId=" + uid.value + "&pwd=" + pass.value;
  console.log (querryStr);
  $.getJSON(querryStr, mydata);
  }

function mydata(data){    
  //console.log(data);
  if (data == true) {
    document.getElementById("form").innerHTML = "";
    
    getFromServer1();
    //window.location.href = "welcome.html" 

  }
  else {
    var text = "<p>Try Again </p>";
    $(".mypanel").html(text);
  }
  
}

function getFromServer1(){
     $.getJSON('https://nusstore.glitch.me/items', mydata1 );
  }


// PARAGRAPH
function mydata1(data){
  //console.log(data);
  
  //var text = "<p>"; 

  var text = `<div class="row px-5 pt-5">`

  data.forEach(function(item){    
      //text = text + `itemID: ${item.itemId},  Name:  ${item.name}, Price: ${item.price}, 
       //           pic: ${item.pic} <br />`;    //Template Literal

       text = text +`    <div class="col-md-4 mt-4 mt-sm-0 card-container">
       <div class="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
       <div class="card-body p-4 py-0 h-xs-440p">
       <h5 class="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto"> ${item.name}</h5>
       <p class="price">\$ ${item.price} <p> 
       </div>
       <p class="btn w-100 px-4 text-center mx-auto">
         <input type="submit" class="btn btn-dark btn-lg w-100" name="add-button" value="Buy Now"></p>
     </div>
   </div>`;

      });

      text = text+ `<div>`;
  
      $(".mypanel").html(text);
}



b1.addEventListener('click',getFromServer);



