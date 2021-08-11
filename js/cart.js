/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  $("#table_of_items tr").remove(); 

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  
  tbodyElement=table.getElementsByTagName('tbody')[0];


  let tableEle = document.createElement('table');
  tbodyElement.appendChild(tableEle);

  let tablehead= document.createElement('thead');
  tableEle.appendChild(tablehead);

  for (let i=0;i<Cart.items.length;i++){

    let tr=document.createElement('tr');
    tr.textContent=`${items}`;
    tablehead.appendChild(tr);
  }

  let td=document.createElement('td');
  td.textContent=`X ${Cart.item[i].removeItem}`;
  tr.appendChild(td);

  let td1=document.createElement('td');
  td1.textContent=`${CartItem.items[i].quantity}`;
  tr.appendChild(td1);

  let td2=document.createElement('td');
  td2.textContent=`${Cart.items[i].item}`;
  tr.appendChild(td2);



}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(i);
  cart.saveToLocalStorage();

}

// This will initialize the page and draw the cart on screen
renderCart();

