// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
/*La funció que necessites completar es diu buy(), que rep l'identificador del producte per afegir. 
Has de localitzar el producte utilitzant aquest identificador rebut en l'array products, per després incloure'l a l'array cart.*/
function buy(id) {
  const productoAdd = products.find((product) => product.id === id);
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  if (productoAdd) {
    const productoExist = cart.find((item) => item.id === id);
    if (productoExist) {
      // Si el producto ya está en el carrito, incrementar quantity
      productoExist.quantity++;
      total++;
      console.log("cart: " , cart);
      console.log("total: " , total);
    } else {
      // Si no está, lo agrego con quantity inicial en 1
      cart.push({ ...productoAdd, quantity: 1 });
      total++;
      console.log("cart: " , cart);
      console.log("total: " , total);
    }
    console.log(`Producto "${productoAdd.name}" agregado al carrito.`);
  } else {
    console.log(`El producto con ID ${id} no fue encontrado.`);
  }

  // Llamar a las funciones para aplicar promociones y actualizar el carrito para que el usuario lo vea
  applyPromotionsCart();
  printCart();
}

// Exercise 2
function cleanCart() {
    const confirmMsg = "¿Estás seguro/a de vaciar el carrito? Esta acción no se puede deshacer.";
    const userConfirmed = confirm(confirmMsg);
  // Reinicializo el cart vaciándolo con el array cart vacío
  if(userConfirmed){
  cart = [];
  total = 0; // Reinicializo el total 

  // Lógica adicional para actualizar la interfaz de usuario si es necesario
  console.log("El carrito se ha vaciado correctamente");
  printCart(); // Actualizo la visualización del carrito para el usuario
  }
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
