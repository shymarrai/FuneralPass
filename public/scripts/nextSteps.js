var start = document.getElementById('form-step-questions-start')
var services = document.getElementById('form-step-questions-services')
var contractor = document.getElementById('form-step-questions-contractor')
var death = document.getElementById('form-step-questions-death')

var menuStart = document.querySelector(".menu-container .step-indicator:nth-of-type(1)")
var menuServices = document.querySelector(".menu-container .step-indicator:nth-of-type(2)")
var menuContractor = document.querySelector(".menu-container .step-indicator:nth-of-type(3)")
var menuDetah = document.querySelector(".menu-container .step-indicator:nth-of-type(4)")

var barOne = document.querySelector(".bar-steps hr:nth-of-type(1)")
var barTwo = document.querySelector(".bar-steps hr:nth-of-type(2)")
var barThree = document.querySelector(".bar-steps hr:nth-of-type(3)")
var barFour = document.querySelector(".bar-steps hr:nth-of-type(4)")



function firstStep(){
    menuStart.classList.add('shadow-drop-2-center');
    menuServices.classList.remove('shadow-drop-2-center');
    menuContractor.classList.remove('shadow-drop-2-center');
    menuDetah.classList.remove('shadow-drop-2-center');


    barOne.classList.add("completed-step")
    barTwo.classList.remove("completed-step")
    barThree.classList.remove("completed-step")
    barFour.classList.remove("completed-step")

    start.style.display = "inherit"
    start.style.visibility = "visible"   

    services.style.display = "none"
    services.style.visibility = "hidden"

    contractor.style.display = "none"
    contractor.style.visibility = "hidden"

    death.style.display = "none"
    death.style.visibility = "hidden"
}

function nextSeccondStep(){
    menuStart.classList.add('shadow-drop-2-center');
    menuServices.classList.add('shadow-drop-2-center');
    menuContractor.classList.remove('shadow-drop-2-center');
    menuDetah.classList.remove('shadow-drop-2-center');

    
    barOne.classList.add("completed-step")
    barTwo.classList.add("completed-step")
    barThree.classList.remove("completed-step")
    barFour.classList.remove("completed-step")

    start.style.display = "none"
    start.style.visibility = "hidden"   
    
    services.style.display = "inherit"
    services.style.visibility = "visible"

    contractor.style.display = "none"
    contractor.style.visibility = "hidden"

    death.style.display = "none"
    death.style.visibility = "hidden"

}
function nextThirdStep(){
    menuStart.classList.add('shadow-drop-2-center');
    menuServices.classList.add('shadow-drop-2-center');
    menuContractor.classList.add('shadow-drop-2-center');
    menuDetah.classList.remove('shadow-drop-2-center');

    barOne.classList.add("completed-step")
    barTwo.classList.add("completed-step")
    barThree.classList.add("completed-step")
    barFour.classList.remove("completed-step")

    start.style.display = "none"
    start.style.visibility = "hidden"   
    
    services.style.display = "none"
    services.style.visibility = "hidden"

    contractor.style.display = "inherit"
    contractor.style.visibility = "visible"

    death.style.display = "none"
    death.style.visibility = "hidden"

}
function nextFourthStep(){
    menuStart.classList.add('shadow-drop-2-center');
    menuServices.classList.add('shadow-drop-2-center');
    menuContractor.classList.add('shadow-drop-2-center');
    menuDetah.classList.add('shadow-drop-2-center');

    barOne.classList.add("completed-step")
    barTwo.classList.add("completed-step")
    barThree.classList.add("completed-step")
    barFour.classList.add("completed-step")

    start.style.display = "none"
    start.style.visibility = "hidden"   
    
    services.style.display = "none"
    services.style.visibility = "hidden"

    contractor.style.display = "none"
    contractor.style.visibility = "hidden"

    death.style.display = "inherit"
    death.style.visibility = "visible"

}
function nextFifthStep(){

}

function HideContainers(...rest){


}



firstStep()