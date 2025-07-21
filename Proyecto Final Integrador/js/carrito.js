
function irACarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('productos')) || []; //
    const total = localStorage.getItem('total') || 0; //

    let carritoContainer = document.getElementById('itemProducts'); //
    
    if (CARRITO.lenght === 0) { //Si el carrito no tiene elementos.
        carritoContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
        return
    }

    let tabla = document.createElement('table') //Crea el elemento tabla
    tabla.classList.add('table');  //Le asigna la clase "table" a la tabla

    let tablaHead = //Crea la primera fila de tabla (Producto/Cantidad/Precio)
                    ` 
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    `;

    let tablaBody = '<tbody>'; //Crea el body de la tabla

    CARRITO.forEach(producto => { //Rellena la tabla con filas por cada elemento en Carrito
        tablaBody += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.precio}</td>
        </tr>
        `;
    });

    tablaBody += '</tbody>'; //Para cerrar el tbody, se suma el cierre </tbody>

    tabla.innerHTML = tablaHead + tablaBody; //Se suman el encabezado y el cuerpo en tabla

    carritoContainer.appendChild(tabla); //Agrega tabla a la sección de carritoContainer


    //Precio Final:
    let totalFinal = document.createElement('p');
    totalFinal.innerText = `Total a pagar: $${total}`;

    carritoContainer.appendChild(totalFinal); ////Agrega el total a la sección de carritoContainer

    let finalizar = document.createAttribute('button');

}

function vaciarCarrito() {
    if (confirm("Estas seguro de que deseas vaciar el carrito?")) { //Si el usuario da que SI, ejecuta
        localStorage.removeItem('productos'); //limpia el localStorage de los productos
        localStorage.removeItem('total');   //limpia el localStorage del total

        const carritoContainer = document.getElementById('itemProducts'); //limpia la tabla
        carritoContainer.innerHTML = '';

        document.querySelector('.contadorCarrito').innerText = '0'; //limpia el contador del carrito
    }
}

document.addEventListener('DOMContentLoaded', irACarrito); //Cuando termina de cargar la pagina llama a la función irACarrito


