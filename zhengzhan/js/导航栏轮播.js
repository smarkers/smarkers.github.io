var oPrev=document.querySelector('.prev')
			var oNext=document.querySelector('.next')
			var aLis=document.querySelectorAll('.list-dd li')
			var aDiv=document.querySelectorAll('.slider')
			var box=document.querySelector('#nav_right')
			var timer=null
			var index=0;// 代表显示图片的下标
			tab();
			function tab(){
				for(var i=0;i<aDiv.length;i++){
					aDiv[i].style.opacity=0
					aLis[i].style.background=''
					aLis[i].style.border=''
				}
				aDiv[index].style.opacity=1;// 显示一个
				aLis[index].style.background='rosybrown'
				aLis[index].style.border='3px solid #cccccc'
			}
			// 获取事件
			oPrev.onclick=function(){
				// 隐藏所有图片，显示一个
				index--;
				if(index<0){index=aDiv.length-1}
				tab();
			}
			oNext.onclick=function(){
				index++;
				if(index>aDiv.length-1){index=0}
				tab();
			}
			// 小圆点
			for(let i=0;i<aLis.length;i++){
				aLis[i].onclick=function(){
					// 点击小圆点，改变index的值
					index=i;
					tab();
				}
			}
			// 定时器
			autoPlay();
			function autoPlay(){
				// 开启定时器
				timer=setInterval(function(){
					index++;
					if(index>aDiv.length-1){index=0}
					tab();	
				},3000)
			}
			// 鼠标划入轮播图，关闭定时器
			box.onmouseover =function(){
				// 关闭定时器
				clearInterval(timer)
			}
			
				
			box.onmouseout =function(){
				// 划出在开启定时器
				autoPlay()
			}
			