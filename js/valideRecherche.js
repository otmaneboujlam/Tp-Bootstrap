const valideRecherche = () => {
    let recherche = document.querySelector("#recherche");
    let myModal = new bootstrap.Modal("#myModal");
    let formulaire = document.querySelector("#formRecherche");
    if(!recherche.value){
       myModal.show();
    }
    else {
        formulaire.submit();
    }
}