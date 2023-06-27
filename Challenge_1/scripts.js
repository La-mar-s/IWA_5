const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let shippingItems = shoes + toys + shirts + batteries + pens;

let shipping;
let currency;

let customers = "1";
let country = "RSA";

if (country === "RSA") {
  shipping = 400;
  currency = "R";
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

//clue no.1 : >=
//clue no.2 : amount R1000 $60
//clue no.3 : location RSA NAM
//clue no.4 : shipping free if RSA or NAM and price
//clue no.5 : customers = 1
//clue no.6 : console warning if more than 1 customer

if (
  (shippingItems >= 1000 && country === "RSA") ||
  (shippingItems >= 60 && country === "NAM")
) {
  if (customers === "1") {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

country === "NK"
  ? console.log(BANNED_WARNING)
  : console.log("Price:", currency, shippingItems + shipping);
