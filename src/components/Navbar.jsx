import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE BOOKING
  //   const handleBooking = () => {
  //     if (!name || !selectedDate || !selectedTime || !email || !guests) {
  //       setMessage("Please fill all details before confirming.");
  //       return;
  //     }

  //     setMessage(
  //       `Booking Confirmed!
  // Name: ${name}
  // Guests: ${guests}
  // Date: ${selectedDate}
  // Time: ${selectedTime}
  // Confirmation sent to: ${email}`
  //     );
  //   };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !selectedDate || !selectedTime || !email || !guests) {
      toast.error("Please fill all details before confirming.");
      return;
    }

    setLoading(true);


    try {
      const templateVars = {
        name: name,
        email: email,
        date: selectedDate,
        time: selectedTime,
        guests: guests,
        reply_to: email,
      };
      //Email to restaurant
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateVars,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      //email to customer
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_CUSTOMER_TEMPLATE_ID,
        {
          name,
          email,
          date: selectedDate,
          time: selectedTime,
          guests,
          client_email: email, // THIS decides the receiver
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Table booked Successfully");

      setName("");
      setEmail("");
      setGuests("");
      setSelectedDate("");
      setSelectedTime("");
      setIsOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="flex justify-between p-4 bg-black sticky top-0 z-50 shadow-md">
      <h1 className="text-3xl font-bold text-green-300 tracking-wide">
        GreenLeaf
      </h1>

      {/* NAV LINKS */}
      <ul className="hidden sm:flex items-center justify-center gap-10 text-lg">
        <Link
          to="/"
          className="cursor-pointer hover:text-green-400 duration-200"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="cursor-pointer hover:text-green-400 duration-200"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className="cursor-pointer hover:text-green-400 duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer hover:text-green-400 duration-200"
        >
          Contact
        </Link>
      </ul>

      {/* BOOK BUTTON */}
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2 bg-green-400 text-black rounded-lg font-semibold hover:bg-green-500 hover:scale-105 active:scale-95 duration-200 transition-all"
        >
          Book Table
        </button>
      </div>

      {/* POPUP */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-xl text-black">
            <h2 className="text-2xl font-bold mb-4 text-center">Book Table</h2>

            {/* NAME */}
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border p-2 rounded mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* EMAIL */}
            <label className="block mb-1 font-semibold">Enter Email</label>
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="w-full border p-2 rounded mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* GUESTS */}
            <label className="block mb-1 font-semibold">Guests</label>
            <input
              type="number"
              placeholder="1"
              className="w-full border p-2 rounded mb-3"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />

            {/* DATE */}
            <label className="block mb-1 font-semibold">Select Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded mb-3"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            {/* TIME */}
            <label className="block mb-1 font-semibold">Select Time</label>
            <input
              type="time"
              className="w-full border p-2 rounded mb-3"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />

            {/* MESSAGE */}
            {message && (
              <p className="text-sm bg-gray-200 p-2 rounded mb-3">{message}</p>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={handleBooking}
                disabled={loading}
                className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Processing..." : "Confirm"}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
