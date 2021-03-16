    document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let argent, solde, retrait, deposer, affiche, retirer, warning
    warning = document.querySelector(".warning");
    argent = document.querySelector(".euro")
    retrait = document.querySelector(".enlever")
    deposer = document.querySelector(".mettre")
    affiche = document.querySelector("ul")

    let pose =()=>{
    solde = 1000
    affiche.innerHTML=`vous avez ${solde}€`
    }
let prendre =()=>{
    retirer = Number(prompt("faites votre retrer"))
    
    if(100 < retirer || retirer < 20 || !retirer){
        alert("vous devez retirer plus que 20 et moins que 100, remplir les champ et ne pas mettre de caractere")
        
    }
    
    
    else{ let r = confirm("voulez vous confirmer ?")
    if (r == true) {
       
        solde = solde-retirer
    affiche.innerHTML=`vous avez retirer ${retirer}<br> Merci de votre visite </br><br>votre solde maintenant est : ${solde} </br>`}
    else {
        warning.style.display = "block";
            warning.textContent = "vous avez annulé l'operation!";

        
          }
    }
}
retrait.addEventListener("click",()=>{
    prendre()

})
argent.addEventListener("click",()=>{
    pose()

})

});