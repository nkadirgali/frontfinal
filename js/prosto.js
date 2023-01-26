$(document).ready(function(){
    $('.navbar-nav a ').hover(function () {
        $(this).css('color', '#E63B3D');
        }, function () {
        $(this).removeAttr('style');
        }
    );
});

function playSound(){
    let audio1 = document.getElementById('audio1');
    audio1.play();
};  

$(document).ready(function(){
    $('.navbar-brand').click(function () { 
        $('body').css('')
    });
});


$(document).ready(function () {
    $('.intro img').css({"opacity":"75%"})
    $('body').css({"background-image": "url(decor/gradient2.png)", "background-size":"cover", "background-repeat":"no-repeat", "background-attachment":"fixed"});
    $('<audio src="temp/канеки.mp3" id="audio1"></audio>').appendTo('body');
    $('.information img').css({"margin-top":"-1.675rem"})
});

/*ne zakonchil*/
let anim = document.querySelector(".intro");




