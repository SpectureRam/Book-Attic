import React from "react";
import HBookItem from "./HBookItem";
import { HBookItems } from "./HBookList";

const HBook = () => {
  return (
    <>
     <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>HORROR</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {HBookItems.map((item) => {
          return <HBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default HBook;