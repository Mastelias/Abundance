let cCounter = 0 , fCounter = 0 , sCounter = 0, eCounter = 0;
let weight = 1;
let userName = "";
let email = "";
let tabIndex = 1;
let nextTabName = "Q1";
const founderURL = 'https://abundance-website.webflow.io/founder';
const socializerURL = 'https://abundance-website.webflow.io/socializer';
const coachURL = 'https://abundance-website.webflow.io/coach';
const engineerURL = 'https://abundance-website.webflow.io/engineer';
let allTabs = document.querySelectorAll('[role="tabpanel"]');

initialize();



function initialize()
{
    initializeRadioInputs();
}

function initializeRadioInputs()
{

    let inputs = document.getElementsByTagName("input");
    for(let i=0;i<inputs.length;i++) 
    {
        if(inputs[i].getAttribute("perso") == "F")
            inputs[i].setAttribute("onclick", "raiseFounder()");
        else if(inputs[i].getAttribute("perso") == "S")
            inputs[i].setAttribute("onclick",'raiseSocializer()');
        else if (inputs[i].getAttribute("perso") == "C")
            inputs[i].setAttribute("onclick",'raiseCoach()');
        else if(inputs[i].getAttribute("perso") == "E")
            inputs[i].setAttribute("onclick",'raiseEngineer()');
    }
}

function goToNextTab()
{
    if(allTabs.length == 0)
        allTabs = document.querySelectorAll('[role="tabpanel"]');
    hideCurrentTab();
    tabIndex++;
    if(tabIndex < 8)
        nextTabName = "Q" + tabIndex;
    else if(tabIndex == 8)
    {
        nextTabName = "finaltab"; 
        setTimeout(calculateResults, 2000);
    }
    loadNextTab();
}

function calculateResults()
{
    let resultPage = "";
    if(fCounter >= sCounter && fCounter >= eCounter && fCounter >= cCounter)
    {
        resultPage = founderURL;
    }
    else if(cCounter >= fCounter && cCounter >= eCounter && cCounter >= sCounter)
        resultPage = coachURL;
    else if(eCounter >= fCounter && eCounter >= sCounter && eCounter >= cCounter)
        resultPage = engineerURL;
    else if(sCounter >= fCounter && sCounter >= cCounter && sCounter >= eCounter)
        resultPage = socializerURL;

    window.location.href = resultPage;
}

function hideCurrentTab()
{
    let currentTab = getTab(nextTabName);
    currentTab.classList.remove("w--tab-active");
}

function loadNextTab()
{
    let nextTab = getTab(nextTabName);
    nextTab.classList.add("w--tab-active");
} 


function getTab(tabName)
{
    for(i =0;i<allTabs.length;i++)
    {
        if(allTabs[i].getAttribute("data-w-tab") == tabName)
            return allTabs[i];
    }
}


function raiseFounder()
{
    fCounter += weight;
    goToNextTab();
}

function raiseCoach()
{
    cCounter += weight;
    goToNextTab();
}

function raiseSocializer()
{
    sCounter += weight;
    goToNextTab();
}

function raiseEngineer()
{
    eCounter += weight;
    goToNextTab();
}
