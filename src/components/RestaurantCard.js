import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwoMessage,
      avgRating
      
    }= resData?.card.card.info

     


    return (
      <div className=" mx-8 my-4 p-4 w-64 h-[400px] bg-gray-100 rounded-4xl hover:bg-gray-200 z-10" >
        <img className="w-[100%] h-44 rounded-4xl"src={ CDN_URL +cloudinaryImageId } />
        <h3 className="font-bold py-2">{name} </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="font-bold py-2">{costForTwoMessage}</h4>
        <p className="font-bold"> ★ {avgRating}</p>
      
       
        {/* <p>{resData.card.card.info.sla.slaString}</p> */}
      </div>
    );
  };


  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
        <label className="absolute bg-black text-white p-1 m-4 rounded-lg ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
      )
     
    }
  }
  export default RestaurantCard