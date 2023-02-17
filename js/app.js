let serial = 0;
// calcultate on triangle button

document.getElementById('btn-calculate-first').addEventListener('click', function(){
    let number = serial + 1;
    const nameTriangle = document.getElementById('name-triangle').innerText;
    const triangleB = document.getElementById('input-field-b-triangle').value;
    const triangleH = document.getElementById('input-field-h-triangle').value;
    const triangleBInner = document.getElementById('triangle-b-inner');
    const triangleHInner = document.getElementById('triangle-h-inner');
    triangleBInner.innerText = triangleB;
    triangleHInner.innerText = triangleH; 
    const total = 0.5 * parseFloat(triangleB) * parseFloat(triangleH);
    addInnerElement('table-container', number, nameTriangle, total);
    if(typeof triangleB !== 'number' && triangleH !== 'number'){
        alert('Please give valid number')
    }
});
// calculate on rectangle button
document.getElementById('btn-rectangle').addEventListener('click', function(){
    let number = serial + 1;
    const nameRectangle = document.getElementById('name-rectangle').innerText;
    const rectangleW = document.getElementById('input-field-w-rectangle').value;
    const rectangleI = document.getElementById('input-field-i-rectangle').value;
    const rectangleWInner = document.getElementById('rectangle-w-inner');
    const rectangleIInner= document.getElementById('rectangle-i-inner');
    rectangleWInner.innerText = rectangleW;
    rectangleIInner.innerText = rectangleI; 
    const total = parseFloat(rectangleW) * parseFloat(rectangleI);
    addInnerElement('table-container', number, nameRectangle, total);
    if(typeof triangleB !== 'number' && triangleH !== 'number'){
        alert('Please give valid number')
    }

    
});
function getInnerElement(titleId, element1, element2){
    const titleElement = document.getElementById('name-rectangle').innerText;
    const firstElement = document.getElementById('rectangle-w-inner');
    const secondElement = document.getElementById('rectangle-i-inner');
};
function addInnerElement(containerId, number, name, total){
    const container = document.getElementById(containerId);
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
    <td>${total}</td>
    
    `;
    container.appendChild(tr);
};

