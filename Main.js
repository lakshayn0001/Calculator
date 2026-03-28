const calculator = document.createElement('div')
const arr=[1,2,3,4,5,6,7,8,9,0,"=","+","-","%","*","Clear","Enter"]
const inputField= document.createElement('input')

const div1= document.createElement('div')
const div2= document.createElement('div')
div1.id="inputField"
div2.id="ButtonField"
calculator.id="Calculator"
inputField.id="input"
const style={
  fontSize: "16px",
}

Object.assign(inputField.style,style)

document.body.appendChild(calculator)
calculator.appendChild(div1)
calculator.appendChild(div2)
div1.appendChild(inputField)
inputField.placeholder="Calculation"


arr.forEach((e)=>{
    const button=document.createElement("button")
    button.className="btn"
    button.innerHTML+= e+" "+" "
    div2.appendChild(button)
})
