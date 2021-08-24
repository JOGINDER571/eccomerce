
      let addCart=document.getElementsByClassName('add_cart');
      let main_container=document.getElementsByTagName('tbody')[0]
      let quantity_field=document.getElementsByClassName('num');
      let removeBtn=document.getElementsByClassName('removebtn');
      for(let i=0;i<addCart.length;i++){
        addCart[i].addEventListener('click',addToCart);
      }

      function addToCart(event){
        let btn=event.target;
        let btnp=btn.parentElement;
        let grandp=btnp.parentElement;
        let grandpp=grandp.parentElement;
        let grandppChild=grandpp.children[0];
        let itemName=grandp.children[0].innerText;
        let itemPrice=grandp.children[2].innerText;
        let itemImg=grandppChild.children[0].src;
        let itemContainer=document.createElement('tr');
        itemContainer.innerHTML=`
        <td><input class="check" type="checkbox"></td>
        <td><img  src="${itemImg}" width="50" alt=""></td>
        <td>
          <h3>${itemName}</h3>
        </td>
        <td class="item-price"><h3>${itemPrice}</h3></td>
        <td><input type = 'number' class="num" value = '1'></td>
        <td class="total-price"><h3>${itemPrice}</h3></td>
        <td><button class="removebtn" type="button">Remove</button></td>`
        main_container.append(itemContainer);
        for(let i=0;i<quantity_field.length;i++){
          quantity_field[i].addEventListener('change',updateTotal);
        }
        for(let i=0;i<removeBtn.length;i++){
          removeBtn[i].addEventListener('click',removeitem);
        }
        total();
      }
      function updateTotal(event){
        let no_of_items=event.target;
        let no_of_items_parent=no_of_items.parentElement.parentElement;
        let price_field=no_of_items_parent.getElementsByClassName('item-price')[0]
        let total_price_field=no_of_items_parent.getElementsByClassName('total-price')[0]
        let price_field_content=price_field.children[0].innerText.replace('$','');
        total_price_field.children[0].innerText='$'+ no_of_items.value*price_field_content;

        if(isNaN(no_of_items.value) || no_of_items.value<=1){
          no_of_items.value=1;
        }

        total()
      }
      function total(){
        let totalValue=0;
        grandtotal=document.getElementsByClassName('grand-total')[0];
        totalprice=document.getElementsByClassName('total-price');
        for(let i=0;i<totalprice.length;i++){
          total_price_content=Number(totalprice[i].innerText.replace('$',''));
          totalValue+=total_price_content;
        }
        
        grandtotal.children[0].innerText='$'+totalValue;
      }
      function removeitem(event){
        remove_Btn=event.target;
        remove_Btngrandp=remove_Btn.parentElement.parentElement;
        remove_Btngrandp.remove();
        total();
      }

