
function clic(){
    fetch('Scripts/Frases.txt')
    .then(response=>response.text())
    .then(textString=>{
        Array =[];
        x= getrandom()
        Array= textString.split("-");
        document.getElementById("Boton").innerText = Array[x];
    })
    
}
function getrandom(){
    x=(Math.random() * (473 - 0) + 0);
    x= Math.floor(x)
    return (x);
}