function login() {
    var id = document.querySelector('#fname');
    var pw = document.querySelector('#lname');

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