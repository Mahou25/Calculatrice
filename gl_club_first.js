document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e);
    let data = new FormData(this)
    let datae = {
        nom: document.querySelector('#nom').value,
        email: document.querySelector('#email').value
    }
    document.querySelector('#email').value = 1234
    document.querySelector('#pre').innerHTML = `<div class="bg-danger">toto</div>`
    console.log(datae);
  
})
