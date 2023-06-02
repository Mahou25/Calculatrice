let numbers = document.querySelectorAll(".number")
let input = document.querySelector("input")
//let preview = document.querySelector(".preview")
let temp=[]

numbers.forEach((number) => {
    number.addEventListener('click',(e)=>{
        if(number.textContent=="."){
            if(!input.value.includes('.')){
                input.value=input.value+number.textContent
            }
        }else{
            input.value =parseFloat(input.value + number.textContent)
        }
    })
})

const operateurs = document.querySelectorAll(".operator")
operateurs.forEach((operateur)=>{
    operateur.addEventListener('click',(i)=>{
       i.preventDefault()
       temp.push(input.value)
       document.querySelector(".preview").textContent=temp.join('')
       let operator = operator_btn.textContent.toLocaleLowerCase()
       if(operator.textContent =='='){
        let last = temp[temp.length-1]
        if(isNaN(last)){
            temp.pop()
        }
        let op = temp.join('')
        let resultat = eval(op)
        temp = []
        input.value = resultat
       }
       else{
        let last = temp[temp.length-1]
        if(isNaN(last)){
            temp.pop()
        }
        temp.push(operator)
        input.value = 0
       }
    })
})

document.querySelector('.del').addEventListener('click',(e)=>{
    e.preventDefault()
    str = input.value
    str = str.pop()
    input.value = str
})

document.querySelector('.reset').addEventListener('click',(i)=>{
    i.preventDefault()
    temp=[]
    input.value = 0
    document.querySelector('.preview').textContent = ''
})

document.querySelector('.negative').addEventListener('click',(a)=>{
    a.preventDefault()
    if(input.value != 0){
        if(!input.value.includes('-')){
            input.value ='-' + input.value 
        }else{
            input.value = input.value.substr(1)
        }
    }
})



