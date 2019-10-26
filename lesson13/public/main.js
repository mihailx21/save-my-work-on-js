const create = (tag)=> document.createElement(tag)
const appendBody = node =>document.body.appendChild(node)
const appendToParent = (parentNode,node) => parentNode.appendChild(node)

let formDiv = appendBody(create('form'))
formDiv.classList.add('form-group', 'w-500p', 'mt-5', 'ml-auto', 'mr-auto')

let loginInput = appendToParent(formDiv,create('input'))
loginInput.placeholder = 'Please login'
loginInput.classList.add('form-control','mb-2')

let passwordInput = appendToParent(formDiv, create('input'))
passwordInput.placeholder = 'Please password'
passwordInput.classList.add('form-control', 'mb-2')

let button = appendToParent(formDiv, create('button'))
button.innerText = 'Submit login'
button.classList.add('btn', 'btn-success', 'w-100')


formDiv.onsubmit = async (event) => {
    event.preventDefault()
    let {value: loginValue} = loginInput 
    let {value: passwordValue} = passwordInput
       // console.log(loginValue, passwordValue)
    let spiner = create('div')
    spiner.classList.add('spinner-border', 'text-white')
    button.innerText = ''
    button.appendChild(spiner)
    let response = await fetch('http://localhost:3000/users')
    let users = await response.json()
    let userFound = users.find((user) => user.login === loginValue && user.password === passwordValue)
    if(userFound){
        alert('LOGIN SUCCESS')
    } else {
        alert('LOGIN ERROR')
    }
    button.innerText = 'Submit login'

    //         .then ((response) => {
//             return response.json()
//         })
//         .then ((users)=>{
//             let userFound = users.find((user) => user.login === loginValue && user.password === passwordValue)
//             if(userFound){
//                 alert('LOGIN SUCCESS')
//             } else {
//                 alert('LOGIN ERROR')
//             }
//         })
//         .catch(error => {
//             console.log(error)
//         })
//         .finally(() => button.innerText = 'Submit login')
}   

