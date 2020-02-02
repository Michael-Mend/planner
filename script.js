var timeBlock = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']

for (i = 0; i < timeBlock.length; i++) {
    $('.container').append('<div class="row"\><div class="col-sm-1 sTime text-center">' + timeBlock[i] +'</div\><div class="col-sm-10"\><textarea id=' + 'txt' + i + ' cols="30" rows="4"> </textarea\></div\><div class="col-sm-1"><button id=' + i + '></button></div\></div>')
};

$('#td').html(moment().format('MMMM Do YYYY h:mm a'));
setInterval(function(){
    $('#td').html(moment().format('MMMM Do YYYY h:mm a'));
},30000);

$('#' + timeBlock[i]).click(function(){
        console.log($('#txt' + ));
    });