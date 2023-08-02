import React from "react";
import SCBookItem from "./SCBookItem";
import { SCBookItems } from "./SCBookList";

const SCBook = () => {
  return (
    <>
     <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>SCI-FI</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {SCBookItems.map((item) => {
          return <SCBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default SCBook;