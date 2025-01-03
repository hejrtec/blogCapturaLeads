function updateinput(event) {
    event.preventDefault();
    
    let name=document.getElementById('nome').value;
    let email=document.getElementById('email').value;

    if(nome== '' |email== '') 
        alert("Por favor preencha os valores")
        return;
    }

    
document.getElementById('nome').addEventListener('click', updateinput);