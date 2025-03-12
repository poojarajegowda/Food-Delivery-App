import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
 const [showIndex,setShowIndex]=useState(0)
  //creating own hook
  const resMenu = useRestaurantMenu(resId);



  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards)
  //   console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="font-bold p-2 text-2xl">{name}</h1>
      <h3 className="m-2 p-2">
        ★{avgRating} Rating •{costForTwoMessage}
      </h3>
      <p className="m-2 p-2">{cuisines.join(", ")}</p>
        {
            categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems={index===showIndex&&true}
              setShowIndex={()=>setShowIndex(index)}
                />
            ))
        }
    </div>
  );
};

export default RestaurantMenu;
