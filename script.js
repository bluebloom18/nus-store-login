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
  $.getJSON(querryStr, mydata );
  }

function mydata(data){
  console.log(data);
  //var text =  `<p class="display-1"> custId: ${data.custId}, Pass: ${data.pwd},  Name: ${data.name}, Gender: ${data.gender} </p>`;
  $(".mypanel").html(data);
}
b1.addEventListener('click',getFromServer);



