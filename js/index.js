var a = Number(prompt('Введіть a'));
var b = Number(prompt('Введіть b'));
var c = Number(prompt('Введіть c'));
var x1;
var x2;
var x;
var result = calculate(a, b, c);

function calculate(a, b, c) {
    var dis = b * b - 4 * a * c;
    if (dis > 0) {
        x1 = (- b + Math.sqrt(dis)) / (2 * a);
        x2 = (- b - Math.sqrt(dis)) / (2 * a);
        return 'x1='+x1+', x2='+x2;
    } else {
        if (dis == 0) {
            x = (- b) / (2 * a);
            return 'x='+x;
        } else {
            if (dis < 0) {
                return 'D<0';
            }
        }
    }
}

document.write(result);

