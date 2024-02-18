// title count
let titleCount = 1;
let totalPrice = 0;


const cards = document.querySelectorAll(".card");

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", function (){
    //   console.log('clicked');

    //   get the title
    const title = card.querySelector('h3').innerText;
    const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
    // console.log(price, title);


    const titleContainer = document.getElementById('title-container');
    const p = document.createElement('p');
    p.innerText = titleCount + '. ' + title;
    titleContainer.appendChild(p);
    titleCount++;

    // calculate
    totalPrice += price;
    // console.log(totalPrice);
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    
    }
    )
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function (){
//   console.log("clicked");

//   get the input field
const couponElement = document.getElementById('input-field').value;
// console.log(couponElement);
const couponCode = couponElement.split(' ').join('').toUpperCase();
console.log(couponCode);
if(totalPrice >= 200){
    // discount
   if(couponCode === 'SELL200'){
    const discountElement = document.getElementById('discountPrice');
    const discountAmount = totalPrice * 0.2;
    discountElement.innerText = discountAmount.toFixed(2);

    // total
    const restTotal = document.getElementById('total');
    restTotal.innerText = totalPrice - discountAmount.toFixed(2);
    document.getElementById('input-field').value = '';
   }else{
    alert('invalid')
    document.getElementById('input-field').value = '';
   }
}
else{
    alert('please purchase 200 money spend');
}
}
)