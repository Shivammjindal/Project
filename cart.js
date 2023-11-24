const FirstNumber = document.querySelector('.FirstNumber')
const cartFirst = document.querySelector('.cartFirst')

let cost1 = 200;
let cost2 = 800;
let cost3 = 900;
let cost4 = 1500;
let cost5 = 500;
let cost = 3900;

FirstNumber.addEventListener("change",()=>{
    cost1 = parseInt(FirstNumber.value)*200
    cartFirst.textContent = `₹${cost1}.00`
    console.log('running')
    cost = cost1 + cost2 + cost3 + cost4  + cost5;
    document.querySelector('.Subtotal').textContent=`₹ ${cost}`
    document.querySelector('.taxes').textContent=`₹ ${cost/100}`
    document.querySelector('.total').textContent=`₹ ${cost + 25}`
})

const SecondNumber = document.querySelector('.SecondNumber')
const cartSecond = document.querySelector('.cartSecond')


SecondNumber.addEventListener("change",()=>{
    cost2 = parseInt(SecondNumber.value)*800
    cartSecond.textContent = `₹${cost2}.00`
    cost = cost1 + cost2 + cost3 + cost4  + cost5;
    document.querySelector('.Subtotal').textContent=`₹ ${cost}`
    document.querySelector('.taxes').textContent=`₹ ${cost/100}`
    document.querySelector('.total').textContent=`₹ ${cost + 25}`
})

const ThirdNumber = document.querySelector('.ThirdNumber')
const cartThird = document.querySelector('.cartThird')


ThirdNumber.addEventListener("change",()=>{
    cost3 = parseInt(ThirdNumber.value)*900
    cartThird.textContent = `₹${cost3}.00`
    cost = cost1 + cost2 + cost3 + cost4  + cost5;
    document.querySelector('.Subtotal').textContent=`₹ ${cost}`
    document.querySelector('.taxes').textContent=`₹ ${cost/100}`
    document.querySelector('.total').textContent=`₹ ${cost + 25}`
})

const ForthNumber = document.querySelector('.ForthNumber')
const cartForth = document.querySelector('.cartForth')


ForthNumber.addEventListener("change",()=>{
    cost4 = parseInt(ForthNumber.value)*1500
    cartForth.textContent = `₹${cost4}.00`
    cost = cost1 + cost2 + cost3 + cost4  + cost5;
    document.querySelector('.Subtotal').textContent=`₹ ${cost}`
    document.querySelector('.taxes').textContent=`₹ ${cost/100}`
    document.querySelector('.total').textContent=`₹ ${cost + 25}`
})

const FivethNumber = document.querySelector('.FivethNumber')
const cartFiveth = document.querySelector('.cartFiveth')



FivethNumber.addEventListener("change",()=>{
    cost5 = parseInt(FivethNumber.value)*500
    cartFiveth.textContent = `₹${cost5}.00`
    cost = cost1 + cost2 + cost3 + cost4  + cost5;
    document.querySelector('.Subtotal').textContent=`₹ ${cost}`
    document.querySelector('.taxes').textContent=`₹ ${cost/100}`
    document.querySelector('.total').textContent=`₹ ${cost + 25}`
})