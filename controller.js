function addToCartButtons(index) {
    if(model.disker[index].påLager >= 1){
        model.disker[index].antall++ * model.disker[index].pris;
    }
    else { 
        model.feilmelding = 'er ikke på lager'
    }
    show()
    


}

function endreHandlekurv(i){
    let html = `
    <input type="text" oninput ="model.inputs.antall = this.value" value="${model.inputs.antall}" placeholder="Blad">
    </input><button onclick="changeAmount(${i})">Hvor er du ????</button>`
show();
}


 function changeAmountCart(index){
     if(model.inputs.antall <= model.disker[index].påLager){
        model.disker[index].antall = model.inputs.antall;
     }
     else {
         model.feilmelding = 'Velg mindre antall'

     }
    
   
    show();
    

}
function removeItem(index) {
    model.disker.splice(index, 1)
    show();
}




