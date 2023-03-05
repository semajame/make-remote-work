const features = document.querySelector(".features");
const featurebutton = document.querySelector(".features-box");
const featurearrow = document.querySelector(".feature-arrow");

const company = document.querySelector(".company");
const companybutton = document.querySelector(".company-box");
const companyarrow = document.querySelector(".company-arrow")

const menu = document.querySelector(".menu");

features.addEventListener("click", () => {
    featurebutton.classList.toggle("active");
    featurearrow.classList.toggle("active");
    featurearrow.classList.toggle("arrow-transform");

    if(company || companybutton === "active"){
        companybutton.classList.remove("active");
        company.classList.remove("active");
        companyarrow.classList.remove("company-arrow-transform");
    }
}); 

company.addEventListener("click", () => {
    
    companybutton.classList.toggle("active");
    companyarrow.classList.toggle("active");
    companyarrow.classList.toggle("company-arrow-transform");

    if(features || featurebutton === "active"){
        features.classList.remove("active");
        featurebutton.classList.remove("active");
        featurearrow.classList.remove("arrow-transform");
    }
})

menu.onclick = function(){
    const button = document.querySelector("nav ul");

    button.classList.toggle("active");
}