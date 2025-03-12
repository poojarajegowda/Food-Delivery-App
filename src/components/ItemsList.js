import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {


  return items.map((items) => (
    <div key={items?.card?.info?.id} className="flex justify-between p-4 my-4 shadow-lg bg-white ">
      <div  className=" text-left">
        <div>
          <span>{items?.card?.info?.name}</span>
          <br></br>
          <span className="font-bold">
            {" "}
            ₹{" "}
            {items?.card?.info?.price / 100 ||
              items?.card?.info?.defaultPrice / 100}
          </span>
        </div>
        {items?.card?.info?.ratings?.aggregatedRating?.rating?(
           <span className="text-green-700">★ 
       
           {items?.card?.info?.ratings?.aggregatedRating?.rating}
         </span>):null
        }
       
      </div>
      <div>
      {items?.card?.info?.imageId ? (
  <img
    className="w-24 h-20"
    src={CDN_URL + items.card.info.imageId}
    alt="Item Image"
  />
) : null}
        
        <button className="bg-gray-500 text-black rounded-lg p-1 m-1">Add+</button>
      </div>
    </div>
  ));
};
export default ItemsList;
//
