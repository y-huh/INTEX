document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    let products = [];

    try {
        products = JSON.parse(localStorage.getItem('products')) || [];
    } catch (error) {
        console.error('Error retrieving products from localStorage:', error);
    }

    // Render products
    products.forEach(product => {
        const productElement = createProductElement(product);
        productContainer.appendChild(productElement);
    });
});

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'bg-white rounded-lg shadow-md p-6';

    productDiv.innerHTML = `
        <img src="${product.imgUrl}" alt="${product.frame}" class="w-full h-48 object-cover mb-4 rounded">

        <div class="flex w-[340px] rounded-[50px] shadow-2xl justify-between items-center mt-4 rounded-[30px]">
            <div class="flex flex-col ">
                <span class="before:w-[85px] before:rotate-[5deg] before:top-[5px] before:rounded-full before:h-[2px] before:absolute before:bg-[#FF0000] relative text-[12px] text-slate-400 leading-[13.44px]">${product.oldPrice} сум </span>
                <strong class="text-[15px] text-black leading-[13.44px]">${product.discountPrice} сум</strong>
            </div>
            <button class="bg-[#FFE600] text-xs font-medium px-2.5 py-0.5 rounded-tr-[10px] rounded-bl-[10px]">
                Заказать
            </button>
        </div>
    `;

    return productDiv;
}
