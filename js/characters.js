let styles = `
    body{
        font-family: Montserrat;
        font-style: normal;
        background: #070908;
    }
    a{
        text-decoration: none;
        color: rgba(255,255,255,.55);
        font-size: 1.7em;
        padding: 0.5rem 4.5rem;
    }
    nav{
        align-items: center;
        display: flex;
        width: -webkit-fill-available;
        justify-content: center;
    }
    input{
        font-size:1.2rem;
        padding:1rem; width: 17rem;
        border-radius: 0.3rem; 
        background:rgba(230, 59, 61, 0.07); 
        color: white; 
        border: 0;
    }
    #find{
        margin-top:3rem;
    }
    .card{
        display: flex;
        width: 45%;
        color: white;
        padding: 1rem;
        background-color:rgba(230, 59, 61, 0.07);
        margin:2rem;
        box-shadow:1px 1px 10px black;
    }
    .def{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    img{
        margin: 1rem;
        max-width: 10rem;
    }
    .commentInput{
        width:45%; 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }
    .comments{
        display: flex;
        flex-direction: column-reverse;
        width: 75%;
        color: white;
        padding: 1rem;
        background-color: rgba(230, 59, 61, 0.07);
        margin: 2rem;
        box-shadow: 1px 1px 10px black;
    }
    #comment{
        width:45%; 
    }
    #take{
        padding: 1rem;
        color: white;
        background-color:rgb(15 14 18);
        border-radius: 0.3rem;
        margin-left: 1.5rem;
        font-family: Montserrat;
        font-size: 1rem;        
        border: black;
    }

    .radial-gradient {
        position:fixed;
        z-index: -1;
        top:0px;
        left:0px;
        height:100%;
        width:100%;
        
        /*Fallback if gradeints don't work */
        background: #070908;
        /*Linear gradient... */
        background: 
          radial-gradient(
           at center,rgb(114 36 50), #070908
          );
      }
`
let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

$(document).ready(function() {
    $('<nav><a href="index.html">Home</a><a href="watch.html">Watch</a><a href="read.html">Read</a><a href="characters.html">Characters</a></nav>').appendTo('body');

    $('<input type="search" id="find" placeholder="Enter Name and Surname">').appendTo('body');

    $('body').css({"display":"flex", "justify-content":"center", "flex-direction":" column", "align-items": "center"});
    // $('body').css({"background-image": "url(decor/gradient2.png)", "background-size":"cover", "background-repeat":"no-repeat", "background-attachment":"fixed"})

    $('body').append('<div class="card"></div>');
    $('.card').append('<img src="img/kanekibio.png" alt="kaneki"></img>');
    $('.card').append('<div class="def"></div>');
    $('.def').append('<h1>Ken Kaneki</h1>'+'<p>"I`m not the protagonist of a novel or anything. I`m just a college student who likes to read, like you could find anywhere. But... if, for argument`s sake, you were to write a story with me in the lead role, it would certainly be... a tragedy."</p>');

    $('body').append('<div class="card 2" ></div>');
    $('.card.2').append('<img src="img/juuzoubio.png" alt="juuzou"></img>');
    $('.card.2').append('<div class="def 2"></div>');
    $('.def.2').append('<h1>Juuzou Suzuya</h1>'+'<p>"You shouldn`t turn your back on the enemy."</p>');

    $('body').append('<div class="card 3" ></div>');
    $('.card.3').append('<img src="img/toukabio.png" alt="touka"></img>');
    $('.card.3').append('<div class="def 3"></div>');
    $('.def.3').append('<h1>Touka Kirishima</h1>'+'<p>"What the hell do you know?! It`s all because I can`t eat, because I could be a target at any time, all because I`m a ghoul! No matter how much I try, there`s a wall I can never jump over, and there`s happiness that I can never have. But I`m still hanging on to life. Despite it all."</p>');

    $('body').append('<div class="card 4" ></div>');
    $('.card.4').append('<img src="img/arimabio.png" alt="arima"></img>');
    $('.card.4').append('<div class="def 4"></div>');
    $('.def.4').append('<h1>Kishou Arima</h1>'+'<p>"I... I`ve... always... hated it. I hated myself, who only ever stole from others... I feel like I was finally... able to leave something behind..."</p>');
    
    $('body').append('<div class="card 5" ></div>');
    $('.card.5').append('<img src="img/etobio.png" alt="eto"></img>');
    $('.card.5').append('<div class="def 5"></div>');
    $('.def.5').append('<h1>Eto Yoshimura</h1>'+'<p>"..What cannot change can only be broken.<br><br>This is so to me, who left behind everything necessary inside the womb."</p>');

    $('body').append('<div class="card 6"></div>');
    $('.card.6').append('<img src="img/rizebio.png" alt="rize"></img>');
    $('.card.6').append('<div class="def 6"></div>');
    $('.def.6').append('<h1>Rize Kamishiro</h1>'+'<p>"Those cowardly lions have confined themselves in a cage of their own free will. Even though the lion is supposed to be the king of all beasts."</p>');

    $('body').append('<div class="card 7" ></div>');
    $('.card.7').append('<img src="img/madobio.png" alt="mado"></img>');
    $('.card.7').append('<div class="def 7"></div>');
    $('.def.7').append('<h1>Kureo Mado</h1>'+'<p>"When you`re in front of the enemy, even if your hands are trembling, fight. That`s what it means to be a `professional.`"</p>');

    $('.card:eq(0)').toggleClass('wow animate__animated animate__fadeInDown');
    $('.card.2').toggleClass("wow animate__animated animate__fadeInLeft")
    $('.card.3').toggleClass("wow animate__animated animate__fadeInRight");
    $('.card.4').toggleClass("wow animate__animated animate__fadeInLeft")
    $('.card.5').toggleClass("wow animate__animated animate__fadeInRight");
    $('.card.6').toggleClass("wow animate__animated animate__fadeInLeft");
    $('.card.7').toggleClass("wow animate__animated animate__fadeInRight");
    $('#find').toggleClass("wow animate__animated animate__zoomIn");
    /////////////////////////////////////////////////
    let card1 = $(".card h1:eq(0)").text();
    let card2 = $(".card.2 h1").text();
    let card3 = $(".card.3 h1").text();
    let card4 = $(".card.4 h1").text();
    let card5 = $(".card.5 h1").text();
    let card6 = $(".card.6 h1").text();
    let card7 = $(".card.7 h1").text(); 

    let cards = [];
    cards.push(card1, card2, card3, card4, card5, card6, card7);

    $('#find').on("input", function () {
        $('.commentInput').hide();
        let search = $(this).val();

        for (let index = 0; index < cards.length; index++){
            $('.card:eq('+index+')').css({"visibility": "visible"}).hide();
        }

        for (let index = 0; index < cards.length; index++) {
            let filteredCards = [];
            if(cards[index].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                for (let i = 0; i < cards.length; i++) {
                    filteredCards[i] = index;  
                    $('.card:eq('+index+')').removeClass('.wow').show();
                }
            }
        }
        $('#find').focusout(function () { 
            for (let index = 0; index < cards.length; index++) {
                $('.card:eq('+index+')').show();
                    }
                $('.commentInput').show();
            });
    });
    // $('#find').keyup(function () { 
    //     event.preventDefault();
    //     $('.commentInput').hide();
    //     console.log($('#find').val());
    //     for (let index = 0; index < cards.length; index++) {
    //         $('.card:eq('+index+')').css({"visibility": "visible"}).hide();
    //         }
    //     for (let index = 0; index < cards.length; index++) {
    //             if(($('#find').val()).toLocaleLowerCase() == cards[index].toLocaleLowerCase()){
    //                 console.log(cards[index]+" character was found!");
    //                 $('.card:eq('+index+')').removeClass('.wow').show();
    //             }
    //         }
    //     $('#find').focusout(function () { 
    //             for (let index = 0; index < cards.length; index++) {
    //                 $('.card:eq('+index+')').show();
    //             }
    //             $('.commentInput').show();
    //         });
    //     });
    ///////////////////////////////////////////////
        $('nav a').hover(function () {
            $(this).css('color', '#E63B3D');
            }, function () {
            $(this).removeAttr('style');
            }
        );

    // $('<h1 style="color:white">Comments</h1>').appendTo('body');
    $('<div class="commentInput"><div>').appendTo('body');
    $('<input type="text" id="comment" placeholder="Leave a comment">').appendTo('.commentInput');
    $('<button id="take">Submit</button>').appendTo('.commentInput');
    $('<div class="comments"><p id="remove">Click to remove comments above</p><div>').appendTo('body');
    // if($('.comments p').val()=="") $('.comments').hide(); //////will fix later

    /////////////////////////////////
    $('<div class="radial-gradient"></div>').appendTo('body');
    $(document).mousemove(function(event) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        
        mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        
        $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgb(114 36 50), #070908)');
      });
    /////////////////////////////////////////
        $('#take').click(function () { 
            $('.comments').show();
            console.log("Btn clicked");
            event.preventDefault();
            if(document.querySelector("#comment").value==""){}
            else{ $('<p>'+document.querySelector("#comment").value+'</p>').appendTo('.comments');

/////////////////////////////////////////////////////////////localStorage exp
            let comment = $('#comment').val();
            commentStorage.push(comment)
            console.log(comment);
            localStorage.setItem("comments", commentStorage);       

//////////////////////////////////////////////////////////////////////
            document.querySelector("#comment").value="";    
        }
        });

        const commentData = JSON.stringify(localStorage.getItem("comments"));
        console.log(commentData);
        console.log(commentData.slice(1, commentData.length-1)); 
        const commentStorage = (commentData.slice(1, commentData.length-1)).split(",");
        console.log(commentStorage);

        const commentsDisplay =  localStorage.getItem("comments").split(",");
        for (let index = 0; index < commentsDisplay.length; index++) {
            $('<p>'+commentsDisplay[index]+'</p>').appendTo('.comments');
        }

        // $('.comments p').click(function () { 
        //     localStorage.removeItem("comments");    
        //     $('.comments p').remove();
        //     commentData = null;
        //     commentStorage = null;
        //     commentsDisplay = null        });
});

