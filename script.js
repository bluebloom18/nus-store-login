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
    getFromServer1();
    //window.location.href = "welcome.html" 
  }
  else {
    var text = "<p>Try Again </p>";
    $(".mypanel").html(text);
  }
  
}

function getFromServer1(){
    $.getJSON('https://nusstore.glitch.me/cust', mydata1 );
  }


// PARAGRAPH
function mydata1(data){
  //console.log(data);
  
  var text = "<p>"; 
  data.forEach(function(item){    
      text = text + `CustID: ${item.custId}, Password: ${item.pwd}, Name:  ${item.name}, 
                  Gender: ${item.gender} <br />`;    //Template Literal
      
      });
  
      $(".mypanel").html(text);
}



b1.addEventListener('click',getFromServer);



