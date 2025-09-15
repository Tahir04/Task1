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