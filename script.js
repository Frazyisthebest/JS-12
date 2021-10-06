const Timer = document.querySelector('.header__timer span');

let time = 50

function animatedLogo() {
    Timer.innerHTML++
    setTimeout(() => animatedLogo(), time);

if(Timer.innerHTML <= 50){
    time = 100;
    // animatedLogo(Timer);
}else if(Timer.innerHTML > 50 && Timer.innerHTML <= 75){
    time = 200;
    // animatedLogo(Timer);
}else if(Timer.innerHTML > 75 && Timer.innerHTML < 100){
    time = 400;
    // animatedLogo(Timer);
}else if(Timer.innerHTML > 100){
    time = 1000000;
    Timer.innerHTML = 100;
}
}

animatedLogo()

const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 600,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.price * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 800,
        amount: 0,
        get Sum() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.price * this.amount
        }
    }
}


const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 5
    },
    cheese: {
        name: 'Сыр',
        price: 800,
        kcall: 30
    }
}



const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');


btnPlusOrMinus.forEach(function (btn) {
    btn.addEventListener('click', function () {
        plusOrminus(this)
    })
})


function plusOrminus(element) {
    /* 
        closest() - метод объекта. Который подключается и получает родителя того элемента который указали
        getAttribute() - Получает аттрибут элемента с HTML
    */

    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        productAmount = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementData = element.getAttribute('data-symbol');

    if (elementData == '+') {
        product[parentId].amount++;
    } else if (elementData == '-' && product[parentId].amount > 0) {
        product[parentId].amount--;
    }

    productAmount.innerHTML = product[parentId].amount;
}

// const timer = document.querySelector('.header__timer span')

// timer.innerHTML = '0';

// for(let i = 0; i < 100; i++){
//     timer 
// }

// if (timer == 20) {
    // Через style хотел добавить в css в класс .header__timer transition: 2,3 sec смотря на число
// }


