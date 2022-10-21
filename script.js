console.log("Script.js file is added")
let flash = document.getElementById("flash")
let lightning = document.getElementById("lightning")
let lightning1 = document.getElementById("lightning-1")
let btn = document.getElementById("btn")
let box = document.getElementById("box")
let btn1 = document.getElementById("btn-1")
let power = document.getElementById("power")
let click = document.getElementById("click")

flash.style.removeProperty('animation')
box.style.removeProperty('animation')
flash.style.setProperty('display', 'none')
lightning.style.setProperty('display', 'none')
btn.style.setProperty('display', 'none')
box.style.setProperty('display', 'none')
lightning1.style.setProperty('display', 'none')
power.style.setProperty('display', 'none')
click.style.setProperty('display', 'none')




btn1.addEventListener('click', ()=>{
    btn1.style.setProperty('display', 'none')
    lightning1.style.setProperty('display', 'block')
    setTimeout(()=>{
        lightning1.style.setProperty('display', 'none')
        flash.style.removeProperty('display')
        lightning.style.setProperty('display', 'block')
        btn.style.setProperty('display', 'block')
        box.style.setProperty('display', 'block')
        power.style.setProperty('display', 'block')
        click.style.setProperty('display', 'block')
        document.getElementById('body').style.setProperty('background-color', '#17191d')
    }, 300)
})

flash.addEventListener('click', ()=> {
    console.log("I am flash")
    // flash.classList.remove('flash-run')
    flash.style.setProperty('animation', 'animate2 1.5s linear 1')
    lightning.style.setProperty('display', 'none')
    setTimeout(()=>{
        flash.style.animation = null
        lightning.style.display = 'block'
    },1000)
})

btn.addEventListener('click', ()=> {
    console.log("I am flash")
    box.style.setProperty('animation', 'animate 1.5s linear 1')
    setTimeout(()=>{
        box.style.animation = null
    },1500)
})
