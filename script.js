//syntax: $.getJSON(url, [data],[callback]);
//AJAX library  fdas,mnfmnasd
///fdslnf dsfnj

const uid = document.getElementById('userid');
const b1 = document.getElementById('b1');

function getFromServer(e){
  e.preventDefault();       //?
  var querryStr =  "https://nusstore.glitch.me/cust?user_id=" + uid.value;
  //console.log (querryStr);
  $.getJSON(querryStr, mydata );
  }

function mydata(data){
  var item = data[0];
  var text =  `<p class="display-1"> Account: ${item.user_id}, ${item.first_name} ${item.last_name}  
              <br> Email: ${item.email} </p>`
  $(".mypanel").html(text);
}
b1.addEventListener('click',getFromServer);



   