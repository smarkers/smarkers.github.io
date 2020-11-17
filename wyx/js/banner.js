		window.onload=function(){
var box=document.querySelector(".box-banner");
var img=document.querySelectorAll(".box-banner .image li");
var lis=document.querySelectorAll(".box-banner .lis li");
var index=0;
/*下标*/
var t=setInterval(moveR,3000);
/*自动轮播*/
box.onmouseover=function(){
clearInterval(t);}  
box.onmouseout=function(){
t=setInterval(moveR,3000);
}

/*移出自动轮播*/


function moveR(){
			index++;
			if(index>=img.length){index=0;}
			img.forEach(function(value){
				value.classList.remove("active");
			})
				img[index].classList.add("active");
			lis.forEach(function(value){
			value.classList.remove("active");
			})
			lis[index].classList.add("active");
}
function moveL(){
index--;
if(index<0){index=img.length-1;}
img.forEach(function(value){
	value.classList.remove("active");
})
img[index].classList.add("active");
lis.forEach(function(value){
	value.classList.remove("active");
})
lis[index].classList.add("active");
}


lis.forEach(function(value,m){
	value.onclick=function(){
		lis.forEach(function(value,n){
			value.classList.remove("active");
			img[n].classList.remove("active");
		})

value.classList.add("active");
img[m].classList.add("active");
index=m;}})















	var box2=document.querySelector(".xinwen-xiaoxue-r");
	var img2=document.querySelectorAll(".xinwen-xiaoxue-r .xinwen-xiaoxue-img li");
	var lis2=document.querySelectorAll(".xinwen-xiaoxue-r .xinwen-xiaoxue-list li");
	var index2=0;
	var t2=setInterval(1000);
	lis2.forEach(function(value,x){
		value.onclick=function(){
			lis2.forEach(function(value,y){
				value.classList.remove("active2");
			img2[y].classList.remove("active2");

	})
value.classList.add("active2");
img2[x].classList.add("active2");
index2=x;	}})	

}








document.getElementById("chahao").onclick=function(){   		
    		document.getElementById("tanchuang").style.display="none";
    	}
		







var box3=document.querySelector(".xdfjt-bottom");
var img3=document.querySelectorAll(".xdfjt-bottom .xdfjt-bottom-a   li");
var left3=document.querySelector(".xdfjt-bottom .xiaoyu");
var right3=document.querySelector(".xdfjt-bottom .dayu");
var index3=0;

left3.onclick=function(){moveL();}
right3.onclick=function(){moveR();}


function moveR(){
			index3++;
			if(index3>=img3.length){index3=0;}
			img3.forEach(function(value){
				value.classList.remove("active3");
			})
				img3[index3].classList.add("active3");
			
}
function moveL(){
index3--;
if(index3<0){index3=img3.length-1;}
img3.forEach(function(value){
	value.classList.remove("active3");
})
img3[index3].classList.add("active3");

}


