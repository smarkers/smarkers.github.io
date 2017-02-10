/**
 * Created by Administrator on 2016/11/7.
 */
/**
 * Created by Administrator on 2016/11/6.
 */
(function (){

    var cityLi=document.getElementsByClassName("city-li");
    var city_a=document.getElementsByClassName("city-a");

    console.log(city_a);
    for (var g=0;g<city_a.length;g++){
        console.log(999);
        city_a[g].style.background="";
        //city_a[p].style.background='#e22421';

        city_a[g].onclick=function(){
            console.log(999);
            this.style.background="#e22421";
        };
        city_a[g].onmouseover=function(){
            this.style.background="#e22421";
        };
        city_a[g].onmouseout=function(){
            this.style.background="";
        }

    }



    function display(){
        var alllist=document.getElementById("all-list");
        var lists=document.getElementById("list");
        //var list_li=document.getElementsByClassName("list-li");
        //var list_li_div=document.getElementsByClassName("list-li-div");
        //var w;

        alllist.onmouseover=function() {
            lists.style.display = "block";
        };
        alllist.onmouseout=function(){
            lists.style.display="none"
        };
    }
    display();







})();
