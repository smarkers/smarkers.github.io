function getSlider(sliderArr){
				var par = document.querySelector('.slider');
				get$(par,sliderArr);
				function get$(par,arr){
					var cSlider = document.createElement('div');
					cSlider.classList.add('slide');
					var cmenu = document.createElement('div');
					cmenu.classList.add('menu');
					var cUl = document.createElement('ul');
					for(var i=0;i<arr.length;i++){
						cSlider.innerHTML +=`
							<div class='sli'>
								<a>
									<img src=${arr[i].url} class='pic'>
								</a>
							</div>
						`
						cUl.innerHTML +=`
							<li>${arr[i].title}</li>
						`
					}
					par.appendChild(cSlider);
					var cnaxt = document.createElement('div');
					cnaxt.classList.add('slider-next')
					cnaxt.innerHTML +=`
						<span class='icon'></span>
					`
					var cprve = document.createElement('div');
					cprve.classList.add('slider-prve')
					cprve.innerHTML +=`
						<span class='icon'></span>
					`;
					par.appendChild(cnaxt);
					par.appendChild(cprve);
					cmenu.appendChild(cUl);
					par.appendChild(cmenu);
					getSelect()
				}
				//实现效果
				function getSelect(){
					var slider=document.querySelectorAll('.sli');
					var sliderBox=document.querySelector('.slider');
					var aBtn=document.querySelectorAll('.menu ul li');
					var aNext=document.querySelector('.slider-next');
					var aPrev=document.querySelector('.slider-prve');
					var index=0,
					timer=null;
					$();
					function $(){
						for(var i=0;i<slider.length;i++){
							slider[i].style.opacity=0;
							slider[i].style.display='none';
							aBtn[i].classList.remove('select')
						}
						slider[index].style.opacity=1;
						slider[index].style.display='block';
						aBtn[index].classList.add('select')
					}
					aNext.onclick=function(){
						index++;
						index=index>slider.length-1?0:index;
						$();
					}
					aPrev.onclick=function(){
						index--;
						index=index<0?slider.length-1:index;
						$();
					}
					for(var i=0;i<aBtn.length;i++){
						(function(i){
							aBtn[i].onmouseover=function(){
								index=i;
								$();
							}
						})(i)
					}
					clearInterval(timer)
					timer=setInterval(function(){
						aNext.click()
					},2000)
					sliderBox.onmouseover=function(){
						clearInterval(timer)
					}
					sliderBox.onmouseout=function(){
						clearInterval(timer)
						timer=setInterval(function(){
							aNext.click()
						},2000)
					}
				}
			}