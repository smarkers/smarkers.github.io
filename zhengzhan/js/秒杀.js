//在页面中显示的只有价格和字体
var obj={
	"f101":{
		"list":[
			{
			"pid":"mi001",
			"name":"酒",
			"dic":"小棕瓶特润精华露",
			"price":"￥425",
			"xzt":"起",
			"img":"img/秒杀1.png",
			"del":"￥1089"
			},
			{
			"pid":"mi002",
			"name":"柔纸巾",
			"dic":"大闸蟹提货券",
			"price":"￥199",
			"xzt":"起",
			"img":"img/秒杀2.png",
			"del":"￥439"
			},
			{
			"pid":"mi003",
			"name":"SK-II神仙水",
			"dic":"SK-II神仙水",
			"price":"￥899",
			"xzt":"起",
			"img":"img/秒杀3.png",
			"del":"￥1798"
			},
			{
			"pid":"mi004",
			"name":"莫比智能椭圆机",
			"dic":"莫比智能椭圆机",
			"price":"￥2526",
			"xzt":"起",
			"img":"img/秒杀4.png",
			"del":"￥5566"
			},
			{
			"pid":"mi005",
			"name":"马桶",
			"dic":"希捷企业级硬盘",
			"price":"￥888",
			"xzt":"",
			"img":"img/秒杀5.png",
			"del":"￥1299"
			},
			{
			"pid":"mi006",
			"name":"灯",
			"dic":"睿米自清洁吸尘器",
			"price":"￥2289",
			"xzt":"",
			"img":"img/秒杀6.png",
			"del":"￥2688"
			},
		]
	}
}
var obj2={
	"f102":{
		"title":[
			{
			"pid":"mi011",
			"name":"酒",
			"dic":"MIX 4",
			"contant":"新品销售火爆，正加急发货，7天...",
			"price":"￥4999",
			"xzt":"起",
			"img":"img/新品1.png"
			},
			{
			"pid":"mi012",
			"name":"就选uwant除螨仪",
			"dic":"就选uwant除螨仪",
			"contant":"尘螨分离强劲拍打螨虫检测智..",
			"price":"￥599",
			"xzt":"",
			"img":"img/新品2.png",
			},
			{
			"pid":"mi013",
			"name":"全屋WiFi6覆盖",
			"dic":"全屋WiFi6覆盖",
			"contant":"86型面板, AX1800, 双频WIFI6...",
			"price":"￥356",
			"xzt":"起",
			"img":"img/新品3.png",
			},
			{
			"pid":"mi014",
			"name":"云米净水器400G",
			"dic":"云米净水器400G",
			"contant":"小巧俏皮，6级过滤横抽滤芯,3年..",
			"price":"￥869",
			"xzt":"起",
			"img":"img/新品4.png",
			},
			{
			"pid":"mi015",
			"name":"马桶",
			"dic":"NEW Z6X特别款",
			"contant":"明星同款，1080P， 800ANSI流明...",
			"price":"￥3599",
			"xzt":"",
			"img":"img/新品5.png",
			},
			{
			"pid":"mi016",
			"name":"灯",
			"dic":"多功能布艺清洗机",
			"contant":"喷~刷~抽-吸同步清洁、水污汾...",
			"price":"￥1499",
			"xzt":"",
			"img":"img/新品6.png",
			},
		]
	},
}
var Boom=document.querySelector('#main_endBottom')
var Eig=document.querySelector('#main_ten')
for(i in obj2){
	//创建ul
	var Booxx=document.createElement('div');
	Booxx.classList.add('booxx');
	Eig.appendChild(Booxx);
	var Mrul=document.createElement('ul');
	Mrul.classList.add('Mr-ul');
	Booxx.appendChild(Mrul);
	//通过数据 模板字符串
	
		for(j in obj2[i].title){
			var titleli=document.createElement('li');
			Mrul.appendChild(titleli);
			obj2[i].xb=i;
			console.log(this.xb)
			titleli.innerHTML += `<a href="xq.html?gid=${obj2[i].title[j].pid}" class="listu-a">
						<img src=${obj2[i].title[j].img} art="" class="pic" />
						<p class="dic">${obj2[i].title[j].dic}</p>
						<p class="contant">${obj2[i].title[j].contant}</p>
						<p class="price">${obj2[i].title[j].price}</p>
						<p class="xzt">${obj2[i].title[j].xzt}</p>
					</a>`
		}
}

for(i in obj){
	//创建ul
	var Boxx=document.createElement('div');
	Boxx.classList.add('boxx');
	Boom.appendChild(Boxx);
	var Msul=document.createElement('ul');
	Msul.classList.add('Ms-ul');
	Boxx.appendChild(Msul);
	//通过数据 模板字符串
		for(j in obj[i].list){
			var listli=document.createElement('li');
			Msul.appendChild(listli);
			listli.innerHTML +=`<a href="xq.html?gid=${obj[i].list[j].pid}" class="lis-a">
						<img src=${obj[i].list[j].img} art="" class="pic" />
						<p class="dic">${obj[i].list[j].dic}</p>
						<p class="price">${obj[i].list[j].price}</p>
						<p class="xzt">${obj[i].list[j].xzt}</p>
						<p class="del">${obj[i].list[j].del}</p>
					</a>`
		}
}
//点击 
var msGoods=document.querySelector('#main_endBottom')
var msPrev = document.querySelector(".pre")
var msNext = document.querySelector(".nex")
var msNum = 0;
	msNext.onclick = function(){
			msNum++;
			msNum = msNum>=2?2:msNum;
			msGoods.scrollTo({
				left:msNum*275,
				behavior:"smooth"
			})
			console.log(msNum)
		}
		msPrev.onclick = function(){
			msNum--;
			msNum = msNum<=0?0:msNum;
			msGoods.scrollTo({
				left:msNum*275,
				behavior:"smooth"
			})
				console.log(msNum)
		}
