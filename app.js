const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "lightgray",
                img: "Images/footwear2-removebg-preview (1).png",
            },
            {
                code: "lightblue",
                img: "Images/footware (blue).png",
            },
        ],
    },
    {
        id: 2,
        title: "Air JORDAN",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "Images/footwear6-removebg-preview.png",
            },
            {
                code: "yellow",
                img: "Images/footware (yellow).png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "darkblue",
                img: "Images/footwear5-removebg-preview (1).png",
            },
            {
                code: "yellowgreen",
                img: "Images/footware (green).png",
            },
        ],
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: [
            {
                code: "black",
                img: "Images/footwear4-removebg-preview.png",
            },
            {
                code: "lightgray",
                img: "Images/footware (gray 2).png",
            },
        ],
    },
    {
        id: 5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code: "blue",
                img: "Images/footwear8-removebg-preview.png",
            },
            {
                code: "black",
                img: "Images/foootware (black).png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change  texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display= "flex"
})

close.addEventListener("click",()=>{
    payment.style.display= "none"
})