$(function() {
    enterText();
});
//登录验证
function enterText() {
    var mobile = $("#login_user"),
        pass = $("#login_pass"),
        warn1 = $(".error").eq(0),
        warn2 = $(".error").eq(1),
        // mobileReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}|admin$/,
        mobileReg = /^[0-9a-zA-Z.@]{5,30}$/,
        passReg = /^\S{6,20}$/;
    $("#login-btn").on("click", function() {
            mobileVal = mobile.val(),
            passVal = pass.val();
            if(mobileVal!="admin"){
              errormsg.ealert("账号为admin");
              return
            }
        if (passVal!="123456") {
          errormsg.ealert("账号为admin");
          return
        }
        $("#login-btn").prop('disabled', false);
        location.href = "src/index.html";
    })

    //enter
    document.onkeydown = keyDownSearch;


    errorHide($("#login_user"), warn1);
    errorHide(pass, warn2);

    mobile.bind("input propertychange", function() {
        mobile.css({
            "border-color": "#ced2db"
        });
        warn1.fadeOut(80);
    });
    pass.bind("input propertychange", function() {
        pass.css({
            "border-color": "#ced2db"
        });
        $(".error").eq(1).fadeOut(80);
    })

}

function keyDownSearch(e) {
    // 兼容FF和IE和Opera
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
        $('#login-btn').click();
    }
}
