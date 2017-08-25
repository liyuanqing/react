$(function() {
  sendNum();
})

function sendNum() {
  var mobile = $("#login_user");
  var shortCode = $("#short-code");
  var verifyCode = $("#img-num");
  var newPass = $("#new-pass");
  var repeatPass = $("#repeat-pass");

  var warn1 = $(".error").eq(0);
  var warn2 = $(".error").eq(1);
  var warn3 = $(".error").eq(2);
  var warn4 = $(".error").eq(3);
  var warn5 = $(".error").eq(4);

  var mobileReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}|admin$/;
  var shortReg = /^[0-9]{6}$/;
  var passReg = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
  var imgReg = /^[a-zA-Z0-9]{4}$/;

  var flag = 0;
  var preLink = "http://116.62.92.115:72";

 //获取手机验证码
  $("#send-num").bind("click", function() {
    var messsge = '{"mobile":"'+mobile.val()+'"}';
    if (flag == 0) {
      if (mobile.val().length == 11 || mobile.val().length == 5) {
        reg(mobile, warn1, mobileReg, '请输入11位手机号');
      } else {
        mobile.css({
          "border-color": "#ff5500"
        });
        warn1.html("请输入11位手机号").fadeIn(80);
      }

      if (warn1.html() == '') {
        $("#send-num").attr("disabled","disabled")
        $.ajax({
          type: "post",
          url: preLink + "/property/user/get-sms-code", //获取手机验证码
          data: {'data':messsge},
          success: function(data) {
            var data=JSON.parse(data)
            if (data.code ==20000) {
              countdown();
            } else {
              $("#send-num").removeAttr("disabled")
              alert(data.error.errorMsg);
            }
          },
          error: function(){
            $("#send-num").removeAttr("disabled")
            errormsg.ealert("服务器错误，请重试")
          }
        });
      }
    }
  });
function countdown(){
  $("#send-num").css("background","#ccc");
  var num = 180;
  if(num>0){
    timer = setInterval(function() {
      num--;
      if(num>=0){
          $("#send-num").html(num + '秒后重试');
      }else {
          clearInterval(timer);
          $("#send-num").css("background","#FF5500");
          $("#send-num").html('发送验证码');
          $("#send-num").removeAttr("disabled")
      }
    }, 1000);
  }

}
  $("#off").bind("click", function() {
    $("#random-frame").addClass("hide");
    $("#mask").hide();
  })




  //下一步
  $("#next-fleg").bind("click", function() {
    var messsge2 ='{"mobile":"'+mobile.val()+'"'+',"code":"'+shortCode.val().trim()+'"}';
    if (mobile.val().length == 11 || mobile.val().length == 5) {
      reg(mobile, warn1, mobileReg, '请输入11位手机号');
    } else {
      mobile.css({
        "border-color": "#ff5500"
      });
      warn1.html("请输入11位手机号").fadeIn(80);
    }

    if (shortCode.val() == '') {
      shortCode.css({
        "border-color": "#ff5500"
      });
      warn2.html("请输入验证码").fadeIn(80);
    } else {
      reg(shortCode, warn2, shortReg, '请输入6位数字');
    }
    if (warn1.html() == '' && warn2.html() == '') {
        $.ajax({
        type: "post",
        url: preLink + "/property/user/validate-sms-code",
        data: {'data':messsge2},
        success: function(data) {
           var data=JSON.parse(data)
            if (data.code ==20000) {
              $("#code-frame").hide();
             $("#set-pass").removeClass("hide");
            } else {
              errormsg.ealert(data.error.errorMsg);
            }
        }
      });
    }
  });

  //重设密码
  $("#set-pass-btn").bind("click", function() {
    var message3='{"mobile":"'+mobile.val().trim()+'"'+',"password":"'+newPass.val().trim()+'"}';
    console.log(repeatPass.val().trim()+""+newPass.val().trim())
    if (newPass.val() == '') {
      newPass.css({
        "border-color": "#ff5500"
      });
      warn3.html("输入不能为空！").fadeIn(80);
    } else if(repeatPass.val().trim()== ''){
        warn4.html("请在次输入新密码").fadeIn(80);
    }else {
      reg(newPass, warn3, passReg, '密码格式为6~20位英文字母+数字');
    }
    if (newPass.val() == repeatPass.val() && warn4.html() == '') {
      $.ajax({
        type: "post",
        url: preLink + "/property/user/reset-password",
        data: {'data':message3},
        success: function(data) {
           var data=JSON.parse(data)
            if (data.code ==20000) {
              returnLogin();
            } else {
              errormsg.ealert(data.error.errorMsg);
            }
        }
      });
    } else if (newPass.val() != repeatPass.val()) {
      repeatPass.css({
        "border-color": "#ff5500"
      });
      warn4.html("两次输入不一致，请重新输入").fadeIn(80);
    }

  })

  errorHide(mobile, warn1);
  errorHide(shortCode, warn2);
  // errorHide(verifyCode, warn3);
  errorHide(newPass, warn3);
  errorHide(repeatPass, warn4);

}
//找回密码成功
function returnLogin() {
  $("#set-pass").hide();
  $("#jump-frame").show();
  var num = 5;
  timer = setInterval(function() {
    num--;
    $("#timer").html(num + '秒');
    if (num == 0) {
      location.href = 'index.html';
    }
  }, 1000);

}
