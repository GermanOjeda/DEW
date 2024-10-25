
$(document).ready(function () {
    let productos = {};

    $('.menu-btn').click(function () {
        const categoria = $(this).data('category');
        subCategorias(categoria);
    });
    function subCategorias(categoria) {
        $('.sub-menu').empty();
        $('.product-list').empty();
        const subcategorias = {
            'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
            'primer-plato': ['Sopa', 'Ensalada'],
            'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
            'postres': ['Dulces', 'Frutas']
        };
        subcategorias[categoria].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });
        $('.sub-menu-btn').click(function () {
            const subcategoria = $(this).data('subcategory');
            conseguitProductos(subcategoria);
        });
    }
    function conseguitProductos(subcategoria) {
        // Limpiar productos anteriores
        $('.product-list').empty();

        $.getJSON('productos.json', function (data) {
            const productos = data[subcategoria];
            productos.forEach(producto => {
                $('.product-list').append(`
                    <div class="producto" data-id="${producto.id}">
                        <span>${producto.nombre}</span>
                        <div class="product_qty">
                            <button class="btn-decrementar">-</button>
                            <span class="cantidad">0</span>
                            <button class="btn-incrementar">+</button>
                        </div>
                    </div>
                `);
            });
        });
    }
});
        