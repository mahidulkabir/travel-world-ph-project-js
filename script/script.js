const addBtnGroup = document.getElementsByClassName('add-event');
let count = 0;

for (let addBtn of addBtnGroup){
    addBtn.addEventListener('click', function(){
        count++;
    setInnerTextById('eventIncrease', count);
    });
}