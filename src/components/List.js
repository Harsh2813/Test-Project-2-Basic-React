import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <React.Fragment>
      <div>
        <h2>Products</h2>
        <ul>
          {props.data.map((item) => {// map array ke each index jisme object h usme iterate karega aur each obj ke liye Item compo call hoga aur each item ki properties ko pass kiye with key and onDelete fn bhi usi particular item ke liye wo perticular item ko pass krke taki updateInput.js me delete fn me use kr sake filter krne ke liye array ke sare items(obj) se is perticular item(obj) ko jo bhi iske equal ni hoga sb rahenge filter hoke return ho jayeenge setData me aur state update hogi pr ye wala bs gayb ho jayega.
            return (
              <Item
                key={item.id}
                productId={item.productId}
                price={item.price}
                name={item.name}
                onDelete={() => props.onDelete(item)} 
              />
            )
          })}
        </ul>{/**ye onDelete me hmne props.onDelete ko hi call ya access kiya perticular item pass krke aur arrow fn se call bhi kiye tabhi correct work kr rha tha mtlb fn ko call krke pass kr diye with params so that filter and targeted item ko track kr paye */}
        
        <h3>{`Total Value worth of Products : Rs ${props.totalPrice}`}</h3>
      </div>
    </React.Fragment>
  );
};

export default List;
