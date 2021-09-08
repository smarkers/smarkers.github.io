function xinptj(arr){
							var par = document.querySelector('.brand-segments');
							var newp = document.createElement('div');
							newp.classList.add('new-products');
							for(var i=0;i<arr.length;i++){
								var ls=document.createElement('div');
								ls.classList.add('l-s-grid');
								ls.innerHTML +=`
									<div class="product-list-slide">
											<div class="brand-product search-product-list clearfix">
											</div>
									</div>
								`
								newp.appendChild(ls)
							}
							par.appendChild(newp)
							var bpar = document.querySelectorAll('.search-product-list')
							for(var m=0;m<arr.length;m++){
								var max= document.createElement('div');
								for(var z=0;z<arr[m].list.length;z++){
									max.innerHTML +=`
										<dl>
											<dt>
												<a  href='xq.html'>
													<img src=${arr[m].list[z].url}>
												</a>
											</dt>
											<dd class='p-l-name'>${arr[m].list[z].dic}</dd>
											<dd class='p-l-price linethrough'>${arr[m].list[z].pic}</dd>
										</dl>
									`
								}
								bpar[m].appendChild(max)
							}
							
							xxkmove()
						}
						//实现效果
						function xxkmove(){
							var son = document.querySelectorAll('.search-product-list dl') 
							for(var i=0;i<son.length;i++){
								(function(i){
									son[i].onmouseover=function(){
										this.style.border='1px solid #666';
									}
									son[i].onmouseout=function(){
										this.style.border='none';
									}
								}(i))
							}
						}