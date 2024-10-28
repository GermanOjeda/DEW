$(document).ready(function () {
    let productos = {};
    const subCategorias = {
        'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
        'primer-plato': ['Sopa', 'Ensalada'],
        'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
        'postres': ['Dulces', 'Frutas']
    };
    $('.menu-btn').click(function () {
        const categoria = $(this).data('category');
        encontrarSubcategorias(categoria);
    });

    function encontrarSubcategorias(categoria) {
        $('.sub-menu').empty();
        $('.product-list').empty();
        subCategorias[categoria].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });
        $('.sub-menu-btn').click(function () {
            const subCategoria = $(this).data('subcategory');
            cargarProductos(subCategoria);
        });
    }

    function cargarProductos(subCategoria) {
        $('.product-list').empty();
        $.getJSON('productos.json', function (data) {
            const productos = data[subCategoria];
            productos.forEach(producto => {
                $('.product-list').append(`
                    <div class="producto" data-id="${producto.id}">
                        <span>${producto.nombre}</span>
                        <div class="product_qty">
                            <button class="btn-decrease">Quitar</button>
                            <span class="quantity">0</span>
                            <button class="btn-increase">Añadir</button>
                        </div>
                    </div>
                    <br>
                `);
            });
            $('.btn-decrease').click(function () {
                const cantidadProducto = $(this).siblings('.quantity');
                let cantidad = parseInt(cantidadProducto.text());
                if (cantidad > 0) {
                    cantidad--;
                    cantidadProducto.text(cantidad);
                    elegirProductos($(this).closest('.producto'), cantidad);
                }
            });
            $('.btn-increase').click(function () {
                const cantidadProducto = $(this).siblings('.quantity');
                let cantidad = parseInt(cantidadProducto.text());
                cantidad++;
                cantidadProducto.text(cantidad);
                elegirProductos($(this).closest('.producto'), cantidad);
            });
        });
    }

    function elegirProductos(productDiv, cantidad) {
        const productId = productDiv.data('id');
        const productName = productDiv.find('span').first().text();
        if (cantidad > 0) {
            productos[productId] = { nombre: productName, cantidad: cantidad };
        } else {
            delete productos[productId];
        }
        mostrarProductos();
    }

    function mostrarProductos() {
        $('#productos-seleccionados').empty();
        $.each(productos, function (id, producto) {
            $('#productos-seleccionados').append(`<li>${producto.nombre}: ${producto.cantidad}</li>`);
        });
    }

    $('#enviarComanda').click(function () {
        if (Object.keys(productos).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            productos = {};
            mostrarProductos();
            $('.product-list').find('.cantidad').text(0);
        }
    });
});