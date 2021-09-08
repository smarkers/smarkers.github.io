//实现遮罩效果
						zzc()
						function zzc(){
							var zz=document.querySelectorAll('.product .mask')	
							var img=document.querySelectorAll('.product')
							for(var i=0;i<img.length;i++){
								(function(i){
									img[i].onmouseover=function(){
										zz[i].style.display='block';
									}
									img[i].onmouseout=function(){
										zz[i].style.display='none';
									}
								}(i))
							}
							var pois=document.querySelectorAll('.buy-button a');
							var posp=document.querySelectorAll('.jiantou');
							for(var i=0;i<pois.length;i++){
								var af=window.getComputedStyle(pois[i],":after");
								// console.log(af)
								(function(i){
									pois[i].onmouseover=function(){
										pois[i].style.backgroundColor='#FFFFFF';
										pois[i].style.color='#000';
										posp[i].style.backgroundPosition ='-40px -163px';
									}
									pois[i].onmouseout=function(){
										pois[i].style.backgroundColor='#000';
										pois[i].style.color='#fff';
										posp[i].style.backgroundPosition ='-9px -163px';
									}
								}(i))
							}
						}