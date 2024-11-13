const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
let ispainting = false

let startX;
let startY;

canvas.width=window.innerWidth
canvas.height=window.innerHeight

canvas.addEventListener('mousedown',(e)=>{
    ispainting=true
    startX=e.clientX
    startY=e.clientY
})

canvas.addEventListener('mouseup',(e)=>{
    ispainting=false
    ctx.stroke()
    ctx.beginPath()
})

canvas.addEventListener('mousemove',(e)=>{
    if(ispainting==true){
        ctx.lineWidth=20
        ctx.linecap='round'
        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
    }else{
        return;
    }
})