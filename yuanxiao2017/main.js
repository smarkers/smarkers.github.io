/**
 * Created by Administrator on 2017/2/13.
 */
window.onload=function () {
    /* var hi=document.documentElement.clientHeight||document.body.clientHeight;
     var oDiv=document.getElementById("main-img");
     oDiv.style.height=hi+"px";*/


    var hi=document.documentElement.clientHeight||document.body.clientHeight;
    var wi=document.documentElement.clientWidth||document.body.clientWidth;
    var oDiv=document.getElementById("main-img");
    oDiv.style.height=hi+"px";
    var miDiv = document.getElementById('img-center');
    miDiv.style.height = (wi*0.86*360/600)+'px';
//        console.log(wi);



    var input=document.getElementById("inputView");
    var inputText=document.getElementById("input-text");
    function focus() {
        input.onfocus=function () {
            inputText.style.display="none";
        };
    }
    focus();
    input.onfocus=function () {
        inputText.style.display="none";

    };
    inputText.onclick=function () {
        this.style.display="none";
//           input.focusedElement;
        focus();
    };
    var button=document.getElementById("button-text");
    var inputButton=document.getElementById("input-button");
    var buttonAnswer=document.getElementById("button-answer");
    var answer=document.getElementById("answers");
    console.log(input.value);
    if (input.value==" "){
        closeAnswer();
    }else {
        into();
    }

    function touchstar() {
        buttonAnswer.style.display="block";
    }
    answer.addEventListener("click",closeAnswer);
    function closeAnswer() {
        buttonAnswer.style.display="none";
        input.value=" ";
        inputText.style.display="block";
    }
    function into() {
        button.addEventListener("click",touchstar);
        inputButton.addEventListener("click",touchstar);
    }


};