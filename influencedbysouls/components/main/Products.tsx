import React from "react";
import Productcards from "../sub/Productcards";

const Products = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:mt-96"
      id="products"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400 py-10">
        Products
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Productcards
          src="/bOOK.png"
          title="Get your Book"
          description="Organize your ideas here, be consistent with your passions, your progress will inspire countless souls worldwide. I belive in you."
        />
        <Productcards
          src="/Snapshot_4.png"
          title="Get your appointment"
          description="We are all students and teachers in the school of life. Let's share our lessons and learn from each other's wisdom. Team up with me!"
        />
        <Productcards
          src="/snapshot_6.png"
          title="Write your Legacy"
          description="Each day, a blank page awaits your story. Fill it with courage, kindness, and a dash of adventure. You never know who your words might inspire."
        />
      </div>
    </div>
  );
};

export default Products;