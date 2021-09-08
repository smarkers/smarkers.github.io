window.onload = function() {
	var box = document.querySelector('.lbf');
	var imge = document.querySelectorAll('.lbf .lb');
	index = 0;
	var left = document.querySelector('.leg');
	var right = document.querySelector('.rig');
	var xyd = document.querySelectorAll(".box3 .xyd .lis li");
	var t = setInterval(moveR, 4000);

	var guan = document.querySelector(".box2 .d1 .d-3 ul li #yc");
	var yc = document.querySelector(".box2 .d1 .d-3 ul .li-11");

	yc.onmouseout = function() {
		document.getElementById("yc").style.height = "0px";
	}
	yc.onmouseover = function() {
		document.getElementById("yc").style.height = "229px";
	}
	
	var guan1 = document.querySelector(".box2 .d1 .d-3 ul li #yc-1");
	var yc1 = document.querySelector(".box2 .d1 .d-3 ul .li-12");
	
	yc1.onmouseout = function() {
		document.getElementById("yc-1").style.height = "0px";
	}
	yc1.onmouseover = function() {
		document.getElementById("yc-1").style.height = "229px";
	}
	
	
	
	box.onmouseover = function() {
		clearInterval(t);
	}
	box.onmouseout = function() {
		t = setInterval(moveR, 4000);
	}
	left.onclick = function() {
		moveL();
	}
	right.onclick = function() {
		moveR();
	}

	function moveR() {
		index++;
		if (index >= imge.length) {
			index = 0;
		}
		imge.forEach(function(value) {
			value.classList.remove("act");
		})
		imge[index].classList.add("act");

		xyd.forEach(function(value) {
			value.classList.remove("act");
		})
		xyd[index].classList.add("act");
	}

	function moveL() {
		index--;
		if (index < 0) {
			index = imge.length - 1;
		}
		imge.forEach(function(value) {
			value.classList.remove("act");
		})
		imge[index].classList.add("act");

		xyd.forEach(function(value) {
			value.classList.remove("act");
		})
		xyd[index].classList.add("act");
	}
	xyd.forEach(function(value, m) {
		/*value表示：即将点击的列表
		 * m表示点击列表后跟随的图片
		 */
		value.onmouseover = function() {
			xyd.forEach(function(value, n) {
				/*value表示：目前所在的列表 
				 * n目前所在的图片位置
				 */
				value.classList.remove("act");
				imge[n].classList.remove("act");
			})
			value.classList.add("act");
			imge[m].classList.add("act");
			index = m;
		}
	})
}
