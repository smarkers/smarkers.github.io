/* get	
		作用：通过get方式 请求服务器数据
		参数：3个
			url:  请求服务器文件路径      string
			data: 请求服务器所需要的参数  string  
			fn:   数据请求成功之后的DOM操作  function
		返回：undefined
			
	
		function get(url,data,fn){
			//1-创建请求对象
			var xhr = new XMLHttpRequest();
			//2-开启一个新的请求
			xhr.open("get", url+"?"+data, true)
			//3-发送请求
			xhr.send();
			//4-请求状态的变化
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status == 200){
					//5-请求成功获取所需要的数据 responseText
					var d = JSON.parse(xhr.responseText)
					//6-通过js脚本DOM操作实现局部刷新
					fn(d);
				}
			}
		}
*/

/*		get	
		作用：通过get方式 请求服务器数据
		参数：3个
			url:  请求服务器文件路径      string
			data: 请求服务器所需要的参数  string  
			fn:   可选参数 数据请求成功之后的DOM操作  function
			err:  可选参数 失败时 所做处理   function
		返回：undefined
*/
	// 1-兼容
	// 2-请求成功后做的事 和 请求失败的提示处理

	//轮播图
		//选项卡
		//手风琴
		//爬楼层
	//价格联动操作

	//拖拽事件
	//放大镜
	//页面传值实现详情页

	//请求数据 get  post  ajax

	//

		

	function get(url,data,fn,err){
		//1-创建请求对象
		var xhr = null;
		if( window.XMLHttpRequest ){
			xhr= new XMLHttpRequest()
		}else{
			//兼容 非标准IE浏览器
			xhr= new ActiveXObject("Microsoft.XMLHTTP")
		}
		//2-开启一个新的请求
		xhr.open("get", url+"?"+data, true)
		//3-发送请求
		xhr.send();
		//4-请求状态的变化
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status == 200){
				//5-请求成功获取所需要的数据 responseText
				var d = JSON.parse(xhr.responseText)
				//6-通过js脚本DOM操作实现局部刷新
				console.log(xhr.statusText)
				if(fn){ fn(d) };
			}else{
				if(err){err(xhr.statusText)}
			}
		}
	}

	//post方法
		/*
			1作用： 向服务器提交post请求 获取所需要的数据
			2参数:  4个
				1-url : 代表 请求服务器文件地址
				2-data: 代表 请求所需要的参数 验证信息
				3-fn  : 可选参数 代表 请求数据成功 所执行的操作 成功的回调函数
				4-err : 可选参数 代表  请求失败 所执行的操作   失败的回调函数
			3-返回值： undefined
		*/

		function post(url,data,fn,err){
			var xhr = null;
			if(window.XMLHttpRequest){
				xhr = new XMLHttpRequest()
			}else{
				xhr = new ActiveXObject("microsoft.XMLHTTP")
			}
			xhr.open("post",url,true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded") //设置请求头 格式
			xhr.send(data);
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4&&xhr.status==200){
					var d = JSON.parse(xhr.responseText)
					if(fn){fn(d)}
				}else{
					if(err){err(xhr.statusText)}
				}
			}
		
		}

	function ajax(){
		
	
	}

	function move(){
	
	}


