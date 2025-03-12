import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import { useState, useEffect,useContext } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);

  const [searchButton, setSearchButton] = useState("");
  const{LoggedInUser,setUserName}=useContext(UserContext)

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9124323&lng=77.57087229999999&str=restaurants&trackingId=7d9b519d-0598-d583-bce4-b5f6a39fcc5f&submitAction=ENTER&queryUniqueId=e910bd49-c203-0ed3-a121-6f0cbab8dfb6"
    );
    const json = await data.json();
    // console.log(json);
    const validResto =
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
      //  console.log(validResto)
    setListOfResto(validResto);
    setFilteredResto(validResto);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!! Check the internet connectivity</h1>
    );

  if (listOfResto.length === 0) {
    return <Shimmer />;
  }
   



  return (
    <div className="body">
      <div className="flex justify-between p-4 m-4">
        <div className="search">
          <input
            type="text"
            className="border border-s-black w-70 bg-gray-200 px-2 py-1 outline"
            placeholder="Search restaurant"
            value={searchButton}
            onChange={(e) => setSearchButton(e.target.value)}
          ></input>

          <button
            className="border border-s-black m-4 px-4 py-1 cursor-pointer rounded-lg bg-black text-white"
            onClick={() => {
              const filteredSearch = listOfResto.filter((res) => {
                return res?.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(searchButton.toLowerCase());
              });
              filteredSearch.length > 0
                ? setFilteredResto(filteredSearch)
                : alert("Item not found");
            }}
          >
            Search
          </button>
        </div>


        <div>
          <label>UserName</label>
       <input className="p-2 border-s-black" type="text" 
       value={LoggedInUser}
       onChange={(e)=>
       setUserName(e.target.value)
       }
         ></input>
        </div>


        <button
          className="border border-s-black m-4 px-4 cursor-pointer  bg-gray-200"
          onClick={() => {
            const filteredList = listOfResto.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setFilteredResto(filteredList);
          }}
        >
          Top rated Resto
        </button>
      </div>

      <div className="flex flex-wrap mx-10 p-6 border border-s-black">
        {filteredResto.map((resto) => (
          <Link
            key={resto.card.card.info.id}
            to={"/restaurant/" + resto.card.card.info.id}
          >
            {resto.card.card.info.promoted ? (
              <RestaurantPromoted resData={resto} />
            ) : (
              <RestaurantCard resData={resto} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
