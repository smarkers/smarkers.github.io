	function get(url,data,DOM){
		var xhr=new XMLHttpRequest();
		xhr.open('GET',url+'?'+data,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var d=JSON.parse(xhr.responseText);
				DOM(d);
			}
		}
		xhr.send();
	}
	function post(url,data,fn){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{ 
			xhr = new ActiveXObject("micorsoft.XMLHTTP");
		}
		xhr.open("POST",url,true)
		//设置请求头  
		xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var d=JSON.parse(xhr.responseText);
				fn(d);//获取数据后执行的操作
			}else{
				if(err){err(xhr.statusText)};
			}
		}
		xhr.send(data)
	}