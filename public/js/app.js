console.log('dino app')
const button = document.querySelector('#btnLoad').addEventListener('click',()=>{
getDinoName()
getDinoImage()
})


async function getDinoName(){
    const response = await fetch('/name')
    const data = await response.json()
    document.getElementById('dinoName').textContent=data[0].join(' ')
    console.log(data[0].join(' '))
}




async function getDinoImage(){
    const response = await fetch('/image')
    const data = await response.json()
    const randomIndex = Math.floor(Math.random()*10)

    const imageUrl =data.value[randomIndex].thumbnailUrl
    document.getElementById('dinoImage').innerHTML=`<img src=${imageUrl}/>`
    console.log(imageUrl)
}

getDinoName()