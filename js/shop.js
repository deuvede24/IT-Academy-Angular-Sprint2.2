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
      console.log("cart: ", cart);
      console.log("total: ", total);
    } else {
      // Si no está, lo agrego con quantity inicial en 1
      cart.push({ ...productoAdd, quantity: 1 });
      total++;
      console.log("cart: ", cart);
      console.log("total: ", total);
    }
    console.log(`Producto "${productoAdd.name}" agregado al carrito.`);
  } else {
    console.log(`El producto con ID ${id} no fue encontrado.`);
  }

  // Llamar a las funciones para aplicar promociones y actualizar el carrito para que el usuario lo vea

  applyPromotionsCart();
  calculateTotal();
  printCart();
}

// Exercise 2
function cleanCart() {
  const confirmMsg =
    "¿Estás seguro/a de vaciar el carrito? Esta acción no se puede deshacer.";
  const userConfirmed = confirm(confirmMsg);
  // Reinicializo el cart vaciándolo con el array cart vacío
  if (userConfirmed) {
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
  /*let total = 0;
      for (let i = 0; i < cart.length; i++) total += total;*/
  let totalPrice = 0;
  //applyPromotionsCart()

  // Recorrer el array cart para calcular el precio total
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  // Actualizar la variable total con el precio total calculado
  let totalCart = totalPrice;
  console.log("el totalPrice es: ", totalPrice);

  // Mostrar el precio total en la consola o hacer otras operaciones si es necesario
  console.log(`Total price of the cart: $${totalCart}`);

  // Llamar a otras funciones o realizar otras acciones necesarias después del cálculo
  // Por ejemplo, actualizar la interfaz de usuario con el nuevo total
  printCart();
}

// Exercise 4
function applyPromotionsCart() {
  cart.forEach((item) => {
    let productCart = products.find((product) => product.id === item.id);

    if (
      productCart &&
      productCart.offer &&
      item.quantity >= productCart.offer.number
    ) {
      //si aplico para dto
      let productTotalPrice = item.price * item.quantity;
      let productDiscount =
        (productTotalPrice * productCart.offer.percent) / 100;
      item.subtotalWithDiscount = productTotalPrice - productDiscount;
      console.log(
        "Promotions applied successfully.",
        item.subtotalWithDiscount
      );
    } else {
      item.subtotalWithDiscount = item.price * item.quantity;
      console.log("total No discount: ", item.subtotalWithDiscount);
    }
  });

  //applyPromotionsCart()
  printCart();
}

// Apply promotions to each item in the array "cart"
/*cart.forEach((item) => {
    if (
      //item.type === "grocery" &&
      item.name === "cooking oil" &&
      item.quantity >= 3
    ) {
      // Aplicar descuento del 20% para ampolles d'oli si se compran 3 o más
      item.subtotalWithDiscount = item.price * item.quantity * 0.8;
      console.log("Promotions OLI.");
    } else if (item.name === "Instant cupcake mixture" && item.quantity >= 10) {
      // Aplicar descuento del 30% para productes per a pastissos si se compran 10 o más
      console.log("Promotions MIXTURE.");
      item.subtotalWithDiscount = item.price * item.quantity * 0.7;
    } else {
      // Si no aplica ninguna promoción, subtotalWithDiscount se mantiene igual que el subtotal
      item.subtotalWithDiscount = item.price * item.quantity;
    }
  });

  console.log("Promotions applied successfully.");

  printCart(); // Actualizar la visualización del carrito después de aplicar las promociones*/

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  // Obtener referencias del DOM
  const cartList = document.getElementById("cart_list");
  const showTotal = document.getElementById("total_price");
  const countProduct = document.getElementById("count_product");

  // Limpiar el contenido previo del carrito
  cartList.innerHTML = "";

  // Variables para construir table de html, calcular el total y el contador del cart
  let cartTableHTML = "";
  let total = 0;
  let productCount = 0;

  cart.forEach((item) => {
    //Iterar sobre cada elemento
    // Construir la fila HTML para cada elemento del carrito
    cartTableHTML += `
            <tr>
                <th scope="row">${item.name}</th>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${item.subtotalWithDiscount.toFixed(2)}</td>
                <td><button type="button" onclick="removeFromCart(${
                  item.id
                })" class="btn btn-danger btn-sm">Remove</button></td>
            </tr>
        `;

    // Actualizar el total del carrito y contar productos del cart
    total += item.subtotalWithDiscount;
    productCount += item.quantity;
  });

  // Insertar el HTML generado
  cartList.innerHTML = cartTableHTML;

  // Mostrar el total y la cantidad de productos en el DOM
  //showTotal.innerHTML = `$${total.toFixed(2)}`;
  showTotal.innerHTML = "$" + total.toFixed(2);
  countProduct.innerHTML = productCount.toString();

}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  //Buscar índice del item a eliminar
  let index = cart.findIndex((item) => item.id === id);

  if (index !== -1) {
    // El producto se encontró en el cart
    let item = cart[index];

    /*if (item.quantity > 1) {
      // Si quantity > 1, decrementar en 1 unidad
      item.quantity--;
    } else {
      // Si quantity = 1, eliminar item del cart 
      cart.splice(index, 1);
    }*/

    item.quantity > 1 ? item.quantity-- : cart.splice(index, 1);

    console.log(`Producto "${item.name}" eliminado del cart.`);
  } else {
    console.log(`Producto con ${id} no se encuentra en el cart.`);
  }

  // Llamamos a las funciones para aplicar promociones, modificar el total y actualizar el cart
  applyPromotionsCart();
  calculateTotal();
  printCart();
}

function open_modal() {
  printCart();
}
