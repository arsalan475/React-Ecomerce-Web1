import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopingCard from "./ShopingCard";
import LoadingComponent from "./Loading";

export default function ProductOverview() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(function () {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data ? (
        <div
          aria-disabled
          className="mt-24 w-full flex flex-col items-center gap-10 flex-wrap justify-center"
        >
          <h1 className="text-center text-2xl sm:text-5xl md:text-6xl font-semibold">
            THANKS FOR CHOSING OUR PRODUCT{" "}
          </h1>
          <ShopingCard
            id={data.id}
            left={Math.floor(Math.random() * 30 + 1)}
            description={data.description.slice(0, 50)}
            title={data.title.slice(0, 30)}
            price={data.price}
            img={data.image}
          />

          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl  font-semibold">
            You Are Just One Step Away From Getting Aweosome Discounts
          </h1>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
