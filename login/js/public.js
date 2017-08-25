//输入隐藏错误提示
function errorHide(obj, errorWord) {
	obj.bind("input propertychange", function() {
		obj.css({
			"border-color": "#ced2db"
		});
		errorWord.fadeOut(80);
	});
}

//正则验证
function reg(obj, arr, re, txt) {
	if (re.test(obj.val())) {
		obj.css({
			"border-color": "#ced2db"
		});
		arr.html('');
	} else {
		obj.css({
			"border-color": "#ff5500"
		});
		arr.html(txt).fadeIn(80);
	}
}

//cookie
function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay)
	document.cookie = name + '=' + value + ';expires=' + oDate;
}
//设置cookie

function getCookie(name) {
	var arr = document.cookie.split(';');
	for (i = 0; i < arr.length; i++) {
		arr1 = arr[i].split('=');
		if (arr1[0] == name) {
			return arr1[1];
		}
	}
	return '';
}
//获取cookie并分隔

function removeCookie(name) {
	setCookie(name, 'admin', -1);
}
//删除cookie

// 错误提示
var errormsg={};
errormsg.ealert = function(msg) {
    $('body').append('<div class="msbg"> <div class="msgbody"> <div class="promptmsg">'+msg+'</div></div> </div>');
		setTimeout(function () {
			 $(".msbg").remove();
	 }, 2000);
}
