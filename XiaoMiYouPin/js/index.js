
onload = function(){
	// 搜索框
	var inp = document.querySelectorAll(".logo .search .inp")
	var input = document.querySelectorAll(".logo .search .inp input")
	for(var i=0;i<inp.length;i++){
		(function(i){
			input[i].onfocus = function(){
				inp[i].style.borderBottom = "1px solid #9f8052";
			}
			input[i].onblur = function(){
				inp[i].style.borderBottom = "1px solid #e7e7e7";
			}
		})(i)
	}
	
	// 轮播图
	var right = document.querySelector(".banner .right")
	var aSlider = document.querySelectorAll(".slider")
	var aDots = document.querySelectorAll(".dots span")
	var prev = document.querySelector(".prev")
	var next = document.querySelector(".next")
	var index = 0;

		// 重置
	function tab(){
		for(var i=0;i<aDots.length;i++){
			aSlider[i].style.opacity = 0;
			aSlider[i].style.zIndex = 0;
			aDots[i].classList.remove("on");
		}
		aSlider[index].style.opacity = 1;
		aSlider[index].style.zIndex = 1;
		aDots[index].classList.add("on");
	}
	tab()
		//点击小圆点
	for(var i=0;i<aDots.length;i++){
		(function(i){
			aDots[i].onclick = function(){
				index = i;
				tab()
			}
		})(i)
	}
		//上一张
	prev.onclick = function(){
		index--;
		index = index<0?aDots.length-1:index;
		tab()
	}
		//上一张
	next.onclick = function(){
		index++;
		index = index>aDots.length-1?0:index;
		tab()
	}
		//自动轮播
	function autoPlay(){
		clearInterval(right.timer)
		right.timer = setInterval(function(){
			next.click();
		},2000)
	}
	autoPlay()
		//鼠标移入移出轮播图
	right.onmouseover = function(){
		clearInterval(right.timer)
	}
	right.onmouseout = function(){
		autoPlay()
	}
	// 设置滚动条事件
	var bankuai = document.querySelector(".bankuai");
	var logo_par_xd = document.querySelector(".xiding");
	onscroll = function(){
		//获取当前滚动条的高度
		var scroll = document.body.scrollTop||document.documentElement.scrollTop;
		if(scroll>=bankuai.offsetTop){
			logo_par_xd.style.height = '70px';
		}else{
			logo_par_xd.style.height = 0;
		}
		
	}
	//有品秒杀
	msGoods()
	function msGoods(){
		var list = obj_1.list;
		var msGoods = document.querySelector(".ms_goods")
		var cUl = document.createElement("ul")
		for(var i=0;i<list.length;i++){
			cUl.innerHTML += `
				<li>
					<a href="xq.html?cid=${list[i].cid}">
						<img src=${list[i].img} alt=${list[i].name}/>
						<p class="name">${list[i].name}</p>
						<p class="Price">
							<span class="nowPrice">￥${list[i].newPrice}</span>
							<span class="oldPrice">￥${list[i].oldPrice}</span>
						</p>
			
					</a>
				</li>
			`
		}
		msGoods.appendChild(cUl); 
		// 实现横向楼层
		var msPrev = document.querySelector(".ms_prev")
		var msNext = document.querySelector(".ms_next")
		var msNum = 0;
		msNext.onclick = function(){
			msNum++;
			msNum = msNum>=3?3:msNum;
			msGoods.scrollTo({
				left:msNum*339,
				behavior:"smooth"
			})
		}
		msPrev.onclick = function(){
			msNum--;
			msNum = msNum<=0?0:msNum;
			msGoods.scrollTo({
				left:msNum*339,
				behavior:"smooth"
			})
		}


	}
	// 每日新品
	xpGoods()
	function xpGoods(){
		var list = obj_2["list"];
		console.log(list)
		var xpGoods = document.querySelector(".xp_goods")
		for(var i=0;i<list.length;i++){
			var cUl = document.createElement("ul")
			var goodsList = list[i].list;
			for(var j=0;j<goodsList.length;j++){
				cUl.innerHTML += `
					<li>
						<a href="xq.html">
							<img src=${goodsList[j].img} alt=${goodsList[j].name}/>
							<p class="name">${goodsList[j].name}</p>
							<p class="xp_dic">${goodsList[j].dic}</p>
							<p class="nowPrice">￥${goodsList[j].price}</p>
						</a>
					</li>
				`
			}
			xpGoods.appendChild(cUl);
			
		}
		xpGoods.innerHTML += `<span class="xp_prev"></span><span class="xp_next"></span>`
		var aUl = document.querySelectorAll(".xp_goods ul")
		var index = 0;
		reset();
		function reset(){
			for(var i=0;i<aUl.length;i++){
				aUl[i].style.opacity = 0;
				aUl[i].style.zIndex = 0;
			}
			aUl[index].style.opacity = 1;
			aUl[index].style.zIndex = 1;
		}
		var xpPrev = document.querySelector(".xp_prev")
		var xpNext = document.querySelector(".xp_next")
		//实现选项卡
		xpPrev.onclick = function(){
			index--;
			index = index<0?0:index;
			reset()
		}
		xpNext.onclick = function(){
			index++;
			index = index>aUl.length-1?aUl.length-1:index;
			reset()
		}


		
	}
	// 专属推荐
	tjGoods()
	function tjGoods(){
		var list = obj_3.list;
		console.log(list)
		var tjGoods = document.querySelector(".tj_goods")
		var cUl = document.createElement("ul")
		for(var i=0;i<list.length;i++){
			cUl.innerHTML += `
				<li>
					<a href="xq.html">
						<div class="img_box">
							<img src=${list[i].img} alt=${list[i].name}/>
							<p class="tj_dic">${list[i].dic}</p>
						</div>
						<div class="tj_tag">${list[i].tag}</div>
						<p class="name">${list[i].name}</p>
						<p class="nowPrice">￥${list[i].price}</p>
					</a>
				</li>
			`
		}
		tjGoods.appendChild(cUl);
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
	// 优惠倒计时
	var aSpan = document.querySelectorAll(".countdown span");
	console.log(aSpan)
	
	function getTime(){
		var today = new Date();
		// console.log(today)
		var hour = today.getHours();
		var month = today.getMonth();
		var day = today.getDate();
		// console.log(hour,month,day)
		if(hour<16){
			var endTime = new Date(2021,month,day,16,00,00);
			var time = Math.floor((endTime - today)/1000);
			var Hour =  zero(Math.floor((time/3600)%24));
			var Min = zero(Math.floor((time/60)%60));
			var Sec = zero(time%60);
		}else{
			var endTime = new Date(2021,month,day+1,16,00,00);
			var time = Math.floor((endTime - today)/1000);
			var Hour =  zero(Math.floor((time/3600)%24));
			var Min = zero(Math.floor((time/60)%60));
			var Sec = zero(time%60);
		}
		aSpan[0].innerHTML = Hour;
		aSpan[1].innerHTML = Min;
		aSpan[2].innerHTML = Sec;
	}

	setInterval(function(){
		getTime();
	},1000)
	function zero(i){
		return i<10?"0"+i:i;
	}

	

}
	
	