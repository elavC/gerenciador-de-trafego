const selecionarEmpresa = document.getElementById('selecionarEmpresa');

const empresaOne = document.getElementById('empresaOne');
const empresaTwo = document.getElementById('empresaTwo');
const empresaThree = document.getElementById('empresaThree');
const empresaFour = document.getElementById('empresaFour');


const sectionMain = document.getElementById('sectionMain');

const empresaOneContent = document.getElementById('empresaOneContent');
const empresaTwoContent = document.getElementById('empresaTwoContent');
const empresaThreeContent = document.getElementById('empresaThreeContent');
const empresaFourContent = document.getElementById('empresaFourContent');

function transitionSections() {
let empresaOneShow = selecionarEmpresa.options[selecionarEmpresa.selectedIndex].value;
let empresaTwoShow = selecionarEmpresa.options[selecionarEmpresa.selectedIndex].value;
let empresaThreeShow = selecionarEmpresa.options[selecionarEmpresa.selectedIndex].value;
let empresaFourShow = selecionarEmpresa.options[selecionarEmpresa.selectedIndex].value;


    if(empresaOneShow === "empresaOne") {
        empresaOneContent.style.display = "block";
        empresaTwoContent.style.display = "none";
        empresaThreeContent.style.display = "none";
        empresaFourContent.style.display = "none";
        sectionMain.style.display = "none";
    };

    if(empresaTwoShow === "empresaTwo") {
        empresaTwoContent.style.display = "block";
        empresaOneContent.style.display = "none";
        empresaThreeContent.style.display = "none";
        empresaFourContent.style.display = "none";
        sectionMain.style.display = "none";
    };
    
    if(empresaThreeShow === "empresaThree") {
        empresaThreeContent.style.display = "block";
        empresaOneContent.style.display = "none";
        empresaTwoContent.style.display = "none";
        empresaFourContent.style.display = "none";
        sectionMain.style.display = "none";
    };

    if(empresaFourShow === "empresaFour") {
        empresaFourContent.style.display = "block";
        empresaTwoContent.style.display = "none";
        empresaOneContent.style.display = "none";
        empresaThreeContent.style.display = "none";
        sectionMain.style.display = "none";
    };
};


selecionarEmpresa.addEventListener('change', transitionSections);

