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
    window.location.href = "welcome.html" 
  }
  else {
    var text = "<p>Try Again </p>";
    $(".mypanel").html(text);
  }
  
}
b1.addEventListener('click',getFromServer);



