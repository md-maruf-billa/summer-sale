
// ---------Common Function hare--------

// 1:----using id to get element
function get_element_by_ID(elementID) {
    return document.getElementById(elementID);

}



// 2:---Using id to set inner text----

function set_inner_Text(elementID, value) {
    document.getElementById(elementID).innerText = value;
}


// ----------all card




let counterPrice = 0;
let counter = 1;
const allCard = document.querySelectorAll('.card');
for (const card of allCard) {
    card.addEventListener('click', function () {
        // Title part
        let screen = get_element_by_ID('title-container');
        let price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);


        let title = card.querySelector('h3').innerText;
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText =counter +": "+ title;
        const p2 = document.createElement("p");
        p2.innerText = "$ "+price;
        li.appendChild(p);
        li.appendChild(p2);
        screen.appendChild(li);



        // Price part
        counterPrice += price;
        set_inner_Text('totalPrice', counterPrice);
        counter++


        set_inner_Text('total', counterPrice);
    })
}



// Discount section


document.getElementById('apply-btn').addEventListener('click', function () {
    let lastScreen = parseFloat(get_element_by_ID('totalPrice').innerText);

    let user_input = get_element_by_ID('input-field').value.split(' ').join('').toUpperCase();
    let promo = get_element_by_ID('promo').innerText.split(' ').join('').toUpperCase();
    console.log(promo)

    if (lastScreen < 200) {
        alert("Buy mor for using promo code.....")
        
    }
    else if (user_input === promo) {
        let result = (lastScreen * 0.2).toFixed(2);
        set_inner_Text('discountPrice', result);
        set_inner_Text('total',lastScreen-result)
    }
    else {
        set_inner_Text('discountPrice','Invalid discount')
    }
    get_element_by_ID('input-field').value = ""
})


