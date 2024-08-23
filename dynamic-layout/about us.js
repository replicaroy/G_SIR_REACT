let arr = {
    photo:[
      {
      image: "https://5.imimg.com/data5/VW/WV/MY-61397565/headphone-blue_1.jpg",
      h3: "Model Name/Number: Art No 1000209 EPOS Adapt 360 Headset, Black",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?"
    },
    {
      image: "https://images-cdn.ubuy.co.in/633aba4e38322a5829184559-bluetooth-headphones-over-ear-kvidio-55.jpg",
      h3: "Model Name/Number: Art No 1000209 EPOS Adapt 360 Headset, Black",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?"
    },
    {
      image: "https://images-cdn.ubuy.co.in/633aab53d65bf74a187aa1ce-mpow-kids-headphones-kid-headphones.jpg",
      h3: "Model Name/Number: Art No 1000209 EPOS Adapt 360 Headset, Black",
      p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?"
    },
    {
      image: "https://www.zdnet.com/a/img/resize/788ffc4496514707871fe33e52df8bf61e9bc295/2023/02/22/6b56b3af-c627-48d1-bbf3-e8e701ac7c0f/sonyoverfinished.jpg?auto=webp&fit=crop&height=900&width=1200",
      h3: "Model Name/Number: Art No 1000209 EPOS Adapt 360 Headset, Black",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad vero?"
    }]
  }
    function displayAboutData() {
      const cards_div=document.createElement("div")
      cards_div.className="cards"
      
      arr.photo.forEach((user)=>{
        let div=document.createElement("div")
      div.classList.add("card_container")
        let image=document.createElement("img")
        image.src=user.image
        let h3=document.createElement("h3")
        h3.innerText=user.h3
        let p=document.createElement("p")
        p.innerText=user.p
        let btn=document.createElement("button")
        btn.innerText="Add to cart"
        
        div.append(image,h3,p,btn)
        cards_div.appendChild(div)
        replaceChildElement(cards_div)
      })
    
    }