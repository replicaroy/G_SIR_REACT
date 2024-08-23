const profile = {
  Persnol:{
  Name: "Mukesh Kumar Jat",
  email: "mjatsuper@gmle.com",
  phoneNumber: "8441925100"
  },
  Address:{
    City:"Shahpura",
    Distt:"jaipur",
    State:"Rajasthan",
    Pincode: "303103"
  },
  Education:{
    Qualification:"B.E",
    College:"MITS",
    Percentage: "85.5"
  },
  WorkExperience:{
    Company:"Infosys",
    Designation:"Software Engineer",
    Experience:"2 Years"
    },
    Skills:{
      Language:"Java,Python",
      Tools:"Eclipse,PyCharm",
      OperatingSystem:"Windows,Linux"
      }
};
function displayProfileData() {
  const div_profile=document.createElement("div")
  div_profile.className="div_profile"
  const profile_div = document.createElement("div");
  profile_div.className = "profile_div";
  const image = document.createElement("img");
  image.src = "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaIFgP-o1u9g-V4YGHUvRD6nZN9saEUif-IwP7JYGyoDQE&oe=66CE789F&_nc_sid=5e03e0&_nc_cat=110";
  div_profile.appendChild(image);
  Object.keys(profile).forEach((ele) => {
    const value=profile[ele]
    const div = document.createElement("div");
    div.className = "profile_div1";
    const h4=document.createElement("h4")
    h4.textContent=ele
    div.appendChild(h4)
    Object.keys(value).forEach(key=>{
      const div1=document.createElement("div")
      div1.className="details1"
      const p=document.createElement("p")
      p.textContent=key+" : "+value[key];
      div1.appendChild(p);
      div.appendChild(div1)
      
    })
    profile_div.appendChild(div);
    div_profile.appendChild(profile_div)
  });
    replaceChildElement(div_profile);
}
