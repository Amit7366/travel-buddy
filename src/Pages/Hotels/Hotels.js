import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HotelCard from "./HotelCard";

const Hotels = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const searchHotel = (data) => {
    const hotelData = {
      name: data.name,
      money: data.money,
    };
    setLoading(true);
    fetch(
      `https://tour-travel-server-two.vercel.app/hotels/search?name=${data.name}&money=${data.money}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
    reset();
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://tour-travel-server-two.vercel.app/hotels`)
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
  }, [setServices]);
  if (loading) {
    return <h6>Loading...</h6>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-5 py-24 md:py-30">
      <form onSubmit={handleSubmit(searchHotel)} className="flex flex-col  md:flex-row  bg-white text-white w-1/2 mx-auto py-3 rounded-md  items-center justify-center">
      <div className="text-left px-2 my-2">
        <input
          type="text"
          {...register('name')}
          placeholder="City/Hotel/Resort/Area"
          className="bg-transparent border-2 border-red-500 w-full text-black focus:outline-none rounded-md py-3 text-xs pl-2"
        />
      </div>
      <div className="text-left px-2 my-2">
        <input
          type="number"
          {...register('money')}
          
          placeholder="Budget"
          className="bg-transparent border-2 border-red-500 w-full text-black focus:outline-none rounded-md py-3 text-xs pl-2"
        />
      </div>
      <div className="text-left px-2 my-2">
        <button type="submit" className="bg-white border-2 border-red-500 text-red-500 font-[Poppins] duration-500 px-6 py-2 hover:bg-red-500 hover:text-white rounded">Search</button>
      </div>
    </form>
      {loading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="mx-auto flex flex-col max-w-[1440px]">
          {services.slice(0, 4).map((service, idx) => (
            <HotelCard key={idx} service={service}></HotelCard>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Hotels;
