// Search Menu
let searchMenu = document.getElementById("hd-search-menu");
let searchDropdown = document.getElementById("search-dropdown");
let srcMenuOpenButton = document.getElementById("src-menu-open-btn");

srcMenuOpenButton.addEventListener('click', function(){
    searchMenu.classList.toggle("search-active");

    if(searchDropdown.classList.contains("fa-caret-down")){
        searchDropdown.classList.remove("fa-caret-down");
        searchDropdown.classList.add("fa-caret-up");
    } else{
        searchDropdown.classList.remove("fa-caret-up");
        searchDropdown.classList.add("fa-caret-down");
    }
});


// --------------------------------------------------------------


// Mobile Category
let categoryMobil = document.getElementById("cat-mbl");
let categoryDropdown = document.getElementById("cat-dropdown");
let catMblButton = document.getElementById("cat-mbl-btn");

catMblButton.addEventListener('click', function(){
    categoryMobil.classList.toggle("cat-mbl-active");

    if(categoryDropdown.classList.contains("fa-caret-down")){
        categoryDropdown.classList.remove("fa-caret-down");
        categoryDropdown.classList.add("fa-caret-up");
    } else{
        categoryDropdown.classList.remove("fa-caret-up");
        categoryDropdown.classList.add("fa-caret-down");
    }
});


// ---------------------------------------------------------------


// Other Sites
let otherSites = document.getElementById("other-sites");

window.addEventListener("scroll", function () {  
    if (window.innerWidth <= 768) {
        if (window.scrollY >= 20){
            otherSites.classList.add("other-active");
        } else {
            otherSites.classList.remove("other-active")
        }
    }
});