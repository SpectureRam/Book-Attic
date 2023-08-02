import React from "react";
import FBookItem from "./FBookItem";
import { FBookItems } from "./FBookList";

const FBook = () => {
  return (
    <>
     <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>FICTION</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {FBookItems.map((item) => {
          return <FBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default FBook;