import { MENU_URL } from "./constants";
import { useEffect,useState } from "react";

const useRestaurantMenu=(resId)=>{

const[resMenu,setResMenu]=useState(null)
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=async() =>{
           const data=await fetch(MENU_URL+resId) 
           const json=await data.json();
           setResMenu(json.data)
           

    }
    return resMenu
      
}
export default useRestaurantMenu