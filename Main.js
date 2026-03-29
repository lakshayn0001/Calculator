const calculator = document.createElement('div')
const arr=["1","2","3","4","5","6","7","8","9","0","+","-","%","*","Clear","Enter"]
const inputField= document.createElement('input')
const buttons=document.createElement("button")
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


function result(value){
    arr.map((e)=>{
        if(isNaN(e.target.value)){
            
    })
}

arr.forEach((e)=>{
    const button=document.createElement("button")
    button.className="btn"
    button.innerText= e

    button.addEventListener('click',(value)=>{
            if(value.target.innerText != "Enter"){
            if(value.target.innerText == "Clear"){
                inputField.value=" "
                return
            }

            else{
                if(isNaN(value.target.innerText) === false){
                console.log("Enter in the number")
                Number(value.target.innerText)
                console.log(typeof(Number(value.target.innerText)))
                inputField.value+=value.target.innerText 
                }
                else{
                console.log(typeof(value.target.innerText))
                inputField.value+=value.target.innerText 
                }
            }   
        }
        else{
            const output=inputField.value
            result(output)
        }
        
    })

    div2.appendChild(button)
    
})




