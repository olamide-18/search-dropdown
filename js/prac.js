let names =['olamide', 'korede', 'eniola', 'mummy'];

let dropagain = document.getElementById("dropagain");

function drop() {
    dropagain.style.display="inline-block";
  
}
function select(egbebi){
    let dropdown = document.getElementById("dropdown")
    dropdown.value= names[egbebi];
}