import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
// console.log(data)
// const[showItems,setShowItems]=useState(false);

const handleClick=()=>{
setShowIndex()
}

  return (
    <div className="w-6/12 m-auto bg-gray-200 p-4 my-4 shadow-lg cursor-pointer " onClick={handleClick}>
      <div className="flex justify-between" >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⌄ </span>
      </div>

      { showItems && <ItemsList key={data.title} items={data.itemCards}  />}
    </div>
  );
};
export default RestaurantCategory;
