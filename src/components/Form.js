import React, { useState } from "react";

const Form = (props) => {
  const [productID, setProductID] = useState(''); // if we don't pass anything inside useState() like this we caught warning
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  const productIdChangeHandler = (event) => {
    setProductID(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: Math.random().toString(),
      productID: productID,
      price: price,
      name: name,
    };
    //localStorage.setItem("product", JSON.stringify(data));
    props.showData(data);

    setProductID('');
    setPrice('');
    setName('');
  };
  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="productID">Product ID</label>
          <input
            id="productID"
            type="number"
            value={productID}
            onChange={productIdChangeHandler}
          ></input>
          <label htmlFor="price">Selling Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={priceChangeHandler}
          ></input>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={nameChangeHandler}
          ></input>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
