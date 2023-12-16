import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

const UpdateInput = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');// this state is for total price worth

  // we used useEffect to Load data from localStorage when the component mounts or page reloads so data don't go
  useEffect(() => {
    // Retrieve and update data from local storage
    const storedData = JSON.parse(localStorage.getItem("products")) || [];//agar data ni hua to empty array milega
    setData(storedData);// ye storedData jb pura useEffect complete hoga to data me set ho jayega taki state reset na ho jaye page reload hone ke baad.

    // Calculate total price when loading data by --------------Reduce Method--------------------
    //reduce method array me sare elements of iterate karke single result return krta h and args me pehla argument callback fn leta h and second me initial value jo 0 h yha. callback fn me total and item param liya item: This is the current element being processed in the array (storedData) and total wo result hoga jisme item add krta ja rha.
    const calculatedTotal = storedData.reduce((total, item) => {
      return total + parseInt(item.price, 10);//each iteration me item storedData array ki price integer me convert krke add kr rhi total me base 10 leke and last me return kr diye pura.
    }, 0);
    setTotalPrice(calculatedTotal);// jo bhi price calculate hui set kr diye aur useEffect ne price aur data diya
  }, []);

  const addDataHandler = (currentData) => {
    setData((prevData) => {
      const newData = [...prevData, currentData,]; 
      /*const oldData = [...prevData]; return [currentData, oldData];  this commented line we were using before this uncommented code and that's why we facing error for unique key. What we werer doing is- In the commented code, the setData function is used to update the state by combining the new item with the old data, hm sirf copy kiye oldData me prevData aur combine krke return kr diye array. But In the current uncommented code, the setData function is used to replace the entire array with a new array containing the new item and old data. newData me replace kr diye pura combined array prevData aur current data ka taki ye new replacement array newData return ho aur unique id me problem na ho*/
      localStorage.setItem("products", JSON.stringify(newData));//jaise newData me prevData aur current data add hote gye waise ho localStorage me bhi products key me sare array update hote gye newData array se
      return newData; // ab ye newData data ho jayega
    });
    setTotalPrice((prevTotal) => prevTotal + parseInt(currentData.price, 10));//starting me preVtotal to kuchh ni hoga to first time me currentData ka price integer me convert hoke totalPrice state me set hoga fir next time se ye prevTotal me sari last added total value ajayengi aur current bhi add hoti jayegi, .price isiliye because ye setTotalPrice hmne addDataHandler ek andar use kiye jo currentData as param obj le rhi Form compo se.
  };
  //ye param me deletedItem perticular item ke liye h because List.js me hm each item ke liye jo data array me h to Item.js ko call kiye aur usi perticular item ke liye ye delete fn call kiye current item ko pass krke
  const deleteHandler = (deletedItem) => {
    setData((prevData) => {//ye delete fn set karega state delete hone me
      const newData = prevData.filter((item) => item !== deletedItem);//jo prevData h usme filter method lagaye aur filter method array me per index ya object ke liye chalta h same as map, to item se denote kiye each obj ya item ko of array and check kiye ki jo item h wo us item ke equal na ho jis ke liye delete call hua to wo sare jo equal ni h wo filter return kr dega in a new or updated array, to jis perticular item ke liye delte call hua (List.js me dekho each item ke liye map chalake delete diye), usko chhod ke sare newData me set ho jaye. to hm yha id se ni perticular item se check kiye jo match na ho usko filter rakh liye newData me
      localStorage.setItem("products", JSON.stringify(newData));// aur updated newData ko set kr diye localStorage me to obvious wo deleted item bhi localStorage me ni hoga products only key h isiliye remove ni liye ni to pura localStorage array hi remove ho jata same key h sabke liye to
      return newData;
    });
    setTotalPrice((prevTotal) => prevTotal - parseInt(deletedItem.price, 10));// aur jo perticular item tha jisko liye h as a param yha pe us item(object) ke price property ki value ko integer me covert krke delete kiye aur totalPrice me set kr diye same logic as we added for totalPrice above.
  };

  return (
    <React.Fragment>
      <Form showData={addDataHandler} />
      <List data={data} onDelete={deleteHandler} totalPrice={totalPrice} />
    </React.Fragment>
  );
};

export default UpdateInput;
