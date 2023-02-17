
let colorsArray = ['#fda4af', '#f9a8d4', '#f0abfc','#d8b4fe', '#c4b5fd', '#a5b4fc', '#7dd3fc', '#67e8f9', '#5eead4','#bef264'];

// function changeColor(){
//     let i = Math.floor(Math.random()*10);
//     // document.querySelectorAll('.card').style.backgroundColor = colorsArray[i];
//     const cards = document.querySelectorAll('.card');
//     for(const item of cards){
//         item.style.backgroundColor = colorsArray[i];
//         console.log(item)
//     }
// }
function changeColor(){
    const cards = document.querySelectorAll('.items');
    let i = Math.floor(Math.random()*cards.length);
    // document.querySelectorAll('.card').style.backgroundColor = colorsArray[i];
    
    for(const item of cards){
        item.style.backgroundColor = colorsArray[i];
        console.log(item)
    }
}
// function baseColor(){
//     let i = Math.floor(Math.random()*10);
//     // document.querySelectorAll('.card').style.backgroundColor = colorsArray[i];
//     const cards = document.querySelectorAll('.card');
//     for(single of cards){
//         single.style.backgroundColor = colorsArray[i];
//     }
//     document.querySelectorAll('.card').style.backgroundColor = '#f3f4f6';
// }
// document.querySelector('card').addEventListener('onmouseover', function(e){
//     let i = Math.floor(Math.random()*10);
//     e.target.style.backgroundColor = colorsArray[i];
// })