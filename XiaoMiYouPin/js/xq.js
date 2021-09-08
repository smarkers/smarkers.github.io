onload = function(){
	var inp = document.querySelector(".logo .search .inp")
	var input = document.querySelector(".logo .search .inp input")
	input.onfocus = function(){
		inp.style.borderBottom = "1px solid #9f8052";
	}
	input.onblur = function(){
		inp.style.borderBottom = "1px solid #e7e7e7";
	}

	// 放大镜
	var fdBox = document.querySelector(".fdBox")
	var move = document.querySelector(".move")
	var smallPic = document.querySelector(".smallPic")
	var bigBox = document.querySelector(".bigBox")
	var bigPic = document.querySelector(".bigPic")
	var imgBox = document.querySelector(".imgBox")
	console.log(fdBox)

	fdBox.onmouseover = function(){
		move.style.display = "block"
		bigBox.style.display = "block"
		imgBox.style.display = "none"
		// 计算小滑块的尺寸
		var times = bigBox.clientWidth/bigPic.clientWidth;
		move.style.width = times*fdBox.clientWidth+'px';
		move.style.height = times*fdBox.clientHeight+'px';
	}
	fdBox.onmouseout = function(){
		move.style.display = "none"
		bigBox.style.display = "none"
		imgBox.style.display = "block"
	}
	fdBox.onmousemove = function(e){
		var ev = event||e;
		var ilef = ev.pageX - fdBox.offsetLeft - move.clientWidth/2;
		var itop = ev.pageY - fdBox.offsetTop - move.clientHeight/2;
		 //限制范围
		var maxl = fdBox.clientWidth - move.clientWidth;
		var maxt = fdBox.clientHeight - move.clientHeight;
		ilef = ilef<=0?0:ilef>=maxl?maxl:ilef;
		itop = itop<=0?0:itop>=maxt?maxt:itop;
		move.style.left = ilef+'px';
		move.style.top = itop+'px';
		//大图片随小滑块等比例移动
		var maxL = bigPic.clientWidth - bigBox.clientWidth;
		var maxT = bigPic.clientHeight - bigBox.clientHeight;
		bigPic.style.left = -ilef/maxl*maxL+'px';
		bigPic.style.top = -itop/maxt*maxT+'px';
	}


	//选项卡
	var gid = location.search.slice(1).split("=")[1];
	console.log(gid)
	var bigArr = [];
	var smallArr = [];
	var tabArr = [];
	var xqName = document.querySelector(".xq_name")
	var xqDic = document.querySelector(".xq_Dic")
	console.log(xqName,xqDic)
	//获取商品信息
	var lisArr = obj_1.list;
	console.log(lisArr)
	for(var i=0;i<lisArr.length;i++){
		if(lisArr[i].cid==gid){
			bigArr = lisArr[i].bigImg;
			smallArr = lisArr[i].smallImg;
			tabArr = lisArr[i].tagImg;
			xqName.innerHTML = lisArr[i].xqName;
			xqDic.innerHTML = lisArr[i].xqDic;
		}
	}

	var aTab = document.querySelectorAll(".imgBox img")
	console.log(aTab)
	for(var i=0;i<aTab.length;i++){
		aTab[i].src = tabArr[i];
	}
	var index = 0;
	reset()
	//放大镜重置
	function reset(){
		for(var i=0;i<aTab.length;i++){
			aTab[i].classList.remove("on")
		}
		aTab[index].classList.add("on")
		bigPic.src = bigArr[index]
		smallPic.src = smallArr[index]
	}
	for(var i=0;i<aTab.length;i++){
		aTab[i].xb = i;
		aTab[i].onclick = function(){
			index = this.xb;
			reset();
		}
	}




	// 回到顶部
	var toTop = document.querySelector(".fixed .fifth");
	console.log(toTop)
	toTop.onclick = function(){
		scrollTo({
			top:0,
			behavior:"smooth"
		})
	}
	// 加入购物车
	var addCar = document.querySelector(".addCar")
	addCar.onclick = function(){
		alert("成功加入购物车！")
	}
	// 商品数量
	var cut = document.querySelector(".cut")
	var add = document.querySelector(".add")
	var count = document.querySelector(".countNum")
	var num = null;
	cut.onclick = function(){
		add.style.background = "url(img/count_icon.png) 0 -38px";
		num = count.innerHTML;
		num--;
		num = num<1?1:num;
		count.innerHTML = num;
		if(num==1){
			cut.style.background = "url(img/count_icon.png) 0 0";
		}
	}
	add.onclick = function(){
		cut.style.background = "url(img/count_icon.png) 0 -114px";
		num = count.innerHTML;
		num++;
		if(num==5){
			add.style.background = "url(img/count_icon.png) 0 -76px";
		}else if(num>5){
			num = 5;
			alert("商品限购五件")
		}
		
		count.innerHTML = num;
	}
	
	
	var patternSpan = document.querySelectorAll(".goodsStyle span");
	console.log(patternSpan)
	for(var i=0;i<patternSpan.length;i++){
		patternSpan[i].onclick = function(){
			for(var j=0;j<patternSpan.length;j++){
				patternSpan[j].classList.remove("active");
			}
			this.classList.add("active")
		}
	}


}