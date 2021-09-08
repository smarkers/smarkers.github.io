function getCnav(navarr){
				getlog(navarr)
				function getlog(navarr){
					var navpar=document.querySelector('.nav')
					for(var i=0;i<navarr.length;i++){
						var cUl=document.createElement('ul');
						var cDiv=document.createElement('div');
						cDiv.classList.add('navigation-ex');
						for(var j=0;j<navarr[i].list.length;j++){
							cUl.innerHTML +=`
								<li>
									<a>
										<img src='${navarr[i].list[j].url}'>
										<span>${navarr[i].list[j].dic}</span>
									</a>
								</li>
							`
						}
						cDiv.appendChild(cUl);
						navpar.appendChild(cDiv);
					}
					navpar.appendChild(cDiv);
					getNav()
				}
				//实现效果
				function getNav(){
					var navbtn=document.querySelectorAll('.level1 li');
					var navObox=document.querySelectorAll('.navigation-ex');
					var navOul=document.querySelectorAll('.navigation-ex ul');
					var navA=document.querySelectorAll('.level1 li a');
					var navpar=document.querySelector('.nav');
					var bj=document.querySelector('.balckbj');
					var index=0;
					for(var i=0;i<navbtn.length;i++){
						(function(i){
							navbtn[i].onmouseover=function(){
								index=i;
								getNavbox();
								bj.style.display='block';
							}
						})(i)
					}
					for(var i=0;i<navbtn.length;i++){
						(function(i){
							navObox[i].onmouseout=function(){
								navObox[i].style.display='none';
								navObox[i].style.opacity=0;
								navObox[i].style.height=0;
								bj.style.display='none';
								navA[i].style.textDecoration='none';
							}
							navObox[i].onmouseover=function(){
								index=i;
								bj.style.display='block';
								getNavbox();
							}
						})(i)
					}
					function getNavbox(){
						for(var i=0;i<navbtn.length;i++){
							navObox[i].style.display='none';
							navObox[i].style.opacity=0;
							navObox[i].style.height=0;
							navA[i].style.textDecoration='none';
						}
						navObox[index].style.display='block';
						navObox[index].style.opacity=1;
						navObox[index].style.height='272px';
						navA[index].style.textDecoration='underline';
					}
				}
			}