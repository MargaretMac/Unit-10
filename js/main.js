var database = firebase.database();
var reservations = database.ref("reservations");

$("#reservation").on("submit",function(e){
  e.preventDefault();
  var reservation = reservations.push();
  reservation.set({
    name:$("#reservation #name").val(),
    date:$("#reservation #date").val(),
    time:$("#reservation #time").val(),
  })
})

reservations.on("value", function(snapshot){
  console.log(snapshot.val())
var body = $("#reservations tbody");
body.html("")
$.each(snapshot.val(), function(key, value){
body.append(" <tr> <td>"+value.name+"</td><td>"+value.date+"</td><td>"+value.time+"</td></</tr>")  

})
}) 