import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      review: "The food is amazing and service is excellent. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Priya Das",
      review: "Loved the ambience and fresh taste. Will visit again for sure!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4
    },
    {
      name: "Suman Paul",
      review: "A great place for family dining. Must try their special dishes.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5
    },
  ];

  return (
    <section className="py-16 bg-black text-white" id="reviews">
      <h2 className="text-center text-3xl font-bold text-green-400 mb-10">
        What Our Customers Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {reviews.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-yellow-400">
                  {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
