/**
 * Created by Administrator on 2016/11/1.
 */





window.onload=function(){


    var cityLi=document.getElementsByClassName("city-li");
    var city_a=document.getElementsByClassName("city-a");
    var p;
    console.log(city_a);
    for (var g=0;g<city_a.length;g++){
        console.log(999);
        city_a[g].style.background="";
        //city_a[p].style.background='#e22421';

        city_a[g].onclick=function(){
            console.log(999);
            this.style.background="#e22421";
        }
        city_a[g].onmouseover=function(){
            this.style.background="#e22421";
        }
        city_a[g].onmouseout=function(){
            this.style.background="";
        }

    }


    function start(){
        var shoesUl=document.getElementsByClassName("shoes-ul");
        var rightLi=document.getElementsByClassName("title-right-li");
        console.log(rightLi);
        var aa=0;
        function startChoose1(shoesUl,rightLi,aa,color) {

            function control(){
                for(var i=0; i<shoesUl.length;i++){
                    shoesUl[i].style.display="none";
                    rightLi[i].style.borderTop="1px solid #e0e0e0";
                    rightLi[i].style.borderLeft="1px solid #e0e0e0";
                    rightLi[i].style.borderRight="1px solid #e0e0e0";
                    rightLi[i].style.borderBottom="1px solid"+color;
                }
                shoesUl[aa].style.display="block";
                rightLi[aa].style.borderTop="1px solid"+color;
                rightLi[aa].style.borderLeft="1px solid"+color;
                rightLi[aa].style.borderRight="1px solid"+color;
                rightLi[aa].style.borderBottom="1px";
            }
            control();

            function change(){
                for(var j=0;j<rightLi.length;j++){
                    rightLi[j].inf=j;
                    rightLi[j].onmouseover=function(){
                        aa=this.inf;
                        console.log(aa);
                        control();
                        this.style.color="#333";

                    };
                    rightLi[j].onmouseout=function(){
                        this.style.color="#999";
                    }
                }
            }
            change();

        }
        startChoose1(shoesUl,rightLi,aa,"#f88640");
        var shoesUl3=document.getElementsByClassName("shoes-ul-3");
        var rightLi3=document.getElementsByClassName("title-right2-li");
        console.log(rightLi3);
        var bb=0;
        var shoesUl4=document.getElementsByClassName("shoes-ul-4");
        var rightLi4=document.getElementsByClassName("title-right3-li");
        console.log(rightLi3);
        var cc=0;
        var shoesUl5=document.getElementsByClassName("shoes-ul-5");
        var rightLi5=document.getElementsByClassName("title-right4-li");
        console.log(rightLi3);
        var dd=0;
        startChoose1(shoesUl3,rightLi3,bb,"#e22421");
        startChoose1(shoesUl4,rightLi4,cc,"#3598dc");
        startChoose1(shoesUl5,rightLi5,dd,"#7dc13a");
    }
    start();



    function loubo(){

        var image=[
            "image/134175268697.jpg",
            "image/154175668189.jpg",
            "image/787317764784.jpg",
            "image/788247349460.jpg",
            "image/854396294417.jpg",
            "image/161048430377.jpg",
            "image/537625166858.jpg",
        ];
        var imgHttps=["https:/www.baidu.com","https:/www.baidu.com",
            "https:/www.baidu.com","https:/www.baidu.com"];
        var num=0;
        var time;
        var link=document.createElement("a");
        var ul=document.getElementById("num-ul");
        var content=document.getElementById("content");
        var backgroundView=document.getElementById("backgroundView");
        content.appendChild(link);
        for(var i=0;i<image.length;i++){
            var img=document.createElement("img");
            img.className="view";
            var oli=document.createElement("li");
            oli.className="num";
            ul.appendChild(oli);
            img.src=image[i];
//        link.href=imgHttps[i];
            link.appendChild(img);
        }
        var oImg=document.getElementsByClassName("view");
        var li=document.getElementsByClassName("num");
        function control(){
            for(var i=0;i<oImg.length;i++){
                oImg[i].style.opacity="0";
                li[i].style.background="";
                li[i].style.border="1px solid #040404";

                li[i].textContent=i+1;
            }
            oImg[num].style.opacity="1";
            li[num].style.background="#e22421";
            li[num].style.border="1px solid #e22421";
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
    loubo();




    //第一类标题的选择
    function titleChange(oul,num,oli){

        function control(){
            for(var i=0; i<oul.length;i++){
                oul[i].style.display="none";


            }
            oul[num].style.display="block";
        }
        control();
        function change(){
            for(var j=0;j<oli.length;j++){
                oli[j].inf=j;
                oli[j].onmouseover=function(){
                    num=this.inf;
                    console.log(num);
                    control();
                    this.style.color="#333";

                };
                oli[j].onmouseout=function(){
                    this.style.color="#999";
                }
            }
        }
        change();

    }
    var o_ul=document.getElementsByClassName("content-ul");
    var o_li=document.getElementsByClassName("title-li");
    var num=0;
    titleChange(o_ul,num,o_li);


    function hotImg(){
        var img=[
            "image/812732641892.jpg",
            "image/362745051657.jpg",
            "image/789695274902.jpg",
            "image/973748258267.jpg",
            "image/704557379152.jpg",
            "image/445280483624.jpg",
            "image/133385665828.jpg",
            "image/296707082672.jpg",
            "image/330988740473.jpg",
            "image/473389442349.jpg",
            "image/530053475842.jpg",
            "image/556864551696.jpg",
            "image/660909990400.jpg",
            "image/687044129048.jpg",
            "image/180964206136.jpg",
            "image/227265852053.jpg",
            "image/304936181574.jpg",
            "image/810252802028.jpg"
        ];
        console.log(img);

        var hotLogo=document.getElementById("hot-logo");
        for(var i=0; i<img.length;i++){
            var hotLi=document.createElement("li");
            var hot_A=document.createElement("a");
            var imgs=document.createElement("img");
            imgs.src=img[i];
            hot_A.appendChild(imgs);
            hotLi.appendChild(hot_A);
            hotLogo.appendChild(hotLi);
            hotLi.style.float="left";
            hotLi.style.height="69px";
            hotLi.style.width="120px";
            hotLi.style.marginLeft="10px";

        }
    }
    hotImg();

    function listImg2(classNameLi,array,color){
        //console.log("111");
        var logoList;
        var listLiImg;
        var logoListLiImg;
        var logoListLi;
        var logoList_A;
        var logoList_a;

        for(var j=0;j<classNameLi.length;j++){


            if(j===0){
                logoList=document.createElement("ul");
                classNameLi[j].appendChild(logoList);
                logoList.className="logo_List";
                for(var i=0;i<array[0].liImg.length;i++){
                    logoListLi=document.createElement("li");
                    logoList_A=document.createElement("a");
                    logoList_A.className="logoList_A";
                    logoListLi.className="logo_List_Li";
                    logoList.appendChild(logoListLi);
                    logoListLiImg=document.createElement("img");
                    logoList_A.appendChild(logoListLiImg);
                    logoListLi.appendChild(logoList_A);
                    logoListLiImg.src=array[0].liImg[i]
                }
            }else {
                listLiImg=document.createElement("img");
                logoList_a=document.createElement("a");
                logoList_a.appendChild(listLiImg);
                classNameLi[j].appendChild(logoList_a);
                console.log(1111111111111111);
                listLiImg.src=array[j].liImg;
                console.log(222);
                if(j===1){
                    classNameLi[j].style.height="269px";
                    classNameLi[j].style.marginLeft="3px";
                }else if(j===4){
                    classNameLi[j].style.width="204px";
                    classNameLi[j].style.height="269px";
                }else {
                    classNameLi[j].style.width="246px";
                    classNameLi[j].style.height="269px";
                    classNameLi[j].onmouseover=function(){
                        this.style.borderColor=color;
                    };
                    classNameLi[j].onmouseout=function(){
                        this.style.border="1px solid #e0e0e0";
                    }

                }
            }
        }
    }

    function main() {

        var array1 = [
            {
                liImg: [
                    "image/812732641892.jpg",
                    "image/362745051657.jpg",
                    "image/789695274902.jpg",
                    "image/704557379152.jpg",
                    "image/973748258267.jpg",
                    "image/743561303174.jpg",
                    "image/586237203375.jpg",
                    "image/445280483624.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},
            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/515401185320.jpg"}
        ];
        var array2 = [
            {
                liImg: [
                    "image/812732641892.jpg",
                    "image/362745051657.jpg",
                    "image/789695274902.jpg",
                    "image/704557379152.jpg",
                    "image/563102837507.jpg",
                    "image/743561303174.jpg",
                    "image/586237203375.jpg",
                    "image/445280483624.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},
            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"},
            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"}

        ];
        var array3 = [
            {
                liImg: [
                    "image/812732641892.jpg",
                    "image/362745051657.jpg",
                    "image/789695274902.jpg",
                    "image/704557379152.jpg",
                    "image/563102837507.jpg",
                    "image/586237203375.jpg",
                    "image/667540317750.jpg",
                    "image/452132738544.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},

            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"}
        ];

        var array4 = [
            {
                liImg: [
                    "image/183128154669 .jpg",
                    "image/284991146553.jpg",
                    "image/698684265823.jpg",
                    "image/768239386204.jpg",
                    "image/785103284116.png",
                    "image/831645201547.png",
                    "image/965760907142.jpg",
                    "image/981003437349.jpg"
                ]
            },

            {liImg: "image/878896809060.jpg"},
            {liImg: "image/22.jpg"},
            {liImg: "image/33.jpg"},
            {liImg: "image/570851298116.jpg"},
            {liImg: "image/44.jpg"},
            {liImg: "image/55.jpg"},
            {liImg: "image/66.jpg"},
            {liImg: "image/11.jpg"}
        ];
        var array5 = [
            {
                liImg: [
                    "image/183128154669 .jpg",
                    "image/284991146553.jpg",
                    "image/698684265823.jpg",
                    "image/768239386204.jpg",
                    "image/785103284116.png",
                    "image/831645201547.png",
                    "image/965760907142.jpg",
                    "image/981003437349.jpg"
                ]
            },

            {liImg: "image/193951408506.jpg"},
            {liImg: "image/444074422815.jpg"},
            {liImg: "image/341161193237.jpg"},
            {liImg: "image/991883148220.jpg"},
            {liImg: "image/966846286238.jpg"},
            {liImg: "image/870012550133.jpg"},
            {liImg: "image/820018395634.jpg"},
            {liImg: "image/574262200813.jpg"}

        ];
        var array6 = [
            {
                liImg: [
                    "image/183128154669 .jpg",
                    "image/284991146553.jpg",
                    "image/698684265823.jpg",
                    "image/785103284116.png",
                    "image/768239386204.jpg",
                    "image/831645201547.png",
                    "image/965760907142.jpg",
                    "image/981003437349.jpg"
                ]
            },

            {liImg: "image/7.jpg"},
            {liImg: "image/1.jpg"},


            {liImg: "image/2.jpg"},
            {liImg: "image/4.jpg"},

            {liImg: "image/3.jpg"},
            {liImg: "image/5.jpg"},
            {liImg: "image/6.jpg"},
            {liImg: "image/8.jpg"}
        ];


        var array7 = [
            {
                liImg: [
                    "image/962634546647.jpg",
                    "image/923816083408.jpg",
                    "image/905565275857.jpg",
                    "image/852101199959.jpg",
                    "image/623068483542.jpg",
                    "image/965760907142.jpg",
                    "image/297376832691.jpg"

                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},

            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"}
        ];
        var array8 = [
            {
                liImg: [
                    "image/962634546647.jpg",
                    "image/923816083408.jpg",
                    "image/905565275857.jpg",
                    "image/852101199959.jpg",
                    "image/623068483542.jpg",
                    "image/965760907142.jpg",
                    "image/297376832691.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"},
            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"}

        ];
        var array9 = [
            {
                liImg: [
                    "image/962634546647.jpg",
                    "image/923816083408.jpg",
                    "image/905565275857.jpg",
                    "image/588595781308.jpg",
                    "image/623068483542.jpg",
                    "image/965760907142.jpg",
                    "image/297376832691.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},

            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"}
        ];

        var arrayA = [
            {
                liImg: [
                    "image/789695274902.jpg",
                    "image/349160751258.jpg",
                    "image/386216553704.jpg",
                    "image/138043219893.jpg",
                    "image/953467078076.jpg",
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},

            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"}
        ];
        var arrayB = [
            {
                liImg: [
                    "image/789695274902.jpg",
                    "image/349160751258.jpg",
                    "image/386216553704.jpg",
                    "image/138043219893.jpg",
                    "image/953467078076.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"},
            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"}

        ];
        var arrayC = [
            {
                liImg: [
                    "image/789695274902.jpg",
                    "image/349160751258.jpg",
                    "image/386216553704.jpg",
                    "image/138043219893.jpg",
                    "image/953467078076.jpg"
                ]
            },

            {liImg: "image/191685103398.jpg"},
            {liImg: "image/388548952910.jpg"},


            {liImg: "image/454028428270.jpg"},
            {liImg: "image/871296123354.jpg"},

            {liImg: "image/515401185320.jpg"},
            {liImg: "image/388307906374.jpg"},
            {liImg: "image/951160642613.jpg"},
            {liImg: "image/954428752735.jpg"}
        ];

        var classNameLi = document.getElementsByClassName("shoes-li");
        var classNameLik = document.getElementsByClassName("shoes-li-k");
        var classNameLig = document.getElementsByClassName("shoes-li-g");

        var classNameLip = document.getElementsByClassName("shoes-li-p");
        var classNameLid = document.getElementsByClassName("shoes-li-d");
        var classNameLif = document.getElementsByClassName("shoes-li-f");

        var classNameLix = document.getElementsByClassName("shoes-li-x");
        var classNameLim = document.getElementsByClassName("shoes-li-m");
        var classNameLin = document.getElementsByClassName("shoes-li-n");

        var classNameLir = document.getElementsByClassName("shoes-li-r");
        var classNameLiw = document.getElementsByClassName("shoes-li-w");
        var classNameLit = document.getElementsByClassName("shoes-li-t");


        listImg2(classNameLir, arrayA, "#7dc13a");
        listImg2(classNameLiw, arrayB, "#7dc13a");
        listImg2(classNameLit, arrayC, "#7dc13a");



        listImg2(classNameLix, array9, "#3598dc");
        listImg2(classNameLim, array8, "#3598dc");
        listImg2(classNameLin, array7, "#3598dc");

        listImg2(classNameLip, array6, "#e22421");
        listImg2(classNameLid, array5, "#e22421");
        listImg2(classNameLif, array4, "#e22421");


        listImg2(classNameLig, array3, "#f88640");
        listImg2(classNameLik, array2, "#f88640");
        listImg2(classNameLi, array1, "#f88640");

    }

    main();

};