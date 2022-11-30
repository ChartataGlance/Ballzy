var rmvBtn =  document.getElementsByClassName('btn-danger')
// console.log(rmvBtn);
for(var i = 0; i < rmvBtn.length; i++)
{
   var button = rmvBtn[i]
   button.addEventListener('click', function(event) 
   {
      // console.log('clicked');
      var buttonclicked = event.target
      buttonclicked.parentElement.parentElement.remove()
          updateCartTotal()
   })
}

function updateCartTotal()
{
 
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
   // console.log(cartRows);

   for ( var i = 0; 
      i < cartRows.length; i++)
   {
      var cartRow = cartRows[1]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var qtyElement   = cartRow.getElementsByClassName('cart-qty-input')[0]
      
      console.log(priceElement, qtyElement);
      var price = priceElement.innerText.replace

   }
} 

