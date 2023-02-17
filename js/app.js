let serial = 0;
// calcultate triangle button

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

    
});
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

