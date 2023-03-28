import { NewItemPropsInfo } from "@/pages";
import { TIMEOUT } from "dns";
import React, { useEffect, useState } from "react" 
import Alert from "../MessageAlert/Alert";
import NewItem from "../new-item/NewItem";

interface DashboardProps{
    items:NewItemPropsInfo[]
}

const Dashboard =  ({items}:DashboardProps) => {
    const [isMessageDisplayed,setIsMessageDisplayed] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setIsMessageDisplayed(true);
        }, 3000);
      }, []);
    
      useEffect(() => {
        setTimeout(() => {
          if (isMessageDisplayed) {
            setIsMessageDisplayed(false);
          }
        }, 6000);
      }, [isMessageDisplayed]);
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
      {isMessageDisplayed ? <Alert/> : null}      
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div className="flex flex-wrap -m-4">
        {
            items.map((item,index)=>{
                return <NewItem key={index} item={item}/>
            })}
    </div>
    <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
  </div>
</section>
    )
}
export default Dashboard;