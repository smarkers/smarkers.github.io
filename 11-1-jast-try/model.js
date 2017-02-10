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



    function louboB(){

        var image=[
            "image/134175268697.jpg",
            "image/154175668189.jpg",
            "image/787317764784.jpg",
            "image/788247349460.jpg",
            "image/854396294417.jpg",
            "image/161048430377.jpg",
            "image/537625166858.jpg"
        ];
        var imgHttps=["https:/www.baidu.com","https:/www.baidu.com",
            "https:/www.baidu.com","https:/www.baidu.com"];
        var num=0;
        var time;
        var link=document.createElement("a");
        var ul=document.getElementById("news-ul");
        var content=document.getElementById("newsContent");
        var backgroundView=document.getElementById("newsView");
        content.appendChild(link);
        for(var i=0;i<image.length;i++){
            var img=document.createElement("img");
            img.className="view";
            var oli=document.createElement("li");
            oli.className="newsLi";
            ul.appendChild(oli);
            img.src=image[i];
//        link.href=imgHttps[i];
            link.appendChild(img);
        }
        var oImg=document.getElementsByClassName("view");
        var li=document.getElementsByClassName("newsLi");
        function control(){
            for(var i=0;i<oImg.length;i++){
                oImg[i].style.opacity="0";
                li[i].style.background="";
                li[i].style.border="1px solid #ffffff";

                //li[i].textContent=i+1;
            }
            oImg[num].style.opacity="1";
            li[num].style.background="#ffffff";
            li[num].style.border="1px solid #ffffff";
            link.href=imgHttps[num];
        }
        control();
        function buttonEvent(){
            for(var i=0;i<li.length;i++){
                li[i].inf=i;
                li[i].onclick=function(){
                    num=this.inf;
                    control();
                };
                li[i].onmouseover=function(){
                    num=this.inf;
                    control();
                }
            }
        }
        buttonEvent();

        function startTime(){
            time=setInterval(function(){
                num++;
                if (num>image.length-1){
                    num=0;
                }
                control();
            },3000)
        }
        startTime();
        function stopTime(){
            backgroundView.onmouseover=function(){
                clearInterval(time);
            };

            backgroundView.onmouseout=function(){
                startTime();
            }
        }
        stopTime();

    }
    louboB();



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


    var bottomImg=document.getElementById("bottom-img");
    var images=[
        "image/a1.jpeg","image/a2.jpeg",
        "image/a3.jpg","image/a4.jpg",
        "image/b1.jpg","image/b2.jpg",
        "image/b3.jpeg","image/b4.jpeg",
        "image/a1.jpeg","image/a2.jpeg",
        "image/a3.jpg","image/a4.jpg"
    ];
    var name=[
        "叶子筠","甘琳","丁蔷蕾","林佳欣",
        "叶子筠","甘琳","丁蔷蕾","林佳欣",
        "叶子筠","甘琳","丁蔷蕾","林佳欣",
        "叶子筠","甘琳","丁蔷蕾","林佳欣"
    ];
    var p=0;
    for(var a=0;a<images.length;a++){
        console.log(name[a]);
        var textImg=document.createElement("div");
        textImg.className="textImg";
        var divImg=document.createElement("div");
        divImg.className="divImg";
        var imgAA=document.createElement("a");
        imgAA.className="imgaa";
        var imgs=document.createElement("img");
        imgs.className="imgs";
        imgs.src=images[a];
        var nameP=document.createElement("p");
        nameP.className="namep";
        nameP.innerHTML=name[a];
        var Button=document.createElement("a");
        var forButton=document.createElement("span");
        var buttonNum=document.createElement("span");
        forButton.className="forbutton";
        Button.className="buttons";
        buttonNum.className="buttonNum";
        forButton.innerHTML="请投一票";
        buttonNum.innerHTML=p;
        bottomImg.appendChild(textImg);
        textImg.appendChild(divImg);
        divImg.appendChild(imgAA);
        imgAA.appendChild(imgs);
        Button.appendChild(forButton);
        Button.appendChild(buttonNum);
        textImg.appendChild(nameP);
        textImg.appendChild(Button);
    }
    var buttons_a=document.getElementsByClassName("buttons");
    var buttonNums=document.getElementsByClassName("buttonNum");

    for(var g=0;g<buttonNums.length;g++){
        buttons_a[g].onclick=function(){
            p++;
            //buttonNums[g].innerHTML=p;
        }

    }







})();
