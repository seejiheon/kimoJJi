var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'gold';
//왼쪽 위에서부터 10, 10 위치에 100*100 사이즈 네모 그리기
ctx.fillRect(450,500,400,400);