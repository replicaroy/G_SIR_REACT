const sidebarData1={
    header:"Dashboard Data",
    contact:[
        {
            key:"profile",
            label:"Profile"
        },
        {
            key:"about",
            label:"About"
        },
        {
            key:"contact",
            label:"Contact"
        },
        {
            key:"help",
            label:"Help"
        }
    ],
    image:"https://media.istockphoto.com/id/2149589805/photo/abstract-finance-technology-concept.jpg?s=1024x1024&w=is&k=20&c=ZW_zcYUx0tNloJBxnDoIozUU8U0aBdcYMwdy5BRAbI4="
}
function displayDashbordData(){
    const dasbord=document.createElement("div")
    dasbord.className="dashbord_div"
    const h1=document.createElement("h1")
    h1.textContent=sidebarData1.header
    dasbord.append(h1)
    const div=document.createElement("div")
        div.className="dash_btn_div"
    sidebarData1.contact.forEach(ele=>{
        const button=document.createElement("button")
        button.textContent=ele.label
        button.className="dashbord_page_btn"
        button.addEventListener("click",()=>handelsidebarBtnClick(ele.key))
        div.appendChild(button)
        dasbord.appendChild(div)
    })
    replaceChildElement(dasbord)
    // console.log("dashbord");
}