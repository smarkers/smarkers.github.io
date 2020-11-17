window.onload=function(){
	var Oxy=document.getElementById('js_select');
	var Opto=document.getElementById('js_sel');
	
	Oxy.onmouseover=function(){
		Opto.style.display='block';
	}
	Oxy.onmouseout=function(){
		Opto.style.display='none';
	}
	Opto.onmouseover=function(){
		Opto.style.display='block';
	}
	Opto.onmouseout=function(){
		Opto.style.display='none';
	}
}