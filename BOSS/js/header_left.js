window.onload=function(){
	var oBBox=document.getElementById('box');
	var oBox=document.getElementById("js_showall");
	var oDiv=document.getElementById('js_allbox');
	
	var Oxy=document.getElementById('js_select');
	var Opto=document.getElementById('js_sel');
	
	oBBox.onmouseover=function(){
		oBox.style.display='none';
		oDiv.style.display='block';
	}
	oBBox.onmouseout=function(){
		oBox.style.display='block';
		oDiv.style.display='none';
	}
	
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