console.log(moment().format('MMMM Do YYYY'));

$('#td').html(moment().format('MMMM Do YYYY h:mm a'));
setInterval(function(){
    $('#td').html(moment().format('MMMM Do YYYY h:mm a'));
},30000);