import React, { useEffect, useState } from "react";

const SalesCountdown = () => {
 // Use the current date as the event start date
 const startDate = new Date();
 // Calculate the event end date
 const endDate = new Date("2023-12-03T00:00:00Z");

 const calculateTimeLeft = () => {
  const difference = +endDate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
   timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
   };
  }
  return timeLeft;
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

 useEffect(() => {
  const timer = setInterval(() => {
   setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
 }, []);

 return (
  <div className="flex items-center gap-8 font-poppins">
   {timeLeft.days > 0 && (
    <div className="time">
     <p className="font-medium text-lg shadow-md">Days</p>
     <h3 className="font-bold text-2xl">{timeLeft.days}</h3>
    </div>
   )}
   {timeLeft.hours > 0 && (
    <div className="time">
     <p className="font-medium text-lg shadow-md">Hours</p>
     <h3 className="font-bold text-2xl">{timeLeft.hours}</h3>
    </div>
   )}
   {timeLeft.minutes > 0 && (
    <div className="time">
     <p className="font-medium text-lg shadow-md">Minutes</p>
     <h3 className="font-bold text-2xl">{timeLeft.minutes}</h3>
    </div>
   )}
   {timeLeft.seconds > 0 && (
    <div className="time">
     <p className="font-medium text-lg shadow-md">Seconds</p>
     <h3 className="font-bold text-2xl">{timeLeft.seconds}</h3>
    </div>
   )}
   {Object.keys(timeLeft).length === 0 && <p>Event has ended!</p>}
  </div>
 );
};

export default SalesCountdown;
