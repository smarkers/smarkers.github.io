var obj={
		"f103":{
			"list":[
				{
				"pid":"mi017",
				"name":"酒",
				"last_tjz":"已接入米家高性价比",
				"last_zj":"直降",
				"last_dic":"xiaovv智能摄像机",
				"last_price":"￥110",
				"last_xzt":"起",
				"img":"img/推荐1.jpg"
				},
				{
				"pid":"mi018",
				"name":"酒",
				"last_tjz":"重動感应，不挡视",
				"last_zj":"优惠",
				"last_dic":"重動车载支架",
				"last_price":"￥29",
				"last_xzt":"",
				"img":"img/推荐2.jpg"
				},
				{
				"pid":"mi019",
				"name":"酒",
				"last_tjz":"煮水不久候，暖心不烫手",
				"last_zj":"折扣",
				"last_dic":"电水壶1A",
				"last_price":"￥78",
				"last_xzt":"",
				"img":"img/推荐3.jpg"
				},
				{
				"pid":"mi020",
				"name":"酒",
				"last_tjz":"北美A级白蜡木，无醛水性漆",
				"last_zj":"HOT",
				"last_dic":"Tree简约全实木床",
				"last_price":"￥620",
				"last_xzt":"起",
				"img":"img/推荐4.jpg"
				},
				{
				"pid":"mi021",
				"name":"酒",
				"last_tjz":"温和洁面，净爽控油",
				"last_zj":"特价",
				"last_dic":"氨基酸洁面慕斯",
				"last_price":"￥59",
				"last_xzt":"起",
				"img":"img/推荐5.jpg"
				},
				{
				"pid":"mi022",
				"name":"酒",
				"last_tjz":"清新本色有效抑菌",
				"last_zj":"直降",
				"last_dic":"青春版抽纸24包",
				"last_price":"￥29.9",
				"last_xzt":"起",
				"img":"img/推荐6.jpg"
				},
				{
				"pid":"mi023",
				"name":"酒",
				"last_tjz":"化痰止咳 清咽润肺",
				"last_zj":"特价",
				"last_dic":"化痰止咳清咽润肺",
				"last_price":"￥31",
				"last_xzt":"起",
				"img":"img/推荐7.jpg"
				},
				{
				"pid":"mi024",
				"name":"酒",
				"last_tjz":"雷总亲自推荐，锻炼全身肌肉",
				"last_zj":"推荐",
				"last_dic":"小莫划船机Pro",
				"last_price":"￥1859",
				"last_xzt":"起",
				"img":"img/推荐8.jpg"
				},
				{
				"pid":"mi025",
				"name":"酒",
				"last_tjz":"米家APP控制，杀菌烘干收纳",
				"last_zj":"秒杀",
				"last_dic":"智能烘干杀菌刀架",
				"last_price":"￥278",
				"last_xzt":"",
				"img":"img/推荐9.jpg"
				},
			]
		}
}
var Mlast=document.querySelector('#main_last')
for(i in obj){
	//创建ul
	var Lbox=document.createElement('div');
	Lbox.classList.add('last-box');
	Mlast.appendChild(Lbox);
	var Lul=document.createElement('ul');
	Lul.classList.add('last-ul');
	Lbox.appendChild(Lul);
	//通过数据 模板字符串
		for(j in obj[i].list){
			var listli=document.createElement('li');
			Lul.appendChild(listli);
			listli.innerHTML += `<a href="xq.html?gid=${obj[i].list[j].pid}" class="listu-a">
						<div class="last_top">
						<img src=${obj[i].list[j].img} art="" class="last_pic" />
						<p class="last_tjz">${obj[i].list[j].last_tjz}</p>
						</div>
						<div class="last_bottom">
						<p class="last_zj">${obj[i].list[j].last_zj}</p>
						<p class="last_dic">${obj[i].list[j].last_dic}</p>
						<p class="last_price">${obj[i].list[j].last_price}</p>
						<p class="last_xzt">${obj[i].list[j].last_xzt}</p>
						</div>
					</a>`
		}
}
