
    window.onload = function() {
    let cnv = document.getElementById("canvas")
    let ctx = cnv.getContext('2d');

    ctx.strokeStyle = "black"
    ctx.strokeRect(0,0,100,50);
    ctx.strokeRect(0,0,200,50);
    ctx.strokeRect(0,0,300,50);
    ctx.strokeRect(0,0,100,100);
    ctx.strokeRect(0,0,200,100);
    ctx.strokeRect(0,0,300,100);
    ctx.strokeRect(0,0,100,150);
    ctx.strokeRect(0,0,200,150);
    ctx.strokeRect(0,0,300,150);

    let isBusy1 = false;
    let isBusy2 = false;
    let isBusy3 = false;
    let isBusy4 = false;
    let isBusy5 = false;
    let isBusy6 = false;
    let isBusy7 = false;
    let isBusy8 = false;
    let isBusy9 = false;
    
    let turn = 1;

    var X1 = 0;
    let X2 = 0;
    let X3 = 0;
    let X4 = 0;
    let X5 = 0;
    let X6 = 0;
    let X7 = 0;
    let X8 = 0;
    let X9 = 0;

    let O1 = 0;
    let O2 = 0;
    let O3 = 0;
    let O4 = 0;
    let O5 = 0;
    let O6 = 0;
    let O7 = 0;
    let O8 = 0;
    let O9 = 0;

    let canTurn = true;

    let score1 = 0;
    let score2 = 0;

    function x1() {
        if(canTurn == true) {
            if(isBusy1 == false){
                ctx.beginPath();
                ctx.lineTo(0,0);    
                ctx.lineTo(100,50);
                ctx.lineTo(100,0);
                ctx.lineTo(0,50);
                ctx.stroke();
                isBusy1 = true
                turn++;
                X1 = 1;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }

    
    function x2() {
        if(canTurn == true) {
            if(isBusy2==false){
                ctx.beginPath();
                ctx.lineTo(100,0);    
                ctx.lineTo(200,50);
                ctx.lineTo(200,0);
                ctx.lineTo(100,50);
                ctx.stroke();
                isBusy2 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }
    
    function x3() {
        if(canTurn == true) {
            if(isBusy3==false){
                ctx.beginPath();
                ctx.lineTo(200,0);    
                ctx.lineTo(300,50);
                ctx.lineTo(300,0);
                ctx.lineTo(200,50);
                ctx.stroke();
                isBusy3 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }

    function x4() {
        if(canTurn == true) {
            if(isBusy4==false) {
                ctx.beginPath();
                ctx.lineTo(0,50);    
                ctx.lineTo(100,100);
                ctx.lineTo(100,50);
                ctx.lineTo(0,100);
                ctx.stroke();
                isBusy4 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }

    function x5() {
        if(canTurn == true) {
            if(isBusy5==false){
                ctx.beginPath();
                ctx.lineTo(100,50);    
                ctx.lineTo(200,100);
                ctx.lineTo(200,50);
                ctx.lineTo(100,100);
                ctx.stroke();
                isBusy5 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }

    function x6() {
        if(canTurn == true) {
            if(isBusy6==false) {
                ctx.beginPath();
                ctx.lineTo(200,50);    
                ctx.lineTo(300,100);
                ctx.lineTo(300,50);
                ctx.lineTo(200,100);
                ctx.stroke();
                isBusy6 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!")
            }
        }
    }

    function x7() {
        if(canTurn == true) {
            if(isBusy7==false){
                ctx.beginPath();
                ctx.lineTo(0,100);    
                ctx.lineTo(100,150);
                ctx.lineTo(100,100);
                ctx.lineTo(0,150);
                ctx.stroke();
                isBusy7 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function x8() {
        if(canTurn == true) {
            if(isBusy8==false) {
                ctx.beginPath();
                ctx.lineTo(100,100);    
                ctx.lineTo(200,150);
                ctx.lineTo(200,100);
                ctx.lineTo(100,150);
                ctx.stroke();
                isBusy8 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function x9() {
        if(canTurn == true) {
            if(isBusy9==false){
                ctx.beginPath();
                ctx.lineTo(200,100);    
                ctx.lineTo(300,150);
                ctx.lineTo(300,100);
                ctx.lineTo(200,150);
                ctx.stroke();
                isBusy9 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }
    
    function o1() {
        if(canTurn == true) {
            if(isBusy1 == false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(50,25,22,0,Math.PI*2);
                ctx.stroke();
                isBusy1 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o2() {
        if(canTurn == true) {
            if(isBusy2==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(150,25,22,0,Math.PI*2);
                ctx.stroke();
                isBusy2 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o3() {
        if(canTurn == true) {
            if(isBusy3==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(250,25,22,0,Math.PI*2);
                ctx.stroke();
                isBusy3 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o4() {
        if(canTurn == true) {
            if(isBusy4==false) {
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(50,75,22,0,Math.PI*2);
                ctx.stroke();
                isBusy4 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o5() {
        if(canTurn == true) {
            if(isBusy5==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(150,75,22,0,Math.PI*2);
                ctx.stroke();
                isBusy5 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o6() {
        if(canTurn == true) {
            if(isBusy6==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(250,75,22,0,Math.PI*2);
                ctx.stroke();
                isBusy6 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o7() {
        if(canTurn == true) {
            if(isBusy7==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(50,125,22,0,Math.PI*2);
                ctx.stroke();
                isBusy7 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o8() {
        if(canTurn == true) {
            if(isBusy8==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(150,125,22,0,Math.PI*2);
                ctx.stroke();
                isBusy8 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }

    function o9() {
        if(canTurn == true) {
            if(isBusy9==false){
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(250,125,22,0,Math.PI*2);
                ctx.stroke();
                isBusy9 = true;
                turn++;
            }
            else {
                alert("Вы не можете походить в одно и то же поле дважды!");
            }
        }
    }
    button2.onclick = function(){
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black"
        ctx.strokeRect(0,0,100,50);
        ctx.strokeRect(0,0,200,50);
        ctx.strokeRect(0,0,300,50);
        ctx.strokeRect(0,0,100,100);
        ctx.strokeRect(0,0,200,100);
        ctx.strokeRect(0,0,300,100);
        ctx.strokeRect(0,0,100,150);
        ctx.strokeRect(0,0,200,150);
        ctx.strokeRect(0,0,300,150);
        isBusy1 = false;
        isBusy2 = false;
        isBusy3 = false;
        isBusy4 = false;
        isBusy5 = false;
        isBusy6 = false;
        isBusy7 = false;
        isBusy8 = false;
        isBusy9 = false;

        X1 = 0;
        X2 = 0;
        X3 = 0;
        X4 = 0;
        X5 = 0;
        X6 = 0;
        X7 = 0;
        X8 = 0;
        X9 = 0;

        O1 = 0;
        O2 = 0;
        O3 = 0;
        O4 = 0;
        O5 = 0;
        O6 = 0;
        O7 = 0;
        O8 = 0;
        O9 = 0;

        canTurn = true;
        turn = 1;

        score1 = 0;
        score2 = 0;

        document.getElementById("score1").innerHTML ="0";
        document.getElementById("score2").innerHTML ="0";
    }

    button1.onclick = function(){
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black"
        ctx.strokeRect(0,0,100,50);
        ctx.strokeRect(0,0,200,50);
        ctx.strokeRect(0,0,300,50);
        ctx.strokeRect(0,0,100,100);
        ctx.strokeRect(0,0,200,100);
        ctx.strokeRect(0,0,300,100);
        ctx.strokeRect(0,0,100,150);
        ctx.strokeRect(0,0,200,150);
        ctx.strokeRect(0,0,300,150);
        isBusy1 = false;
        isBusy2 = false;
        isBusy3 = false;
        isBusy4 = false;
        isBusy5 = false;
        isBusy6 = false;
        isBusy7 = false;
        isBusy8 = false;
        isBusy9 = false;

        X1 = 0;
        X2 = 0;
        X3 = 0;
        X4 = 0;
        X5 = 0;
        X6 = 0;
        X7 = 0;
        X8 = 0;
        X9 = 0;

        O1 = 0;
        O2 = 0;
        O3 = 0;
        O4 = 0;
        O5 = 0;
        O6 = 0;
        O7 = 0;
        O8 = 0;
        O9 = 0;

        canTurn = true;
    }

    cnv.addEventListener('click', function (e)  {
        if(e.offsetX<=100 && e.offsetY<=100){
            if(turn%2 != 0 && canTurn == true){
                x1()
                X1 = 1;
                isWin()
            }
            else if (canTurn == true){
                o1()
                O1 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=200 && e.offsetY<=100){
            if(turn%2 != 0 && canTurn == true){
                x2()
                X2 = 1;
                isWin()
            }
            else if (canTurn == true){
                o2()
                O2 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=300 && e.offsetY<=100){
            if(turn%2 != 0 && canTurn == true){
                x3()
                X3 = 1;
                isWin()
            }
            else if(canTurn == true){
                o3()
                O3 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=100 && e.offsetY<=200){
            if(turn%2 != 0 && canTurn == true){
                x4()
                X4 = 1;
                isWin()
            }
            else if (canTurn == true){
                o4()
                O4 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=200 && e.offsetY<=200){
            if(turn%2 != 0 && canTurn == true){
                x5()
                X5 = 1;
                isWin()
            }
            else if (canTurn == true) {
                o5()
                O5 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=300 && e.offsetY<=200){
            if(turn%2 != 0 && canTurn == true){
                x6()
                X6 = 1;
                isWin()
            }
            else if (canTurn == true) {
                o6()
                O6 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=100 && e.offsetY<=300){
            if(turn%2 != 0 && canTurn == true){
                x7()
                X7 = 1;
                isWin()
            }
            else if(canTurn == true) {
                o7()
                O7 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=200 && e.offsetY<=300){
            if(turn%2 != 0 && canTurn == true){
                x8()
                X8 = 1;
                isWin()
            }
            else if (canTurn == true){
                o8()
                O8 = 1;
                isWin()
            }
        }
        else if(e.offsetX<=300 && e.offsetY<=300){
            if(turn%2 != 0 && canTurn == true){
                x9()
                X9 = 1;
                isWin()
            }
            else if (canTurn == true){
                o9()
                O9 = 1;
                isWin()
            }
        }
    })
    function isWin(){
        if((X1 == 1 && X2 == 1 && X3 == 1)||(X4 == 1 && X5 == 1 && X6 == 1)||(X7 == 1 && X8 == 1 && X9 == 1) ||(X1 == 1 && X4 == 1 && X7 == 1)||(X2 == 1 && X5 == 1 && X8 == 1)||(X3 == 1 && X6 == 1 && X9 == 1)||(X1 == 1 && X5 == 1 && X9 == 1)||(X3 == 1 && X5 == 1 && X7 == 1)){
            alert("Победил первый игрок!");
            canTurn = false;
            score1++
            document.getElementById("score1").innerHTML = score1;
            turn = 1;
        }
        else if((O1 == 1 && O2 == 1 && O3 == 1)||(O4 == 1 && O5 == 1 && O6 == 1)||(O7 == 1 && O8 == 1 && O9 == 1) ||(O1 == 1 && O4 == 1 && O7 == 1)||(O2 == 1 && O5 == 1 && O8 == 1)||(O3 == 1 && O6 == 1 && O9 == 1)||(O1 == 1 && O5 == 1 && O9 == 1)||(O3 == 1 && O5 == 1 && O7 == 1)){
            alert("Победил второй игрок!");
            canTurn = false;
            score2++;
            document.getElementById("score2").innerHTML = score2;
            turn = 2;
        }
        else if ((X1 ==1 ||O1 == 1)&&(X2 == 1||O2 == 1)&&(X3 == 1||O3 == 1)&&(X4 == 1||O4 == 1)&&(X5 == 1||O5 == 1)&&(X6 == 1||O6 == 1)&&(X7 == 1||O7 == 1)&&(X8 == 1||O8 == 1)&&(X9 == 1||O9 == 1)){
            alert("Ничья!")
            canTurn = false;
            if(score2 < score1){turn = 2;}
            else{turn = 1;}
        }
    }
}   
