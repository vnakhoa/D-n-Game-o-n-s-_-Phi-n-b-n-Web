var secret = Math.floor(Math.random() * 101);
console.log(secret); //////////// Số random ẩn đi./////////////
var luotChoi = 3;
var score = 0;
function check() {
    luotChoi--; // console.log(luotChoi);  Giá trị của biến  luotChoi hiện tại. ///////////
    var input = document.getElementById("number");
    var guess = Number(input.value);
    var span = document.getElementById("count");
    span.innerHTML = String(luotChoi);
    if (guess == secret) {
        if (luotChoi == 2) {
            score = 100;
            var span_1 = document.getElementById("count");
            span_1.innerHTML = String(luotChoi);
            var p = document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';
        }
        else if (luotChoi == 1) {
            score = 50;
            var span_2 = document.getElementById("count");
            span_2.innerHTML = String(luotChoi);
            var p = document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';
        }
        else if (luotChoi == 0) {
            score = 30;
            var span_3 = document.getElementById("count");
            span_3.innerHTML = String(luotChoi);
            var p = document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';
        }
        else {
            var p = document.getElementById("result");
            p.innerHTML = 'Game over';
        }
    }
    else {
        // guest > secret
        if (guess > secret) {
            // console.log(luotChoi);
            var span_4 = document.getElementById("count");
            span_4.innerHTML = String(luotChoi);
            var p = document.getElementById("result");
            p.innerHTML = String("So lon qua!");
            if (luotChoi < 0) {
                var p_1 = document.getElementById("result");
                p_1.innerHTML = 'Game over';
            }
            /////////////////////
        }
        else {
            //guesst < secret
            var p = document.getElementById("result");
            p.innerHTML = 'So nho qua!';
            var span_5 = document.getElementById("count");
            span_5.innerHTML = String(luotChoi);
            if (luotChoi < 0) {
                var p_2 = document.getElementById("result");
                p_2.innerHTML = 'Game over';
            }
            //////////////
        }
    }
}
function reset() {
    secret = Math.floor(Math.random() * 101);
    console.log(secret); //////////// Số random ẩn đi ////////// .
    luotChoi = 3;
    score = 0;
    var span = document.getElementById("count");
    span.innerHTML = String(luotChoi = 3);
    var input = document.getElementById("number");
    input.value = String('');
    var guess = Number(input.value);
    var p = document.getElementById("result");
    p.innerHTML = 'Chúc may mắn !';
}
