let night=true;
function changetheme() {
	if(night==true) night=false;
	else night=true;

	let sun=document.getElementById("sun").style;
	let moon=document.getElementById("moon").style;

	if(sun.display=="none"){
		sun.display="inline-block";
	}else{
		sun.display="none";
	}
	if(moon.display=="none"){
		moon.display="inline-block";
	}else{
		moon.display="none";
	}

	$("nav").toggleClass("navbar-dark");
	$("nav").toggleClass("navbar-light");
	$(".changetheme").toggleClass("bg-dark");
	$(".changetheme").toggleClass("bg-light");
	$(".txttheme").toggleClass("text-light");
	$(".txttheme").toggleClass("text-dark");
	$(".ashvr").toggleClass("ashvr-dark");
	$(".ashvr").toggleClass("ashvr-light");
	$("#watch").toggleClass("active-dark");
	$("#watch").toggleClass("active-light");

	let color=document.querySelector(".fstsb").style.backgroundColor,color1="#E8F4F4",color2="#170C0B",color3="rgb(232, 244, 244)";
	if(color==color3){
		$(".fstsb").css("backgroundColor",color2);
	}else{
		$(".fstsb").css("backgroundColor",color1);
	}
	
	var x=document.querySelector(".s1e1");
	color1="rgba(255, 255, 255, 0.5)",color2="rgba(0, 0, 0, 0.5)";
	if(x.style.backgroundColor==color1){
		$(".s1e1").css("background",color2);
	}else{
		$(".s1e1").css("background",color1);
	}

	x=document.querySelector(".s1e1t");
	color1="#C4C4C4",color2="#3B3B3B",color3="rgb(59, 59, 59)";
	if(x.style.color==color3){
		$(".s1e1t").css("color",color1);
	}else{
		$(".s1e1t").css("color",color2);
	}

	// let str="50px solid ",str2;
	// x=document.querySelector(".triangle");
	// color1="rgba(255, 255, 255, 0.5)",color2="rgba(0, 0, 0, 0.5)";
	// str2=str+color2;
	// console.log(str2);
	// if($(".triangle").css("borderBottom")==str2){
	// 	str+=color1;
	// }else{
	// 	str+=color2;
	// }
	// console.log(str);
	// $(".triangle").css("border-bottom",str);

	// x=document.getElementById("prikolno");
	// color1="#ff0000",color2="#00ffff",color3="rgb(255, 0, 0)";
	// if(x.style.backgroundColor==color3){
	// 	x.style.backgroundColor=color2;
	// }
	// else{
	// 	x.style.backgroundColor=color1;
	// }

	// x=document.getElementById("prikolno2");
	// if(x.style.backgroundColor==color3){
	// 	x.style.backgroundColor=color2;
	// }
	// else{
	// 	x.style.backgroundColor=color1;
	// }

	$("#pause").toggleClass("text-light");
	$("#pause").toggleClass("text-dark");
	$("#play").toggleClass("text-light");
	$("#play").toggleClass("text-dark");

	color1="rgba(0, 0, 0, 0.5)",color2="rgba(255, 255, 255, 0.5)";
	if($(".burger").css("backgroundColor")==color1) $(".burger").css("backgroundColor",color2);
	else $(".burger").css("backgroundColor",color1);
}

// setInterval(prikolno,1);
// let flag=false;
// function prikolno(){
// 	let maxWidth=document.documentElement.clientWidth;
// 	let rect1=document.getElementById("prikolno");
// 	let width=rect1.offsetWidth;

// 	if(flag==true) width=width+1;
// 	else width=width-1;

// 	rect1.style.width=width+"px";

// 	if(rect1.offsetWidth>maxWidth){
// 		rect1.style.width=maxWidth+"px";
// 		flag=false;
// 	}

// 	if(width==maxWidth) flag=false;
// 	else if(width==0) flag=true;
// }

// setInterval(prikolno1,1);
// let flag1=false;
// function prikolno1(){
// 	let maxWidth1=document.documentElement.clientWidth;
// 	let rect2=document.getElementById("prikolno2");
// 	let width1=rect2.offsetWidth;

// 	if(flag1==true) width1=width1+1;
// 	else width1=width1-1;

// 	rect2.style.width=width1+"px";
	
// 	if(rect2.offsetWidth>maxWidth1){
// 		rect2.style.width=maxWidth1+"px";
// 		flag1=false;
// 	}

// 	if(width1==maxWidth1) flag1=false;
// 	else if(width1==0) flag1=true;
// }

function playSound(){
	let play=document.getElementById("play").style;
	let pause=document.getElementById("pause").style;

	if(pause.display=="none"){
		pause.display="inline-block";
	}else{
		pause.display="none";
	}
	if(play.display=="none"){
		play.display="inline-block";
	}else{
		play.display="none";
	}

	let audio1 = document.getElementById('audio1'); 
	if(audio1.paused) audio1.play();
	else audio1.pause();
};

$(document).ready(function(){
	$(".cs").click(function(){
		document.getElementById("clickSound1").play();
	});

	$("#fsts1").click(function(){
		$("#fse1").slideToggle("slow");
		$("#tri1").toggleClass("trianglerotate");
	});
	$("#fsts2").click(function(){
		$("#fse2").slideToggle("slow");
		$("#tri2").toggleClass("trianglerotate");
	});
	$("#fsts3").click(function(){
		$("#fse3").slideToggle("slow");
		$("#tri3").toggleClass("trianglerotate");
	});
	$("#qwe").click(function(){
		$("#carouselExampleCaptions").slideToggle("slow");
		$("#tri4").toggleClass("trianglerotate");
	});
});

function elem_in_visible_area(selector) {
    let elem_p = $(selector),
        elem_p_height = elem_p.height(),
        offset_top_el = elem_p.offset().top,
        offset_bottom_el = offset_top_el + elem_p.height(),
        scrolled = $(window).scrollTop(),
        scrolled_bottom = scrolled + $(window).height();
    if (scrolled_bottom > offset_top_el && offset_bottom_el > scrolled) {
        return true;
    }
    return false;
}

if(night==true){
	$("#s1").removeClass("active-dark");
	$("#s2").removeClass("active-dark");
	$("#s3").removeClass("active-dark");
	$("#artsa").removeClass("active-dark");
}else{
	$("#s1").removeClass("active-light");
	$("#s2").removeClass("active-light");
	$("#s3").removeClass("active-light");
	$("#artsa").removeClass("active-light");
}

$(window).scroll(function() {
	if (elem_in_visible_area("#season1")) {
		if(night==true){
			$("#s1").addClass("active-dark");
			$("#s2").removeClass("active-dark");
			$("#s3").removeClass("active-dark");
			$("#artsa").removeClass("active-dark");
		}else{
			$("#s1").addClass("active-light");
			$("#s2").removeClass("active-light");
			$("#s3").removeClass("active-light");
			$("#artsa").removeClass("active-light");
		}
	}else if(elem_in_visible_area("#season2")){
		if(night==true){
			$("#s1").removeClass("active-dark");
			$("#s2").addClass("active-dark");
			$("#s3").removeClass("active-dark");
			$("#artsa").removeClass("active-dark");
		}else{
			$("#s1").removeClass("active-light");
			$("#s2").addClass("active-light");
			$("#s3").removeClass("active-light");
			$("#artsa").removeClass("active-light");
		}
	}else if(elem_in_visible_area("#season3")){
		if(night==true){
			$("#s1").removeClass("active-dark");
			$("#s2").removeClass("active-dark");
			$("#s3").addClass("active-dark");
			$("#artsa").removeClass("active-dark");
		}else{
			$("#s1").removeClass("active-light");
			$("#s2").removeClass("active-light");
			$("#s3").addClass("active-light");
			$("#artsa").removeClass("active-light");
		}
	}else if(elem_in_visible_area("#artsa")){
		if(night==true){
			$("#s1").removeClass("active-dark");
			$("#s2").removeClass("active-dark");
			$("#s3").removeClass("active-dark");
			$("#artsa").addClass("active-dark");
		}else{
			$("#s1").removeClass("active-light");
			$("#s2").removeClass("active-light");
			$("#s3").removeClass("active-light");
			$("#artsa").addClass("active-light");
		}
	}else{
		if(night==true){
			$("#s1").removeClass("active-dark");
			$("#s2").removeClass("active-dark");
			$("#s3").removeClass("active-dark");
			$("#artsa").removeClass("active-dark");
		}else{
			$("#s1").removeClass("active-light");
			$("#s2").removeClass("active-light");
			$("#s3").removeClass("active-light");
			$("#artsa").removeClass("active-light");
		}
	}
})

setInterval(w,1);
function w(){
	if(night==true){
		if($("#s1").hasClass("active-light")){
			$("#s1").removeClass("active-light");
			$("#s1").addClass("active-dark");
		}else if($("#s2").hasClass("active-light")){
			$("#s2").removeClass("active-light");
			$("#s2").addClass("active-dark");
		}else if($("#s3").hasClass("active-light")){
			$("#s3").removeClass("active-light");
			$("#s3").addClass("active-dark");
		}else if($("#artsa").hasClass("active-light")){
			$("#artsa").removeClass("active-light");
			$("#artsa").addClass("active-dark");
		}
	}else{
		if($("#s1").hasClass("active-dark")){
			$("#s1").addClass("active-light");
			$("#s1").removeClass("active-dark");
		}else if($("#s2").hasClass("active-dark")){
			$("#s2").addClass("active-light");
			$("#s2").removeClass("active-dark");
		}else if($("#s3").hasClass("active-dark")){
			$("#s3").addClass("active-light");
			$("#s3").removeClass("active-dark");
		}else if($("#artsa").hasClass("active-dark")){
			$("#artsa").addClass("active-light");
			$("#artsa").removeClass("active-dark");
		}
	}
}

$(document).ready(function(){
	$("#qwer").css("width",$("#s1").css("width"));
	$("#qwer").css("height",$("#s1").css("height"));
});

$(".prikolno3").css("backgroundColor","ff0000");
let pri3arr=document.getElementsByClassName("prikolno3");

setInterval(prikolno3,25);

let pri3=["#ff0000","#111415"],pri3i=0,pri3j=1;

function prikolno3(){
	pri3arr[pri3i].style.backgroundColor=pri3[pri3j];
	pri3i++;
	if(pri3i==pri3arr.length){
		pri3i=0;
		pri3j++;
		if(pri3j==pri3.length) pri3j=0;
	}
}

function prikolnoburger(){
	$("#b1").toggleClass("first");
	$("#b2").toggleClass("middle");
	$("#b3").toggleClass("last");
}

const text=document.querySelector("#prikolno3");
const strText=text.innerHTML;
for(let i=0;i<99;i++){
	document.querySelector("#prikolno3").innerHTML+=strText;
}

function prikolnox(selector,selector2){
	const text = document.querySelector(selector);
	const strText = text.textContent;
	const splitText = strText.split("");
	text.textContent = "";

	for (var i = 0; i < splitText.length; i++){
	    text.innerHTML += "<span class=\""+selector2+"\">" + splitText[i] + "</span>";
	}
}

prikolnox("#fs","fsspan");
prikolnox("#ss","ssspan");
prikolnox("#ts","tsspan");
prikolnox("#artst","artstspan");

let char1 = 0, char2 = 0, char3 = 0, char4 = 0;
let arr1=document.getElementsByClassName("fsspan");
let arr2=document.getElementsByClassName("ssspan");
let arr3=document.getElementsByClassName("tsspan");
let arr4=document.getElementsByClassName("artstspan");

setInterval(onTick, 100);
setInterval(onTick2, 100);
setInterval(onTick3, 100);
setInterval(onTick4, 100);

function onTick(){
    let span = arr1[char1];

    if(span.style.color=="red") span.style.color="grey";
    else span.style.color="red";
    char1++;
    if (char1=== arr1.length){
        char1 = 0;
        return;
    }
}
function onTick2(){
    let span = arr2[char2];

    if(span.style.color=="red") span.style.color="grey";
    else span.style.color="red";
    char2++;
    if (char2=== arr2.length){
        char2 = 0;
        return;
    }
}
function onTick3(){
    let span = arr3[char3];

    if(span.style.color=="red") span.style.color="grey";
    else span.style.color="red";
    char3++;
    if (char3=== arr3.length){
        char3 = 0;
        return;
    }
}
function onTick4(){
    let span = arr4[char4];

    if(span.style.color=="red") span.style.color="grey";
    else span.style.color="red";
    char4++;
    if (char4=== arr4.length){
        char4 = 0;
        return;
    }
}