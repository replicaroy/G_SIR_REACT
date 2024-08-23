const contactData={
    name:"Contact Us",
    formFields:[
        {
            id:"name",
            label:"Name",
            inputType:"input",
            type:"text",
            name:"name"
        },
        {
            id:"email",
            label:"Email",
            inputType:"input",
            type:"email",
            name:"email"
            },
            {
                id:"mobile",
                label:"Mobile",
                inputType:"input",
                type:"tel",
                name:"mobile"
                },
                {
                    id:"message",
                    label:"Message",
                    inputType:"textarea",
                    name:"message"
                    }

    ]
}
function displayContactData(){
   const contactDiv=document.createElement("div")
   contactDiv.innerHTML=`<h2>${contactData.name}</h2>`
   contactDiv.className="contactDiv"
   const form=document.createElement("form")
   const nameDiv=document.createElement("div")
   nameDiv.className="nameDiv"
   const btn=document.createElement("button")
    btn.innerText="Submit"
    btn.id="btn"
   contactData.formFields.forEach((field)=>{
    const label=document.createElement("label")
    label.textContent=field.label
    const input=document.createElement(field.inputType)
    input.type=field.type
    input.name = field.name
    input.addEventListener("change",handelOnchange)
    form.append(label,input,btn)
    nameDiv.appendChild(form)
   })
   contactDiv.append(nameDiv)
   replaceChildElement(contactDiv)
}
function handelOnchange(e){
   console.log(e);
   
}