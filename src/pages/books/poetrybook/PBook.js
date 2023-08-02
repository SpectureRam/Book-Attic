import React from "react";
import PBookItem from "./PBookItem";
import { PBookItems } from "./PBookList";

const PBook = () => {
  return (
    <>
     <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>POETRY</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {PBookItems.map((item) => {
          return <PBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default PBook;