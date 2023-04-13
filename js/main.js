let building = ["house", "company", "building", "shop"];
let dropdown = document.getElementById("dropdown");
let dropdownOption = document.getElementById("dropdown-options");

function showDropdow(){
    dropdownOption.style.display = "inline-block";
}

function selectOption(index){
    let dropdownSearch = document.getElementById("dropdown-input");
    dropdownSearch.value = building[index];
}

function closeDropdown(event){

    let dropdownCoOrdinates = {
        dropdownTop : dropdown.getBoundingClientRect().top,
        dropdownRight : dropdown.getBoundingClientRect().right,
        dropdownBottom : dropdown.getBoundingClientRect().bottom,
        dropdownleft : dropdown.getBoundingClientRect().left,
    }

    if(event.clientX < dropdownCoOrdinates.dropdownleft ||
        event.clientX > dropdownCoOrdinates.dropdownRight ||
         event.clientY < dropdownCoOrdinates.dropdownTop || 
         event.clientY > dropdownCoOrdinates.dropdownBottom){
        dropdownOption.style.display = "none"; 
    }

}


window.addEventListener("click", closeDropdown);

// let user = {
//     name : "Olamide",
//     language : "English",
// }

// console.log(user.language);