//Memory Cost Calculation
function memoryCost(price, builtIn) {
    const memoryPlus = document.getElementById('memory-cost');
    //check that is this have default price? 
    if (builtIn == true) {
        memoryPlus.innerText = price;
    }
    else {
        memoryPlus.innerText = price;
    }

    //call a function to calculate total price in this event
    calculateTotal();
}

//Storage cost calculation
function storageCost(price, builtIn) {
    const storagePlus = document.getElementById('storage-cost');
    //check that is this have default price? 
    if (builtIn == true) {
        storagePlus.innerText = 0;
    }
    else {
        storagePlus.innerText = price;
    }

    //call a function to calculate total price in this event
    calculateTotal();
}

//Delivey cost calculation
function deliveryCost(price, builtIn) {
    const deliveryPlus = document.getElementById('delivery-cost');
    //check that is this have default delivery cost? 
    if (builtIn == true) {
        deliveryPlus.innerText = price;
    }
    else {
        deliveryPlus.innerText = price;
    }

    //call a function to calculate total price in this event
    calculateTotal();
}

//calculate total price by getting extra added prices=========
function calculateTotal() {
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-cost');
    const storagePrice = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-cost');
    const finalTotalPrice = document.getElementById('final-total-cost');

    //Calculate the total price by sum of all changes price===
    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCost.innerText);

    //calculate the Final total price by sum of all changes price===
    finalTotalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCost.innerText);
}


//Calculat promo code and reduce the total ammount of purchase===
function calculatePromo(percent) {
    const promocode = document.getElementById('coupon');
    const finalTotalPrice = document.getElementById('final-total-cost');
    const code = 'stevekaku'; //define the promocode

    //checking the coupon code with case insensitive===
    if (promocode.value.toLowerCase() == code.toLowerCase()) {
        const promo = (percent / 100) * finalTotalPrice.innerText;
        finalTotalPrice.innerText = finalTotalPrice.innerText - promo;
        promocode.value = '';
    }
}