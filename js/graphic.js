let canvas = document.getElementById('canvas_plot')
let ctx = canvas.getContext('2d')

let orangeG = [40, 45, 50, 50, 50, 55, 55, 65, 70, 70, 70, 75]
let greenG = [55, 60, 65, 65, 65, 70, 70, 80, 85, 85, 85, 90]
let whiteG = [70, 75, 75, 75, 75, 80, 75, 70, 75, 85, 85, 90]
let redG = [60, 65, 65, 70, 70, 75, 75, 85, 90, 90, 95, 95]

// сетка
const cvsWidth = canvas.clientWidth;
const cvsHeight = canvas.clientHeight;

const scaleX = 60
const scaleY = 20
const shiftNames = 5
const shiftNumber = 20

const maxWeigth = 120


const startAxisX = 40
const startAxisY = cvsHeight - 30

const months = ['янв', 'фев', 'мар', 'апр', 
                'май', 'июн', 'июл', 'авг',
                'сен', 'окт', 'ноя', 'дек']

const xAxis = Math.round(cvsWidth / scaleX / 2) * scaleX
const yAxis = Math.round(cvsHeight / scaleY / 2) * scaleY

let saveHeights = []

ctx.font = `${scaleX / 5}px Arial`
ctx.textAlign = 'center'
ctx.textBaseline = 'center'

ctx.beginPath()
    ctx.fillStyle = 'white'
    for (let i = scaleX, n = 0; n <= months.length ; i = i + scaleX, n++) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, cvsHeight - 35)
    }
    for (let i = 0, n = maxWeigth; n > 0; i = i + scaleY, n -= 10) {
        ctx.moveTo(40, i + 20);
        ctx.lineTo(cvsWidth + 35, i + 20)
    }
    ctx.strokeStyle = '#53535D'
    ctx.stroke()
ctx.closePath()

ctx.beginPath()
    ctx.fillStyle = 'white'
    for (let i = scaleX, n = 0; n <= months.length ; i = i + scaleX, n++) {
        ctx.moveTo(i, cvsHeight - 35);
        ctx.lineTo(i, cvsHeight - 25)
        ctx.fillText(months[n], i, cvsHeight - 10)
    }
    for (let i = 0, n = maxWeigth; n > 0; i = i + scaleY, n -= 10) {
        ctx.moveTo(35, i);
        ctx.lineTo(45, i)
        ctx.fillText(n, 15, i + 5)
        saveHeights[n] = i
        saveHeights[n - 5] = i + 10
    }
    ctx.strokeStyle = 'white'
    ctx.stroke()
ctx.closePath()

// оси

ctx.beginPath()
    ctx.strokeStyle = 'white'

    ctx.moveTo(40, 0)
    ctx.lineTo(startAxisX, startAxisY)

    ctx.moveTo(startAxisX, startAxisY)
    ctx.lineTo(cvsWidth + 35, cvsHeight - 30)

    ctx.stroke()
ctx.closePath()

saveHeights = saveHeights.reverse()


function createGraphic(mas, color, startW = 60) {

    let newMas = mas.map(item => {
        return saveHeights[item] !== undefined ? saveHeights[item] : item;
    });

    ctx.beginPath()
        ctx.strokeStyle = `${color}`
        for (let i = 0, n = 0; i < newMas.length; i++) {
            ctx.moveTo(n + startW, startAxisY - newMas[i])
            n = n + scaleX
            ctx.lineTo(n + startW, startAxisY - newMas[i+1])
        }
        ctx.stroke()
    ctx.closePath()
}

createGraphic(orangeG, 'orange')
createGraphic(greenG, 'lightgreen')
createGraphic(whiteG, 'white')
createGraphic(redG, 'red')

// график y = x^2

// ctx.fillStyle = 'red'
// for (let i = 0; i <= cvsWidth; i++) {
//     const x = (i - xAxis) / scaleX
//     const y = Math.pow(x, 2)
//     ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
// }

// ctx.fillRect(0,0,100,100)
// ctx.fillStyle = '#ff0000'
// ctx.fillRect(100,100,200,200)

// ctx.beginPath()
//     ctx.moveTo(300,300)
//     ctx.lineTo(400,400)
//     ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
//     ctx.strokeStyle = '#ff0000'
//     ctx.moveTo(320, 300)
//     ctx.lineTo(400,400)
//     ctx.stroke()
// ctx.closePath()

// ctx.fillStyle = 'white'
// ctx.font = '30px Arial'
// ctx.textAlign = 'left'
// ctx.textBaseline = 'top'
// ctx.fillText('Text', 300, 400)
// ctx.fillRect(300, 400, 2, 2)