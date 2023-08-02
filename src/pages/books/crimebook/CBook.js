import React from "react";
import CBookItem from "./CBookItem";
import { CBookItems } from "./CBookList";

const CBook = () => {
  return (
    <>
       <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>CRIME</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {CBookItems.map((item) => {
          return <CBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default CBook;