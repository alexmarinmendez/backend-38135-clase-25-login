let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('formRegister')

submitBtn.addEventListener('click', evt => {
    evt.preventDefault()
    let obj = {}
    let data = new FormData(form)
    data.forEach((value, key) => obj[key] = value)
    console.log(obj)
})