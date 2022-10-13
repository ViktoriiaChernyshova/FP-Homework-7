let oper = prompt('Що ви хоче зробити (add, sub, mult, div)?');
let x = +prompt('Перше число');
let y = +prompt('Друге число');

if (oper === 'add') {
    alert((x) + '+' + (y) + '=' + ((+x) + (+y)));
} else if (oper === 'sub') {
    alert((x) + '-' + (y) + '=' + ((x) - (y)));
} else if (oper === 'mult') {
    alert((x) + '*' + (y) + '=' + (x) * (y));
} else if (oper === 'div') {
    alert((x) + '/' + (y) + '=' + (x) / (y));
} else {
    alert('incorect.');
}