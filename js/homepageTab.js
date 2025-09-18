// About Tabs 
const departamentsButton = document.getElementById("dprt");
const companysButton = document.getElementById("cmpy");
const aboutDepartament = document.getElementById("about-departaments");
const aboutCompany = document.getElementById("about-company");

departamentsButton.addEventListener('click', function () {  
    departamentsButton.classList.add("tabs-active");
    companysButton.classList.remove("tabs-active");

    aboutDepartament.classList.add("about-active");
    aboutCompany.classList.remove("about-active");
});

companysButton.addEventListener('click', function () {  
    companysButton.classList.add("tabs-active");
    departamentsButton.classList.remove("tabs-active");

    aboutDepartament.classList.remove("about-active");
    aboutCompany.classList.add("about-active");
});