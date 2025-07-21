//  let carrito = [];

/*let arr = [ {id: '1', producto: 'Remera', precio:'2500'},
            {id: '2', producto: 'Zapatilla', precio:'5000'}]

console.log(arr[0].precio) */

/*
function agregarProducto(producto, precio) {
    let itemDeCarrito = {product: producto, price: precio}

    carrito = JSON.parse(sessionStorage.getItem('carrito')) || []; //verificar si hay contenido en carrito

    localStorage.setItem('nuevoProducto', JSON.stringify(itemDeCarrito));
    carrito.push(itemDeCarrito) //añade item al carrito    

    sessionStorage.setItem('carrito', JSON.stringify(carrito));

    let nodo = document.getElementById('carrito');

    let productoAgregado = document.createElement('p');
    productoAgregado.textContent = `Producto: ${itemDeCarrito.product} - $${itemDeCarrito.price}`;

    nodo.appendChild(productoAgregado);
    let aux = JSON.parse(localStorage.getItem("nuevoProducto"));
    console.log(aux);
    console.log('Carrito: ', carrito);
}

let boton = document.getElementById('boton-carrito');
boton.addEventListener("click", () => {
                                        agregarProducto('remera', '5390')    
})

*/
//const generarCarrito = (producto, precio) => {}

//console.log(JSON.stringify(localStorage.getItem('nuevoProducto')));

document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];
    let precioFinal = 0;
    
    let cards = document.querySelectorAll('.prod-card');
    
    //console.log(cards)
    
    cards.forEach( card => {
        
        let btnClic = card.querySelector('button');

        const nombreProducto = card.querySelector('.prod-title').textContent;
        const precioNoFormateado = card.querySelector('p:last-child');
        const precioProducto = precioNoFormateado ? productP.textContent.replace('Precio: $', '') : "0";
        console.log(precioNoFormateado)
        btnClic.addEventListener('click', ()=>{

            const producto = {
                nombre: nombreProducto,
                precio: precioProducto,
                cantidad: 1
            };

            carrito.push(producto);
            precioFinal += parseFloat(producto.precio)

            localStorage.setItem('productos', JSON.stringify(carrito));
            localStorage.setItem('total', precioFinal);

            document.querySelector('.contadorCarrito').innerText = carrito.length;
        });
/*
        card.querySelector('button').addEventListener('click', () => {
            console.log(card);
        });*/
    }

    );
})