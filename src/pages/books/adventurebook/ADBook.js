import React from "react";
import ADBookItem from "./ADBookItem";
import { ADBookItems } from "./ADBookList";

const ADBook = () => {
  return (
    <>
     <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>ADVENTURE</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {ADBookItems.map((item) => {
          return <ADBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default ADBook;