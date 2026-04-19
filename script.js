let inputEl=document.getElementById("mail-input")
let inputBtn=document.getElementById("input-btn")
let errorMsg=document.getElementById("errormsg")
let doneMsg=document.getElementById("donemsg")
inputBtn.addEventListener("click",function(){
    let value=inputEl.value
    let atIndex=value.indexOf("@")
    let dotIndex=value.indexOf(".")
    if(inputEl.value==""){
        errorMsg.textContent="Whoops! It looks like you forgot to add your email"
        inputEl.classList.add("error")
    }else if  (atIndex === -1 || 
        dotIndex === -1 ||               
        atIndex === 0 ||             
        dotIndex < atIndex ||
        dotIndex === value.length - 1)    {
        errorMsg.textContent="Please provide a valid email address"
        inputEl.classList.add("error")
    }else{
        doneMsg.textContent="we'll notify you soon"
        inputEl.classList.remove("error")
    }
})