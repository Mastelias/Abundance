let cCounter = 0 , fCounter = 0 , sCounter = 0, eCounter = 0;
let weight = 1;

let finalTab = "";
let userName = "";
let email = "";
let initializer= 0;
let questions = document.getElementsByClassName("question-box");
let tabs = document.getElementsByClassName("question-wrapper");
let tab_index = -1;
let next_tab;


function GoToNextTab()
{
    tab_index++;
    next_tab = tabs[tab_index]; 
    LoadNextTab();
}

function loadNextTab()
{
    // Load next tab by using the next_tab variable


}


initialize();

function initialize_radio_inputs()
{
    for (var i=0; i <questions.length; i++) {
        var fInput = document.getElementsByClassName("Radio-F")
        var buttonclick = fInput[i];
    
        buttonclick.onclick = function() {
            raiseFounder()
        };
    }
    
    for (var j=0; j <questions.length; j++) {
        var sInput = document.getElementsByClassName("Radio-S")
        var buttonclick = sInput[j];
        buttonclick.onclick = function() {
            raiseSocializer()
        };
    }
    
    for (var h=0; h < questions.length; h++) {
        var cInput = document.getElementsByClassName("Radio-C")
        var buttonclick = cInput[h];
        buttonclick.onclick = function() {
            raiseCoach()
        };
    }
    
    for (var k=0; k < questions.length; k++) {
        var eInput = document.getElementsByClassName("Radio-E")
        var buttonclick = eInput[k];
        buttonclick.onclick = function() {
            raiseEngineer()
        };
    }
}

function hide_all_tabs()
{
    
    for(i =0;i<tabs.length;i++)
    {
       tabs[i].style.display = "none";
    }
}
function initialize()
{
    
    initialize_radio_inputs();
    hide_all_tabs();
    
}

// The loop that takes each Radio button and gives a score Onclick 


    
  

// hidden
//fInput.setAttribute("onclick", 'raiseFounder()');
//cInput.setAttribute("onclick",'raiseCreator()');
//sInput.setAttribute("onclick",'raiseSocializer()');
//eInput.setAttribute("onclick",'raiseEngineer()');
    






      
    

// Write Adds score to the personality


function raiseFounder()
{
    fCounter += weight;
}

function raiseCoach()
{
    cCounter += weight;
}

function raiseSocializer()
{
    sCounter += weight;
}

function raiseEngineer()
{
    eCounter += weight;
}





// Final calculate score
function CalculateAndLoadFinalPage()
{
    if(fCounter > cCounter && fCounter > sCounter && fCounter > eCounter )
    {
        finalTab = "F";
        window.location="http://www.google.com"
    }
    // Complete this 
    else if (cCounter > fCounter && cCounter > sCounter && cCounter > eCounter )
    {
        finalTab = "C";
        goToFinalTab();
    }
//Complete
    else if(eCounter > fCounter && eCounter > sCounter && eCounter > cCounter )
    {
        finalTab = "E";
        goToFinalTab();
    }

    else
    {
        finalTab = "S";
        goToFinalTab();
    }
}


function goToFinalTab()
{
    // load finalTab;
    let element = document.getElementById(finalTab);
    element.removeAttribute("class","hide");
        
}


