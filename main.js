const loadedCats = JSON.parse(localStorage.getItem("cats"));

let cats = loadedCats ? loadedCats : [
    { id: 1, name: "Milo", age: 3, paws: 4, price: 350, discount: 35, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Brown", status: "Buy" },
    { id: 2, name: "Luna", age: 2, paws: 4, price: 280, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Ginger", status: "Sold" },
    { id: 3, name: "Oliver", age: 4, paws: 4, price: 310, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Black", status: "Buy" },
    { id: 4, name: "Daisy", age: 1, paws: 4, price: 400, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "White", status: "Sold" },
    { id: 5, name: "Leo", age: 5, paws: 4, price: 270, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Gray", status: "Buy" },
    { id: 6, name: "Cleo", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Fluffy Gray", status: "Buy" },
    { id: 7, name: "Simba", age: 2, paws: 4, price: 320, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Brown-Ginger", status: "Buy" },
    { id: 8, name: "Lily", age: 3, paws: 4, price: 400, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "White and Black", status: "Sold" },
    { id: 9, name: "Shadow", age: 5, paws: 4, price: 290, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Gray with Spots", status: "Buy" },
    { id: 10, name: "Bella", age: 4, paws: 4, price: 450, discount: 30, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Cream", status: "Sold" },
    { id: 11, name: "Charlie", age: 1, paws: 4, price: 350, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Dark Gray", status: "Buy" },
    { id: 12, name: "Misty", age: 3, paws: 4, price: 320, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Ginger-Brown", status: "Buy" },
    { id: 13, name: "Max", age: 4, paws: 4, price: 400, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "White with Black", status: "Sold" },
    { id: 14, name: "Nelly", age: 2, paws: 4, price: 350, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Smoky", status: "Buy" },
    { id: 15, name: "Sophie", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Light Gray", status: "Sold" },
    { id: 16, name: "Oscar", age: 5, paws: 4, price: 290, discount: 35, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Black with White", status: "Buy" },
    { id: 17, name: "Duke", age: 3, paws: 4, price: 320, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Golden", status: "Sold" },
    { id: 18, name: "Lola", age: 4, paws: 4, price: 400, discount: 40, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Fluffy Gray", status: "Buy" },
    { id: 19, name: "Jack", age: 1, paws: 4, price: 350, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Gray with White", status: "Buy" },
    { id: 20, name: "Maggie", age: 5, paws: 4, price: 280, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Ginger", status: "Sold" },
    { id: 21, name: "Toby", age: 3, paws: 4, price: 320, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Spotted Gray", status: "Buy" },
    { id: 22, name: "Ruby", age: 2, paws: 4, price: 450, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Cream-White", status: "Sold" },
    { id: 23, name: "Simone", age: 4, paws: 4, price: 400, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Chocolate", status: "Buy" },
    { id: 24, name: "Finn", age: 2, paws: 4, price: 280, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Gray", status: "Buy" },
    { id: 25, name: "Chloe", age: 3, paws: 4, price: 370, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Striped-White", status: "Buy" },
    { id: 26, name: "Ella", age: 2, paws: 4, price: 300, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Dark Gray", status: "Sold" },
    { id: 27, name: "George", age: 4, paws: 4, price: 430, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Ginger-Gray", status: "Buy" },
    { id: 28, name: "Muffin", age: 5, paws: 4, price: 270, discount: 30, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Black", status: "Buy" },
    { id: 29, name: "Lily", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "White with Cream", status: "Sold" },
    { id: 30, name: "Oscar", age: 3, paws: 4, price: 320, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Ginger-Striped", status: "Buy" }
];

const catContainer = document.getElementById("catContainer");
const sortPrice = document.getElementById("sortPrice");
const sortAge = document.getElementById("sortAge");
const svgSortPrice = document.getElementById("svgSortPrice");
const svgSortAge = document.getElementById("svgSortAge");
const sortReset = document.getElementById("sortReset");
const moreCards = document.getElementById("moreCards");

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
}

const createProductCard = (cardData) => {
    const newCard = createElement("div", "product-card");
    const cardPhoto = createElement("div", "product-card__photo");
    const cardImg = createElement("img");
    const cardIsLike = createElement("div", "product-card__like");
    const cardInfo = createElement("div", "product-card__info");
    const cardTitle = createElement("div", "product-card__title");
    const cardTraits = createElement("div", "product-card__traits");
    const cardColor = createElement("span", "product-card__trait", "product-card__trait--color");
    const cardAge = createElement("span", "product-card__trait", "product-card__trait--age");
    const cardPaws = createElement("span", "product-card__trait", "product-card__trait--paw");
    const cardPrice = createElement("span", "product-card__trait", "product-card__trait--price");

    const renderCardImage = () => {
        cardImg.src = cardData.backgroundImage;
        cardPhoto.appendChild(cardImg);
        if (cardData.discount) {
            const cardSale = createElement("div", "product-card__sale");
            cardSale.innerHTML = `-${cardData.discount}%`;
            cardPhoto.appendChild(cardSale);
        }
    }
    renderCardImage();

    const renderCardLike = () => {
        cardIsLike.dataset.catId = cardData.id;

        if (!cardData.isLike) {
            cardIsLike.classList.add("product-card__like--dimmed");
        }

        cardPhoto.appendChild(cardIsLike);

        cardIsLike.addEventListener('click', () => {
            cardData.isLike = !cardData.isLike;
            cardIsLike.classList.toggle("product-card__like--dimmed");
            if (cardData.isLike) showNotification("Added to wishlist");
            localStorage.setItem('cats', JSON.stringify(cats));
        });
    };
    renderCardLike();

    cardTitle.innerHTML = cardData.name;
    cardColor.innerHTML = `${cardData.color} coat`;
    cardAge.innerHTML = `<b>${cardData.age} ${cardData.age === 1 ? 'month' : 'months'}</b> <br> old`;
    cardPaws.innerHTML = `<b>${cardData.paws}</b> <br> paws`;
    cardPrice.innerHTML = `$${cardData.price}`;

    cardTraits.append(cardColor, cardAge, cardPaws);
    cardInfo.append(cardTitle, cardTraits, cardPrice);
    newCard.append(cardPhoto, cardInfo);
    catContainer.appendChild(newCard);

    const renderStatusButton = () => {
        const cardButton = createElement("div", "product-card__button");
        const buttonBuy = createElement("span");
        buttonBuy.textContent = "Buy";

        cardButton.appendChild(buttonBuy);
        newCard.appendChild(cardButton);

        const toggleStatus = (status, text) => {
            cardData.status = status;
            buttonBuy.textContent = text;

            cardButton.classList.toggle("product-card__button--sold-out", status === "Sold");
            cardButton.classList.toggle("product-card__button--in-cart", status === "In Cart");
        };

        if (cardData.status === "Sold") {
            toggleStatus("Sold", "Sold");
        } else if (cardData.status === "In Cart") {
            toggleStatus("In Cart", "In Cart");
        } else {
            toggleStatus("Buy", "Buy");
        }

        const visibleButtonStatus = () => {
            cardButton.addEventListener("click", () => {
                if (cardData.status === "Buy") {
                    toggleStatus("In Cart", "In Cart");
                    showNotification("Added to cart");
                } else if (cardData.status === "In Cart") {
                    toggleStatus("Buy", "Buy");
                } else if (cardData.status === "Sold") {
                    showError("Out of stock");
                }
            });
        };
        visibleButtonStatus();
    }
    renderStatusButton();
}

const renderMoreCards = () => {
    let shownCount = 9;
    cats.slice(0, shownCount).forEach(createProductCard);
    moreCards.addEventListener('click', () => {
        const startCount = shownCount;
        shownCount += 10;
        const visibleCats = cats.slice(startCount, shownCount);
        visibleCats.forEach(createProductCard);
        shownCount >= cats.length && moreCards.remove();
    });
}
renderMoreCards();

function sortAndRender(arr, type) {
    const sortByPriceDesc = (a, b) => b.price - a.price
    const sortByPriceAsc = (a, b) => a.price - b.price
    const sortByAgeDesc = (a, b) => b.age - a.age
    const sortByAgeAsc = (a, b) => a.age - b.age
    const sortAndReset = () => {
        const copy = arr.slice(0,9); // to ask
        catContainer.innerHTML = '';
        copy.forEach(createProductCard);
    };

    const sortByType = (func, type) => {
        sortPrice.dataset.sortType = type;
        sortAge.dataset.sortType = type;
        sortReset.dataset.sortType = type;
        const copy = arr.slice(0,9);
        copy.sort(func);
        catContainer.innerHTML = '';
        copy.forEach(createProductCard);
    }

    if (type === 'price') {
        (sortPrice.dataset.sortType === 'descending' || typeof sortPrice.dataset.sortType === 'undefined')
            ? sortByType(sortByPriceAsc, 'ascending')
            : sortByType(sortByPriceDesc, 'descending');
    }
    else if (type === 'age') {
        sortAge.dataset.sortType === 'descending' || typeof sortAge.dataset.sortType === 'undefined'
            ? sortByType(sortByAgeAsc, 'ascending')
            : sortByType(sortByAgeDesc, 'descending')
    } else {
        sortAndReset();
    }
}

const validateForm = () => {
    const submitButton = document.getElementById("submit");
    const emailInput  = document.getElementById("email");
    const newsCheckbox = document.getElementById("news");
    let isSubscribed = false;

    newsCheckbox.addEventListener('click', () => isSubscribed = true);

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const emailValue  = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const checkForm = () => {
            if (!emailValue ) return showError("Email is required");
            if (!regex.test(emailValue )) return showError("Please enter a valid email");
            if (isSubscribed) return showNotification("Subscription successful");
            showError("Please subscribe to the newsletter");
        };
        checkForm();
    });
};
validateForm();

const showMessage = (text, className) => {
    const message = createElement("div", className);
    message.textContent = text;
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
};
const showError = (text) => showMessage(text, "error");
const showNotification = (text) => showMessage(text, "notification");

sortPrice.addEventListener('click', () => sortAndRender(cats, 'price'));
sortAge.addEventListener('click', () => sortAndRender(cats, 'age'));
sortReset.addEventListener('click', () => sortAndRender(cats, 'reset'));

sortPrice.addEventListener('click', () => svgSortPrice.classList.toggle('rotated'));
sortAge.addEventListener('click', () => svgSortAge.classList.toggle('rotated'));

const mobileMenuOpen = document.getElementById("mobileMenuOpen");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuOpen.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuClose.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuClose.classList.remove('active');
});
