import React from 'react'

const Item = (props) => {

  const deleteHandler = () => {
    props.onDelete();// ye delte call kr diye updatedInput ka direct.
  };
   
  return (
    <React.Fragment>
      <li>{`${props.price} - ${props.name}`} <button onClick={deleteHandler}>Delete Product</button></li>
    </React.Fragment>
  )
}

export default Item
