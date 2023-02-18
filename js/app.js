// blog button and new html page
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "blog.html"
})

let serial = 0;
// calcultate on triangle button

document.getElementById('btn-calculate-first').addEventListener('click', function(){
     serial += 1;
    const nameTriangle = document.getElementById('name-triangle').innerText;
    const triangleB = document.getElementById('input-field-b-triangle').value;
    const triangleH = document.getElementById('input-field-h-triangle').value;
    // const triangleBInner = document.getElementById('triangle-b-inner');
    // const triangleHInner = document.getElementById('triangle-h-inner');
    // triangleBInner.innerText = triangleB;
    // triangleHInner.innerText = triangleH; 
    getSetElement('triangle-b-inner', 'triangle-h-inner', triangleB, triangleH)
    const total = 0.5 * parseFloat(triangleB) * parseFloat(triangleH);
    addInnerElement(number, nameTriangle, total);
    if(typeof triangleB !== 'number' && triangleH !== 'number'){
        alert('Please give valid number')
        return;
    };
});
// calculate on rectangle button
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const nameRectangle = document.getElementById('name-rectangle').innerText;
    const rectangleW = document.getElementById('input-field-w-rectangle').value;
    const rectangleI = document.getElementById('input-field-i-rectangle').value;
    // const rectangleWInner = document.getElementById('rectangle-w-inner');
    // const rectangleIInner= document.getElementById('rectangle-i-inner');
    // rectangleWInner.innerText = rectangleW;
    // rectangleIInner.innerText = rectangleI; 
getSetElement('rectangle-w-inner', 'rectangle-i-inner', rectangleW, rectangleI)
    const total = parseFloat(rectangleW) * parseFloat(rectangleI);
    addInnerElement(serial, nameRectangle, total);
    if(typeof rectangleW !== 'number' && rectangleI !== 'number'){
        alert('Please give valid number')
    }

    
});
// calculate on Parallelogram button
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    const nameParallelogram = document.getElementById('name-parallelogram').innerText;
    const parallelogramB = document.getElementById('parallelogram-b').innerText;
    const parallelogramH = document.getElementById('parallelogram-h').innerText;
    getSetElement('parallelogram-b-inner', 'parallelogram-h-inner', parallelogramB, parallelogramH);
    const total = parseFloat(parallelogramB )* parseFloat(parallelogramH);
    addInnerElement(serial, nameParallelogram, total);

});
// calculate on Rhombus button
document.getElementById('btn-rhombus').addEventListener('click', function(){
     serial += 1;
    const nameRhombus = document.getElementById('name-rhombus').innerText;
    const rhombusD1 = document.getElementById('rhombus-d1').innerText;
    const rhombusD2 = document.getElementById('rhombus-d2').innerText;
    getSetElement('rhombus-d1-inner', 'rhombus-d2-inner', rhombusD1, rhombusD2);
    const total = 0.5 * parseFloat(rhombusD1) * parseFloat(rhombusD2);
    addInnerElement(serial, nameRhombus, total);
});
// calculate on Pentagon button
document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    const namePentagon = document.getElementById('name-pentagon').innerText;
    const pentagonP = document.getElementById('pentagon-p').innerText;
    const pentagonB = document.getElementById('pentagon-b').innerText;
    getSetElement('pentagon-p-inner', 'pentagon-b-inner', pentagonP, pentagonB);
    const total = 0.5 * parseFloat(pentagonP) * parseFloat(pentagonB);
    addInnerElement(serial, namePentagon, total);
});
// calculate on Ellipse button
document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const nameEllipse = document.getElementById('name-ellipse').innerText;
    const ellipseA = document.getElementById('ellipse-a').innerText;
    const ellipseB = document.getElementById('ellipse-b').innerText;
    getSetElement('ellipse-a-inner', 'ellipse-b-inner', ellipseA, ellipseB);
    const total = (Math.PI).toFixed(2) * parseFloat(ellipseA) * parseFloat(ellipseB);
    const newTotal = total.toFixed(2);
    addInnerElement(serial, nameEllipse, newTotal);
})

function getSetElement(getField1, getField2, setField1,setField2){
    const rectangleWInner = document.getElementById(getField1);
    const rectangleIInner= document.getElementById(getField2);
    rectangleWInner.innerText = setField1;
    rectangleIInner.innerText = setField2;
}

function getInnerElement(titleId, element1, element2){
    const titleElement = document.getElementById('name-rectangle').innerText;
    const firstElement = document.getElementById('rectangle-w-inner');
    const secondElement = document.getElementById('rectangle-i-inner');
};
function addInnerElement(number, name, total){
    const container = document.getElementById('table-container');
    
    const tr = document.createElement('tr');
    const btn = document.createElement('button');
    btn.innerHTML = "convert to m<sup>2</sup>";
    btn.setAttribute('style', 'background-color: skyblue; color: white; border-radius: 4px; padding-top:2px; padding-bottom:2px');

    tr.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
    <td>${total}cm<sup>2</sup></td>
    
    
    
    `;
    container.appendChild(tr);
    tr.appendChild(btn);
};
function button(){

}

