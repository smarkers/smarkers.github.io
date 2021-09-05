function GET(url,cs,dm){
	var fxt;
	if(window.XMLHttpRequest){
		fxt=new XMLHttpRequest()
	}else{
		fxt=new ActiveXObject("Microsoft.XMLHTTP")
	}
	fxt.open("GET",url+"?"+cs,true)
	fxt.send()
	fxt.onreadystatechange=function(){
		if(fxt.readyState==4&&fxt.status==200){
			var b=JSON.parse(fxt.responseText)
			dm(b)
		}
	}
}
function POST(url,cs,dm){
	var fxt;
	if(window.XMLHttpRequest){
		fxt=new XMLHttpRequest()
	}else{
		fxt=new ActiveXObject("Microsoft.XMLHTTP")
	}
	fxt.open("POST",url,true)
	fxt.setRequestHeader("content-type","application/x-www-form-urlencoded")
	fxt.send(cs)
	fxt.onreadystatechange=function(){
		if(fxt.readyState==4&&fxt.status==200){
			var b=JSON.parse(fxt.responseText)
			dm(b)
		}
	}
}