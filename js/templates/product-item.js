export const item = product => {
  return `
    <li class="product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">
      <div class="product__block--left">
      <div>
      <div class="product__img-box">
      <img src="${product.image}" alt="" class="product__block-img">
      </div>
      <div class="product__text-box">
      <p class="product__name js_product-name">${product.name}</p>
   
      ${
        product.description[0].text.length > 0
          ? '<p class="text product__desc">' +
            product.description[0].text.slice(0, 80) +
            '...' +
            '</p>'
          : ''
      }
     
   </div>
   </div>
   <div class="product__btn-block">
   <a href="product-page.html?id=${
     product.id
   }" id="btn-1" class="product__btn first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
  }">details <svg  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35787 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM6 3.29285L10.2071 7.49995L6 11.7071V3.29285Z" />
</svg></a>
   ${
     product.type == 'ring' || product.type == 'clothing'
       ? ''
       : '<button id="btn-2" class="product__btn second js_add-to-cart">buy <svg  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35787 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM6 3.29285L10.2071 7.49995L6 11.7071V3.29285Z" /></svg></button>'
   }
  </div>
      </div>
      <div class="product__block--right">
      <span class="product__price">$${product.price.toFixed(2)}</span>
      </div>


     </div>
   </li>
    `;
};
