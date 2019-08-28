const spenging_threshold = 200;
const tax_rate = 0.09;
const phone_price = 99.99;
const accessory_price = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
  return amount * tax_rate;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

//keep buying phone while you still have money
while (amount < bank_balance) {
  amount = amount + phone_price;

  if (amount < spenging_threshold) {
    amount = amount + accessory_price;
  }
}

amount = amount + calculateTax(amount);

console.log("your purchase: " + formatAmount(amount));

if (amount > bank_balance) {
  console.log(" You can't afford this purchase :(");
}
