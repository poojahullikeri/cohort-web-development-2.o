var arr = [ 
    {dp:"https://mir-s3-cdn-cf.behance.net/projects/404/8e8806236178313.Y3JvcCwyNTUwLDE5OTQsMCw2NTA.jpg ",
        story:"https://miro.medium.com/1*w4MhPHkH-c_EAnsRXeB68Q.jpeg"},
    {dp:"https://alchetron.com/cdn/chhota-bheem-f30df952-de68-4d37-a682-9a415828dd9-resize-750.jpg",
        story:"https://i.pinimg.com/originals/43/77/2b/43772b1560c8bff1c16289b8d22e73e7.jpg"},
    {dp:"https://miro.medium.com/v2/resize:fit:736/1*o-MqG0em4YR6jkyUj7exrA.jpeg",
        story:"https://play-lh.googleusercontent.com/NiSFTgI1pGeWbMJRwHDFk5r93laHboV0vmcCB2UEF0Q8iaFoWMCTLAQpsF9ehaV6QQ8"},
    {dp:"https://www.partysuppliesindia.com/cdn/shop/products/a2_40_e365b036-470b-4ad3-89f2-085f1d0fd1a0.jpg?v=1735573930&width=3840",
        story:"https://www.partysuppliesindia.com/cdn/shop/products/a2_34.jpg?v=1735573948&width=3840"},
]
var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter +=` <div class="story">
    <img id = "${idx}" src="${elem.dp}" alt="">
</div>`
            
    
    
})
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
     document.querySelector("#full-screen").style.display = "block"
    // var value=(arr[dets.target.id].story)
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
})


