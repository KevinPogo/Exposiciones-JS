document.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', function(event){
        if (event.target.id == 'btn1'){
            alert ('Haz dado clic en el botón 1');
        } else if (event.target.id == 'btn2'){
            alert ('Haz dado clic en el botón 2');
        } else if (event.target.id == 'btn3') {
            alert ('Haz dado clic en el botón 3');
        }
    });
});