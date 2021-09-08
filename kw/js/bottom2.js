zzc1()
						function zzc1(){
							var zz1=document.querySelectorAll('.product .mask')	
							var img1=document.querySelectorAll('.product')
							for(var i=0;i<img1.length;i++){
								(function(i){
									img1[i].onmouseover=function(){
										zz1[i].style.display='block';
									}
									img1[i].onmouseout=function(){
										zz1[i].style.display='none';
									}
								}(i))
							}
							var xxz=document.querySelectorAll('.product-text h1');
							// var xxj=document.querySelectorAll('.product-buy');
							
							for(var j=0;j<xxz.length;j++){
								(function(j){
									xxz[j].onmouseover=function(){
										xxz[j].style.color='#999999';
									}
									xxz[j].onmouseout=function(){
										xxz[j].style.color='';
									}
								}(j))
							}
						}