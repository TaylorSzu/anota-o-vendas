var pendentes = localStorage.getItem('pendentes')
const clientes = localStorage.getItem('clientes')
const entregues = localStorage.getItem('entregues')
const vendas = localStorage.getItem('vendas')



if (pendentes) {
    pendentes = JSON.parse(pendentes)
    document.getElementById('pendentes').innerHTML = pendentes.length

    var date = ``
    pendentes.forEach(b => {
        return date += `<div class="venda">
        <h1 class="name">${b.client.length > 15 ? `${b.client.split("").splice(0, 15).join("")}...` : b.client}</h1>
        <h1 class="id">( ${b.id} )</h1>
        <h1 class="product">${b.name.length > 20 ? `${b.name.split("").splice(0, 20).join("")}...` : b.name}</h1>
        <h1 class="value">R$${b.value}</h1>
        <button onclick='fim("${b.id}")'>Finalizado</button>
    </div>`;
   
    })

    document.getElementById("vendas_pendentes").innerHTML = date

} else document.getElementById('pendentes').innerHTML = 0

if (clientes) {
    document.getElementById('clientes').innerHTML = JSON.parse(clientes).length
} else document.getElementById('clientes').innerHTML = 0

document.getElementById('entregues').innerHTML = entregues || 0
document.getElementById('vendas').innerHTML = vendas || 0

