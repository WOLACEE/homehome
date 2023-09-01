function login() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value == "" || pw.value == "") {
        alert("로그인을 할 수 없습니다.")
    }
    else {
        location.href = 'login2.html';
    }
}

function back() {
    history.go(-1)
}