const addBtnGroup = document.getElementsByClassName('add-event');
for (let addBtn of addBtnGroup){
    addBtn.addEventListener('click', function(){
        console.log('added clickable')
    });
}