let contentDiv = document.getElementById('content');
let bodytag = document.body.style.backgroundImage;

show();
function show() {
    let html = ` 
   
<div class="bg-img">
<button onclick="">Oprett bruker</button>
<button onclick="loggInnKnapp()" class="active" id="loggInn">Logg inn</button>
    
        <div class="wrapper">
            <input type="text" class="input"placeholder="Søk her i DiscProShop?">
                <div class="searchbtn"><i class="fas fa-search"></i></div>
                </div>
                
            
</div>

<button class="handlekurven" onclick="toggleHandleKurv()"><i class="fa fa-shopping-cart"></i></button>
 <div style="color: white;"> ${htmlForHandlekurv()}</div>
 <nav class="navbar">
 <br>
 <br>
 <br>
 <br>

         <div class="max-width">
             <ul class="menu">
                 <li><a href="Forsiden" class="menu-btn">Forsiden</a></li>
                 <li><a href="Disker" class="menu-btn">Disker</a></li>
                 <li><a href="Om Sekker" class="menu-btn">Sekker</a></li>
                 <li><a href="Tilbehør" class="menu-btn">Tilbehør</a></li>
                 <li><a href="#Kurs" class="menu-btn">Kurs</a></li>
                 <li><a href="Nyheter" class="menu-btn">Nyheter</a></li>
             </ul>
             
         </div>
 </nav>
 




`;
    for (let i = 0; i < model.disker.length; i++) {
        html += `
        <div class="card" id="${i}">
        <img src="${model.disker[i].img}">
        
        <div class="title">Signatur<br>${model.disker[i].signatur}</div>
        <br>
        <div class="title">
            <label class="title">Pris: ${model.disker[i].pris}</label>
                    <br>
            <label class="title">På Lager : ${model.disker[i].påLager} </label>

            </div>
            <br>
            <button class="btnHandle" onclick="addToCartButtons(${i})">Legg til handlekurv</button>
            </div>

        `;


    }
    contentDiv.innerHTML = html;






}
function navBar() {
    let html = '';
    for (let i = 0; i < model.navbar.length; i++) {
        html += `
        <li><a href="${model.navbar[i].href}" class="user">${model.navbar[i].knappNavn}</a></li>
       `;
    }
    return html
}


// function addToCartButtons(index) {
//     model.disker[index].antall++ * model.disker[index].pris;

// }
function toggleHandleKurv(){
   model.visHandlekurv = !model.visHandlekurv;
//    if(model.handlekurvModal == 'none'){
//        model.handlekurvModal = 'block'
//    }
//    else {
//        model.handlekurvModal = 'none'
//    }
  
   show()
}

// function visHandlekurv() {
   
//     let html = '';
//     let sum = 0;
//     for (let i = 0; i < model.disker.length; i++) {
//         let disk = model.disker[i]
//         if (disk.antall != '') {
//             html += `<br>
//             Navn: ${disk.navn} <br>
//             Antall: ${disk.antall}<br>
//             Pris: ${disk.pris}
//             <button class="deleteBtn" onclick="delete(${i})">x</button>
//             `;
//             sum += disk.antall * disk.pris;
//         }

//     }
//     model.handlekurv = `${html}<br>
//     sum:${sum}kr
//     `;
//     return model.handlekurv;
    
// }

function htmlForHandlekurv(){
    let html = '';
    let sum = 0;
    if(!model.visHandlekurv == true) return "";
    if(model.visHandlekurv == true) {

        for (let i = 0; i < model.disker.length; i++) {
            let disk = model.disker[i]
            if (disk.antall != '') {
                html += `<br>
                Navn: ${disk.navn} <br>
             
                Pris: ${disk.pris}
                <button class="itemX" onclick="removeItem(${i})">Slett</button>
                <br>
      
               
                

                
                <p>Antall:${disk.antall}</p>
                <input type="number" id="changeCartAmount" oninput="model.inputs.antall = this.value" placeholder="Endre antall">
                    <button onclick="changeAmountCart(${i})">Endre</button>

                
                `;
                sum += disk.antall * disk.pris;
            }
            //*changeAmountCart();
             
        }
        model.handlekurv = `${html}<br>
        sum:${sum}kr
        `;
         
    }
    return model.handlekurv;
}

