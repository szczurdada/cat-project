const LOCAL_STORAGE_CATS_KEY = 'cats';

const loadedCats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATS_KEY));

const defaultCats = [
    { id: 1, name: "Milo", age: 3, paws: 4, price: 350, discount: 35, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Brown", status: "Buy" },
    { id: 2, name: "Luna", age: 2, paws: 4, price: 280, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Ginger", status: "Sold" },
    { id: 3, name: "Oliver", age: 4, paws: 4, price: 310, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Black", status: "Buy" },
    { id: 4, name: "Daisy", age: 1, paws: 4, price: 400, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "White", status: "Sold" },
    { id: 5, name: "Leo", age: 5, paws: 4, price: 270, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Gray", status: "Buy" },
    { id: 6, name: "Cleo", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Fluffy Gray", status: "Buy" },
    { id: 7, name: "Simba", age: 2, paws: 4, price: 320, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Brown-Ginger", status: "Buy" },
    { id: 8, name: "Lily", age: 3, paws: 4, price: 400, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "White and Black", status: "Sold" },
    { id: 9, name: "Shadow", age: 5, paws: 4, price: 290, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Gray with Spots", status: "Buy" },
    { id: 10, name: "Bella", age: 4, paws: 4, price: 450, discount: 30, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Cream", status: "Sold" },
    { id: 11, name: "Charlie", age: 1, paws: 4, price: 350, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Dark Gray", status: "Buy" },
    { id: 12, name: "Misty", age: 3, paws: 4, price: 320, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Ginger-Brown", status: "Buy" },
    { id: 13, name: "Max", age: 4, paws: 4, price: 400, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "White with Black", status: "Sold" },
    { id: 14, name: "Nelly", age: 2, paws: 4, price: 350, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Smoky", status: "Buy" },
    { id: 15, name: "Sophie", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Light Gray", status: "Sold" },
    { id: 16, name: "Oscar", age: 5, paws: 4, price: 290, discount: 35, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Black with White", status: "Buy" },
    { id: 17, name: "Duke", age: 3, paws: 4, price: 320, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Golden", status: "Sold" },
    { id: 18, name: "Lola", age: 4, paws: 4, price: 400, discount: 40, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Fluffy Gray", status: "Buy" },
    { id: 19, name: "Jack", age: 1, paws: 4, price: 350, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Gray with White", status: "Buy" },
    { id: 20, name: "Maggie", age: 5, paws: 4, price: 280, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Ginger", status: "Sold" },
    { id: 21, name: "Toby", age: 3, paws: 4, price: 320, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Spotted Gray", status: "Buy" },
    { id: 22, name: "Ruby", age: 2, paws: 4, price: 450, discount: 25, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Cream-White", status: "Sold" },
    { id: 23, name: "Simone", age: 4, paws: 4, price: 400, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "Chocolate", status: "Buy" },
    { id: 24, name: "Finn", age: 2, paws: 4, price: 280, discount: 10, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Gray", status: "Buy" },
    { id: 25, name: "Chloe", age: 3, paws: 4, price: 370, discount: 20, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Striped-White", status: "Buy" },
    { id: 26, name: "Ella", age: 2, paws: 4, price: 300, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Dark Gray", status: "Sold" },
    { id: 27, name: "George", age: 4, paws: 4, price: 430, discount: 15, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Ginger-Gray", status: "Buy" },
    { id: 28, name: "Muffin", age: 5, paws: 4, price: 270, discount: 30, isLike: false, backgroundImage: "./src/assets/images/cat3.png", color: "Black", status: "Buy" },
    { id: 29, name: "Lily", age: 1, paws: 4, price: 450, discount: 5, isLike: false, backgroundImage: "./src/assets/images/cat2.png", color: "White with Cream", status: "Sold" },
    { id: 30, name: "Oscar", age: 3, paws: 4, price: 320, discount: null, isLike: false, backgroundImage: "./src/assets/images/cat1.png", color: "Ginger-Striped", status: "Buy" }
];

const cats = loadedCats || defaultCats;

const catContainer = document.getElementById("catContainer");
const sortPriceButton = document.getElementById("sortPriceButton");
const sortAgeButton = document.getElementById("sortAgeButton");
const svgSortPrice = document.getElementById("svgSortPriceButton");
const svgSortAge = document.getElementById("svgSortAge");
const sortResetButton = document.getElementById("sortResetButton");
const moreCardsButton = document.getElementById("moreCardsButton");

const createElement = (tag, ...classNames) => {
    const element = document.createElement(tag);
    if (classNames.length) element.classList.add(...classNames);
    return element;
};

const createProductCard = (cat) => {
    const newCard = createElement("div", "product-card");
    const cardPhoto = createElement("div", "product-card__photo");
    const cardImg = createElement("img");
    const cardIsLike = createElement("div", "product-card__like");

    cardImg.src = cat.backgroundImage;
    cardIsLike.dataset.catId = cat.id;

    cardPhoto.appendChild(cardImg);
    cardPhoto.appendChild(cardIsLike);

    const cardInfo = createElement("div", "product-card__info");

    const cardTitle = createElement("div", "product-card__title");
    cardTitle.innerHTML = cat.name;

    const cardTraits = createElement("div", "product-card__traits");
    const cardColor = createElement("span", "product-card__trait", "product-card__trait--color");
    const cardAge = createElement("span", "product-card__trait", "product-card__trait--age");
    const cardPaws = createElement("span", "product-card__trait", "product-card__trait--paw");

    cardColor.innerHTML = `${cat.color} coat`;
    cardAge.innerHTML = `<b>${cat.age} ${cat.age === 1 ? 'month' : 'months'}</b> <br> old`;
    cardPaws.innerHTML = `<b>${cat.paws}</b> <br> paws`;

    cardTraits.append(cardColor, cardAge, cardPaws);

    const cardPrice = createElement("span", "product-card__trait--price");
    cardPrice.innerHTML = `$${cat.price}`;

    cardInfo.append(cardTitle, cardTraits, cardPrice);

    newCard.append(cardPhoto, cardInfo);
    catContainer.appendChild(newCard);

    renderCardImage(cat, cardPhoto);
    renderCardLike(cat, cardPhoto, cardIsLike);
    renderStatusButton(cat, newCard);
};

const renderCardImage = (cat, cardPhoto) => {
    if (cat.discount) {
        const cardSale = createElement("div", "product-card__sale");
        cardSale.innerHTML = `-${cat.discount}%`;
        cardPhoto.appendChild(cardSale);
    }
};

const renderCardLike = (cat, cardPhoto, cardIsLike) => {
    if (!cat.isLike) {
        cardIsLike.classList.add("product-card__like--dimmed");
    }

    cardIsLike.addEventListener('click', () => {
        cat.isLike = !cat.isLike;
        cardIsLike.classList.toggle("product-card__like--dimmed");
        if (cat.isLike) showNotification("Added to wishlist");
        localStorage.setItem(LOCAL_STORAGE_CATS_KEY, JSON.stringify(cats));
    });
};

const renderStatusButton = (cat, newCard) => {
    const cardButton = createElement("div", "product-card__button");
    const buttonBuy = createElement("span");
    buttonBuy.textContent = "Buy";

    cardButton.appendChild(buttonBuy);
    newCard.appendChild(cardButton);

    const toggleStatus = (status, text) => {
        cat.status = status;
        buttonBuy.textContent = text;

        cardButton.classList.toggle("product-card__button--sold-out", status === "Sold");
        cardButton.classList.toggle("product-card__button--in-cart", status === "In Cart");
    };

    if (cat.status === "Sold") {
        toggleStatus("Sold", "Sold");
    } else if (cat.status === "In Cart") {
        toggleStatus("In Cart", "In Cart");
    } else {
        toggleStatus("Buy", "Buy");
    }

    cardButton.addEventListener("click", () => {
        if (cat.status === "Buy") {
            toggleStatus("In Cart", "In Cart");
            showNotification("Added to cart");
        } else if (cat.status === "In Cart") {
            toggleStatus("Buy", "Buy");
        } else if (cat.status === "Sold") {
            showError("Out of stock");
        }
        localStorage.setItem(LOCAL_STORAGE_CATS_KEY, JSON.stringify(cats));
    });
};

const initRenderMoreEvents = () => {
    let shownCount = 9;
    cats.slice(0, shownCount).forEach(createProductCard);
    moreCardsButton.addEventListener('click', () => {
        const startCount = shownCount;
        shownCount += 10;
        const visibleCats = cats.slice(startCount, shownCount);
        visibleCats.forEach(createProductCard);
        shownCount >= cats.length && moreCardsButton.remove();
    });
};

function sortAndRender(arr, type) {
    const sortAndReset = () => {
        const copy = arr.slice(0,9);
        catContainer.innerHTML = '';
        copy.forEach(createProductCard);
    };

    if (type === 'price') {
        sortPriceButton.dataset.sortType === 'descending'
            ? sortByType(sortByPriceAsc, 'ascending')
            : sortByType(sortByPriceDesc, 'descending');
    }
    else if (type === 'age') {
        sortAgeButton.dataset.sortType === 'descending'
            ? sortByType(sortByAgeAsc, 'ascending')
            : sortByType(sortByAgeDesc, 'descending')
    } else {
        sortAndReset();
    }
}

const sortByPriceDesc = (a, b) => b.price - a.price
const sortByPriceAsc = (a, b) => a.price - b.price
const sortByAgeDesc = (a, b) => b.age - a.age
const sortByAgeAsc = (a, b) => a.age - b.age

const sortByType = (func, type) => {
    sortPriceButton.dataset.sortType = type;
    sortAgeButton.dataset.sortType = type;
    sortResetButton.dataset.sortType = type;
    const copy = cats.slice(0,9);
    copy.sort(func);
    catContainer.innerHTML = '';
    copy.forEach(createProductCard);
}

const initFormEventListeners = () => {
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

const showMessage = (text, className) => {
    const message = createElement("div", className);
    message.textContent = text;
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
};
const showError = (text) => showMessage(text, "error");
const showNotification = (text) => showMessage(text, "notification");

sortPriceButton.addEventListener('click', () => sortAndRender(cats, 'price'));
sortAgeButton.addEventListener('click', () => sortAndRender(cats, 'age'));
sortResetButton.addEventListener('click', () => sortAndRender(cats, 'reset'));

sortPriceButton.addEventListener('click', () => svgSortPrice.classList.toggle('rotated'));
sortAgeButton.addEventListener('click', () => svgSortAge.classList.toggle('rotated'));

const mobileMenuOpen = document.getElementById("mobileMenuOpen");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");

const toggleMobileMenu = () => {
    const isActive = mobileMenu.classList.toggle('active');
    mobileMenuClose.classList.toggle('active', isActive);
};

mobileMenuOpen.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

initRenderMoreEvents();
initFormEventListeners();