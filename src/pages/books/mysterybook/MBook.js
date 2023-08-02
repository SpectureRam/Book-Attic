import React from "react";
import MBookItem from "./MBookItem";
import { MBookItems } from "./MBookList";

const MBook = () => {
  return (
    <>
    <h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:"60px",marginTop:"2%"}}>MYSTERY</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-15 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {MBookItems.map((item) => {
          return <MBookItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default MBook;