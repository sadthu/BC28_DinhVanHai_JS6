// bài 1
btnSmallNumber.onclick = function () {
    var sum = 0;
    for (i = 1; sum < 10000; i++) {
        sum += i;
    }
    i -= 1;
    document.getElementById('result').innerHTML = 'Số nguyên dương nhỏ nhất là: ' + i + '; Tổng: ' + sum;
}

// bài 2
btnCalTotal.onclick = function () {
    var numberX = +document.getElementById('numberX').value;
    var numberN = +document.getElementById('numberN').value;
    document.getElementById('result2').innerHTML = 'Tổng: ' + calTotal(numberX, numberN).toLocaleString();
}

function calTotal(x, n) {
    var s = 0;
    for (i = 1; i <= n; i++) {
        s += Math.pow(x, i);
    }
    return s;
}

// bài 3
btnCount.onclick = function () {
    var inNumberN = +document.getElementById('inNumberN').value;
    var factorial = 1;
    if (inNumberN < 0 || !Number.isInteger(inNumberN)) {
        factorial = 0;
    }
    for (i = 1; i <= inNumberN; i++) {
        factorial *= i;
    }
    if (inNumberN <= 20) {
        document.getElementById('result3').innerHTML = 'Giai thừa: ' + factorial.toLocaleString();
    } else {
        document.getElementById('result3').innerHTML = 'Giai thừa: ' + factorial.toExponential();
    }
}

// bài 4
btnPrintDiv.onclick = function () {
    var printDiv = '';
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            printDiv += '<div style="background-color:red; color: #fff;">Div chẵn ' + i + '</div>';
        } else {
            printDiv += '<div style="background-color:blue; color: #fff;">Div lẻ ' + i + '</div>';
        }
    }
    document.getElementById('result4').innerHTML = printDiv;
}
