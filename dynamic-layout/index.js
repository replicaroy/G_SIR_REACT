const sidebarData={
    header:"Welcome To Dashbord",
    contact:[
        {
            key:"dashbord",
            label:"Dashboard"
        },
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
    ]
}
const sidebar=document.getElementById("side_bar")
function displaysidebarData(){
    const h2=document.createElement("h2")
    h2.textContent=sidebarData.header
    sidebar.append(h2)
}
displaysidebarData()
function displaysidebarButtons(){
    const ul=document.createElement("ul")
    sidebarData.contact.forEach(btn=>{
        let li=document.createElement("li")
        li.id=btn.key
        let button=document.createElement("button")
        button.id=`${btn.key}_btn`
        button.className="dashbord_buttons"
        button.textContent=btn.label
        button.addEventListener("click",()=>handelsidebarBtnClick(btn.key))
        li.append(button)
        ul.append(li)
    })
    sidebar.append(ul)
}
displaysidebarButtons()
// function urlChange(key){
//     window.location.replace(key)
// }
function handelsidebarBtnClick(key){
    
    const pagesObj={
        dashbord:displayDashbordData,
        profile:displayProfileData,
        about:displayAboutData,
        contact:displayContactData,
        help:displayHelpData
    }
 return pagesObj[key]()

}
const main_content=document.getElementById("main_content")
function getChildElement(){
    return main_content.firstChild
}
function replaceChildElement(element){
    const childEle=getChildElement();
    if(childEle){
        main_content.replaceChild(element,childEle)
    }else{
        main_content.appendChild(element)
    }
}
window.onload=(()=>handelsidebarBtnClick("dashbord"))