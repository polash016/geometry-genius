
let colorsArray = ['#fda4af', '#f9a8d4', '#f0abfc','#d8b4fe', '#c4b5fd', '#a5b4fc', '#7dd3fc', '#67e8f9', '#5eead4','#bef264']
function changeColor(){
    let i = Math.floor(Math.random()*10);
    document.querySelector('.card').style.backgroundColor = colorsArray[i];
}
function baseColor(){
    document.querySelector('.card').style.backgroundColor = '#f3f4f6';
}
// document.querySelector('card').addEventListener('onmouseover', function(e){
//     changeColor(e.target);
// })