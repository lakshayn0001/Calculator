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
    const filtered=value.split(/([+\-*%])/)
    console.log(filtered.length)
    console.log(filtered.length > 2)
    while(filtered.length > 2){
        let result =0
        const value1=filtered[0]
        const operator=filtered[1]
        const value2= filtered[2]

        console.log("enter")
        switch(operator){
        case "+":{
            console.log("enter")
            result=Number(value1)+Number(value2);
            break;
        }
        case "-":{
            result=Number(value1)-Number(value2);
            break;
        }
        case "%":{
            result=Number(value1)%Number(value2);
            break;
        }
        case "*":{
            result=Number(value1)*Number(value2);
            break;
        }
        default:{
            alert("break")
            break;
        }
    }
    filtered.splice(0,3,result.toString())
    console.log(filtered)
    }
    
      console.log("from result",filtered)

      return filtered
    
}

arr.forEach((e)=>{
    const button=document.createElement("button")
    button.className="btn"
    button.innerText= e

    button.addEventListener('click',(value)=>{
            if(value.target.innerText != "Enter"){
            if(value.target.innerText == "Clear"){
                inputField.value=""
                return
            }

            else{
                if(isNaN(value.target.innerText)){ 
                    inputField.value+= " "+value.target.innerText+" "
                }
                else{
                    inputField.value+=value.target.innerText
                }
            }   
        }
        else{
            const output=inputField.value
            const finalResult=result(output)
            inputField.value=finalResult
        }
        
    })

    div2.appendChild(button)
    
})




