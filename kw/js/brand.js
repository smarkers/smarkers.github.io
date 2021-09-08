					reDan()
					function reDan(){
						var fixbox=document.querySelector('.clearfix');
						var arr=[{
								dic:'男的踩的',
								url:'img/clearfix/top_02_1203.jpg',
								cid:'fix001',
							},{
								dic:'女的踩的',
								url:'img/clearfix/top_01_1203.jpg',
								cid:'fix002',
							},{
								dic:'穿的',
								url:'img/clearfix/top_01_05.jpg',
								cid:'fix003',
							},{
								dic:'戴的',
								url:'img/clearfix/top_01_07.jpg',
								cid:'fix004',
							},
						];
						for(var i=0;i<arr.length;i++){
							fixbox.innerHTML +=`
								<div class='bs-container'>
									<a href='#' class='bs-title'>${arr[i].dic}</a>
									<a href='#'>
										<img src=${arr[i].url}>
									</a>
								</div>
							`
						}
					}	
					function xuanxk(arr){
							var ck=['查看所有男的踩的最新商品','查看所有女的踩的最新商品','查看所有穿的最新商品','查看所有戴的最新商品'];
							var opar=document.querySelector('.brand-segments')
							var par = document.querySelector('.brand');
							for(var i=0;i<arr[0].list.length;i++){
								var xpar = document.createElement('div');
								xpar.classList.add('list-slide-container');
								var ls1 = document.createElement('div');
								ls1.classList.add('l-s-grid1');
								ls1.innerHTML +=`
									<div class="product-list-slide">
											<div class="brand-product search-product-list1 clearfix">
											</div>
									</div>
								`
								var ls2 = document.createElement('div');
								ls2.classList.add('l-s-grid2');
								ls2.innerHTML +=`
									<div class="product-list-slide">
											<div class="brand-product search-product-list2 clearfix">
											</div>
									</div>
								`
								xpar.appendChild(ls1);
								xpar.appendChild(ls2);
								par.insertBefore(xpar,opar);
								}
								var bpar1 = document.querySelectorAll('.search-product-list1')
								var bpar2 = document.querySelectorAll('.search-product-list2')
								for(var m=0;m<arr[0].list.length;m++){
									var max1= document.createElement('div');
									var max2= document.createElement('div');
									// max.classList.add('xzz')
									for(var z=0;z<arr[0].list[m].one.length;z++){
										max1.innerHTML +=`
											<dl>
												<dt>
													<a href='xq.html'>
														<img src=${arr[0].list[m].one[z].url}>
													</a>
												</dt>
												<dd class='p-l-name'>${arr[0].list[m].one[z].dic}</dd>
												<dd class='p-l-price linethrough'>${arr[0].list[m].one[z].pic}</dd>
											</dl>
										`
										max2.innerHTML +=`
											<dl>
												<dt>
													<a href='xq.html'>
														<img src=${arr[0].list[m].twe[z].url}>
													</a>
												</dt>
												<dd class='p-l-name'>${arr[0].list[m].twe[z].dic}</dd>
												<dd class='p-l-price linethrough'>${arr[0].list[m].twe[z].pic}</dd>
											</dl>
										`
									}
									bpar1[m].appendChild(max1)
									bpar2[m].appendChild(max2)
								}
									var pois = document.querySelectorAll('.list-slide-container');
									for(var i=0;i<pois.length;i++){
										var viebutton = document.createElement('div');
										viebutton.classList.add('viewAll-button');
										viebutton.innerHTML =`
											<a>
												${ck[i]}
												<span></span>
											</a>
										`
										pois[i].appendChild(viebutton)
										
								}
								
								getxuanxiangka()
					}
					// 实现效果
					function getxuanxiangka(){
						var box=document.querySelectorAll('.list-slide-container');
						var bnt=document.querySelectorAll('.bs-container');
						var bntll=document.querySelectorAll('.list-slide-container dl');
						var move=document.querySelector('.brand-menu');
						var index=0;
						getxuanxiangka$move()
						function getxuanxiangka$move(){
							for(var i=0;i<box.length;i++){
								box[i].style.display='none';
								box[i].style.opacity=0;
							}
							box[index].style.display='block';
							box[index].style.opacity=1;
						}
						for(var i=0;i<bnt.length;i++){
							(function(i){
								bnt[i].onmouseover=function(){
									index=i;
									switch(i){
										case 0:
										move.style.left='12%';
										break;
										case 1:
										move.style.left='37%';
										break;
										case 2:
										move.style.left='63%';
										break;
										case 3:
										move.style.left='88%';
										break;
									}
									getxuanxiangka$move()
								}
							})(i)
						}
						for(var i=0;i<bntll.length;i++){
							(function(i){
								bntll[i].onmouseover=function(){
									bntll[i].style.border='1px solid #666'
								}
								bntll[i].onmouseout=function(){
									bntll[i].style.border='none'
								}
							}(i))
						}
						var pois=document.querySelectorAll('.viewAll-button a');
						var posp=document.querySelectorAll('.viewAll-button a span');
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