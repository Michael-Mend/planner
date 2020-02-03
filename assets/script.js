var timeBlock = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']

for (i = 0; i < timeBlock.length; i++) {
    $('.main').append('<div class="row"\><div class="col-sm-1 sTime text-center">' + timeBlock[i] +'</div\><div class="col-sm-10"\><textarea id=' + 'txt' + i + ' cols="30" rows="4"> </textarea\></div\><div class="col-sm-1"><button class="sv" id=' + i + '></button></div\></div>')
    
    $('#txt' + i).text(localStorage.getItem(i));

    if ($('#' + i).attr('id') > moment().format('H') - 9) {
        $('#txt' + i).attr('class', 'future')
    } else if ($('#' + i).attr('id') == moment().format('H') - 9) {
        $('#txt' + i).attr('class', 'present')
    } else if ($('#' + i).attr('id') < moment().format('H') - 9) {
        $('#txt' + i).attr('class', 'past')
    }
};

setInterval(function(){
    $('#td').html(moment().format('MMMM Do YYYY h:mm a'));
},10000);

$('#td').html(moment().format('MMMM Do YYYY h:mm a'));

$('.sv').click(function(e){
    localStorage.setItem(e.target.id, $('#txt' + e.target.id).val());
});

$('#clr').click(function(){
    $('textarea').text('')
    return localStorage.clear();
});