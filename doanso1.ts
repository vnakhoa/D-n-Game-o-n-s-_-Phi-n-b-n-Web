let secret: number = Math.floor(Math.random() * 101 );  
console.log(secret);     //////////// Số random ẩn đi./////////////

let luotChoi: number = 3;
let score: number = 0;

function check() {
    luotChoi--;                                                     // console.log(luotChoi);  Giá trị của biến  luotChoi hiện tại. ///////////
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("number");
    let guess: number = Number(input.value);
    let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
    span.innerHTML = String(luotChoi);
    
    if(guess == secret) {
        if(luotChoi == 2){
            score = 100;
            let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
            span.innerHTML = String(luotChoi);
    
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';
        }
        else if(luotChoi == 1) {
            score = 50;
            let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
            span.innerHTML = String(luotChoi);
    
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';           
        }
        else if(luotChoi == 0) {
            score = 30;
            let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
            span.innerHTML = String(luotChoi);
    
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = 'You Win! ' + String(score) + ' diem';           
        }
        else {
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = 'Game over';
        }
    }
    else {
        // guest > secret
        if(guess > secret) {
            // console.log(luotChoi);
            
            let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
            span.innerHTML = String(luotChoi);
            
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = String("So lon qua!");
            
            if(luotChoi <0) {
                let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
                p.innerHTML = 'Game over';
            }
            /////////////////////
        }
        else {
            //guesst < secret
            let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
            p.innerHTML = 'So nho qua!';
            
            let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
            span.innerHTML = String(luotChoi);
            
            if(luotChoi <0) {
                let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
                p.innerHTML = 'Game over';
            }
            //////////////
        }
    }
}

function reset() {
    secret = Math.floor(Math.random() * 101 );  
    console.log(secret);     //////////// Số random ẩn đi ////////// .

    luotChoi = 3;
    score = 0;

    let span: HTMLSpanElement = <HTMLSpanElement>document.getElementById("count");
    span.innerHTML = String(luotChoi = 3);

    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("number");
    input.value = String('');
    let guess: number = Number(input.value);

    let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    p.innerHTML = 'Chúc may mắn !';
}
