let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('formRegister')

submitBtn.addEventListener('click', evt => {
    evt.preventDefault()
    let obj = {}
    let data = new FormData(form)
    data.forEach((value, key) => obj[key] = value)
    fetch('/register', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(result => {
        if (result.status != 400) location.replace('./pages/login.html')
    })
})