//This runs when the the HTML page has finished loading 
document.addEventListener("DOMContentLoaded",()=>{
    console.log("JavaScript is connected!");
});

document.addEventListener("DOMContentLoaded",()=>{
    //Select the button and detail area
    const btn = document.querySelector(".toggle-details");
    const details=document.querySelector("#proj1-details");

    //If either element is missing,stop (prevents errors)
    if(!btn||!details)return;

    //Run code when the button is clicked
    btn.addEventListener("click", ()=>{
        //check whether the details are hidden
        const isHidden = details.hasAttribute("hidden");

        if(isHidden){
            //Show details
            details.removeAttribute("hidden");
            btn.textContent="Hide details";
            btn.setAttribute("aria-expanded","true");
        }else{
            //Hide details
            details.setAttribute("hidden","");
            btn.textContent="Show details";
            btn.setAttribute("aria-expanded","false");

        }
    });
});

document.addEventListener("DOMContentLoaded",function(){
    console.log("The page is ready, and the DOM is loaded.");
});

const statusMessage = document.querySelector("#status");
statusMessage.textContent="JavaScript is active and working.";

const button= document.querySelector("#toggleButton");
const details2=document.querySelector("#details2");

button.addEventListener("click",function(){
    const isHidden=details2.hasAttribute("hidden");

    if(isHidden){
        details2.removeAttribute("hidden");
        button.textContent="Hide details";
    }else{
        details2.setAttribute("hidden","");
        button.textContent="Show details";
    }
});

const message=document.querySelector("#message");
message.textContent+="(This message was enhanced with JavaScript.)";

const alertButton=document.querySelector("#alertButton");
const alertMessage=document.querySelector("#alertMessage");

alertButton.addEventListener("click",function(){
    alertMessage.textContent="Status updated successfully.";
});

const button1 = document.querySelector("#toggleSectionBtn");
const section=document.querySelector("#extraSection");
button1.addEventListener("click",()=>{
    section.toggleAttribute("hidden");
});

document.addEventListener("DOMContentLoaded",()=>{
const button2 = document.querySelector("#statusButton");
const statusMessage=document.querySelector("#statusMessage");
 if (!button2||!statusMessage)return;
 

button2.addEventListener("click",()=>{
    statusMessage.textContent="Status:Updated successfully.";
  });
});
