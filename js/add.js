const background = document.getElementById('background')
const modal = document.getElementById('modal')
const submit = document.querySelector('[type="submit"]');

function opn() {
    background.style = 'display:block;'
    modal.style = 'display:block;'

    background.addEventListener('click', () => {
        background.style = 'display:none;'
        modal.style = 'display:none;'

    })
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const value = document.getElementById('value').value
    const client = document.getElementById('client').value

    var pendentes = localStorage.getItem('pendentes')
    var clientes = localStorage.getItem('clientes')

    if(!value || !name || !id || !client) return

    if(pendentes) {
        pendentes = JSON.parse(pendentes)
    } else pendentes = []
    
    localStorage.setItem('vendas', (Number(localStorage.getItem('vendas') || 0) + 1))

    if(clientes) {
        clientes = JSON.parse(clientes)
    } else clientes = []

    if(!clientes.find(i=> i == id)) {
        clientes.push(id)
        localStorage.setItem('clientes', JSON.stringify(clientes))
    }

    pendentes.push({
        id:id,
        name:name,
        value:value,
        client:client
    })
    localStorage.setItem('pendentes', JSON.stringify(pendentes))

    location.reload()

  });