


const urlImages = {
    0: './images/image-product-1.jpg',
    1: './images/image-product-2.jpg',
    2: './images/image-product-3.jpg',
    3: './images/image-product-4.jpg'
}


const back = document.querySelector('.back');
const next = document.querySelector('.next');
const imgSneaker = document.querySelector('.sneaker__img'); // imagen principal
const imagesClick = document.querySelectorAll('.image-wrapper');
let count = 0;
function inRange(c) {
    if (c > 3) {
        return 0
    }
    if (c < 0) {
        return 3
    }
    return c
}

function toBack() {
    count--;
    count = inRange(count);
    imgSneaker.src = urlImages[count];  
}

function toNext() {
    count++;
    count = inRange(count);
    imgSneaker.src = urlImages[count];
}

function showImage() {  // esta función es cuando alcanza de ancho  1024 y aparcen imagen más pequeñas 
    if (window.innerWidth >= 1024) {
        imagesClick.forEach((img, index) => {
            img.classList.remove('image--clicked');
            if (index === count) {
                img.classList.add('image--clicked');
            }
        })
        
    }

}

function choseImage(e) {
    imagesClick.forEach(img => img.classList.remove('image--clicked'));
    const imgWrapper = e.currentTarget;
    const urlImg = imgWrapper.querySelector('.image').src;
    imgSneaker.src = urlImg;
    imgWrapper.classList.add('image--clicked');
}
back.addEventListener('click', toBack);
next.addEventListener('click', toNext);
window.addEventListener('resize', showImage);
imagesClick.forEach(imgWrapper => imgWrapper.addEventListener('click', choseImage));


const btnCart = document.querySelector('.btn-cart');
const showContent = document.querySelector('.show-cart');

function showCart() {
    showContent.classList.toggle('show-cart--show');
}



btnCart.addEventListener('click', showCart);



const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const textCount = document.querySelector('.sneaker__count');

let numProduct = 0;

function addProduct() {
    numProduct++;
    textCount.textContent = String(numProduct);
}

function removeProduct() {
    numProduct--;
    if (numProduct < 0) {
        numProduct = 0;
    }
    textCount.textContent = String(numProduct);
}

plus.addEventListener('click', addProduct);
minus.addEventListener('click', removeProduct);








const btnAddCart = document.querySelector('.sneaker__btn-cart');
const productShow = document.querySelector('.product'); 
const countShow = document.querySelector('.product-count');
const totalPriceShow = document.querySelector('.product-price-total');
const btnCheckout = document.querySelector('.checkout');
const btnTrash = document.getElementById('trash');
function addCart() {
    if (!showContent.classList.contains('show-cart--show')){
        showCart();
    }
    if (numProduct > 0) {
        productShow.style.display = 'flex';
        btnCheckout.style.display = 'block';
        document.querySelector('.cart-text').style.display = 'none';
        const priceNow = parseFloat(document.querySelector('.sneaker__price').textContent.replace('$', '')).toFixed(2);
        totalPriceShow.textContent = `$${(priceNow * numProduct).toFixed(2)}`;
        countShow.textContent = numProduct;
    } else if (numProduct === 0) {
        document.querySelector('.cart-text').style.display = 'block';
        countShow.textContent = '';
        productShow.style.display = 'none';
        btnCheckout.style.display = 'none';
    }
}

function isNumProductCorrect(num) {
    return num > 0;
}

function cleanProduct(e) {
    const productContent = e.currentTarget.closest('.product');
    const countThisProduct = productContent.querySelector('.product-count');
    numProduct = numProduct - parseInt(countThisProduct.textContent);
    textCount.textContent = isNumProductCorrect(numProduct) ? numProduct : '0';
    productContent.style.display = 'none';
    countThisProduct.textContent = '';
    if (numProduct === 0 || numProduct === '0' || isNaN(numProduct)) {
        document.querySelector('.cart-text').style.display = 'block';
        btnCheckout.style.display = 'none';
    }
}

btnAddCart.addEventListener('click', addCart);
btnTrash.addEventListener('click', cleanProduct);




const btnMenu = document.querySelector('.btn-menu');
const showMenu = document.querySelector('.hero__nav');
const mainBck = document.querySelector('.main');
const btnClose = document.querySelector('.close');
function showMenuMobileTablet() {
    showMenu.classList.toggle('hero__nav--active');
    mainBck.classList.toggle('main--active');
}


function justClose() {
    showMenu.classList.remove('hero__nav--active');
    mainBck.classList.remove('main--active');
}

btnMenu.addEventListener('click', showMenuMobileTablet);
btnClose.addEventListener('click', justClose);
window.addEventListener('resize', justClose);
window.addEventListener('DOMContentLoaded', justClose);