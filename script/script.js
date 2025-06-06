const addBtnGroup = document.getElementsByClassName('add-event');
let count = 0;

for (let addBtn of addBtnGroup){
    addBtn.addEventListener('click', function(e){
        count++;
    setInnerTextById('eventIncrease', count);
    const price = e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerText;

    const placeName = e.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
    
    const selectedContainer = document.getElementById('selected-Container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement ('p');
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);

        // adding init cost and total cost 
        function totalCostFunction(id){
    
            let costFunction = document.getElementById(id).innerText;
            let convertedCostFunction = parseInt(costFunction);
            let sumFunction = convertedCostFunction + parseInt(price);
            return sumFunction;
        }
           setInnerTextById('init-cost', totalCostFunction('init-cost'));
           setInnerTextById('final-cost', document.getElementById('init-cost').innerText);
                
    });
}

function totalCostFunction(category){
    const totalCost = document.getElementById('final-cost').innerText;
    const convertedText = parseInt(totalCost);

    if(category === 'bus'){
        setInnerTextById('final-cost', convertedText + 200);
    } 
    else if(category === 'train'){
        setInnerTextById('final-cost', convertedText - 100);
    } 
    if(category === 'air'){
        setInnerTextById('final-cost', convertedText + 300);
    } 
}