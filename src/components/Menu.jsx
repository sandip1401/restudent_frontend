import React from "react";

export default function Menu() {

  const starters = [
    { name: "Garlic Bread", price: "₹120", img: "https://www.foodandwine.com/thmb/e2WjcjuE8G9BmDJ9ufF1twmpdsg%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/pull-apart-garlic-rosemary-bread-FT-RECIPE0821-044f9c58dc274962b299d8ca21258635.jpg" },
    { name: "Tomato Soup", price: "₹70", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg" },
    { name: "Crispy Fries", price: "₹50", img: "https://www.justspices.co.uk/media/recipe/oven-chips-with-homemade-ketchup.jpg" },
    { name: "Burger", price: "₹180", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=640&h=480" },
    { name: "Veg Spring Roll", price: "₹69", img: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
    { name: "Cheese Balls", price: "₹130", img: "https://images.unsplash.com/photo-1505253865397-1d932f9f3b35?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwYmFsbHN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
    { name: "Paneer Tikka", price: "₹59", img: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
    { name: "Corn Chat", price: "₹29", img: "https://plus.unsplash.com/premium_photo-1680118540055-aa9f6ce1d93d?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXQlMjBjb3JufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  ];

  const mainCourse = [
  { name: "Margherita Pizza", price: "₹250", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Veg Burger", price: "₹180", img: "https://plus.unsplash.com/premium_photo-1664648063548-50808d58f061?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Pasta Alfredo", price: "₹220", img: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxmcmVkb3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Paneer Butter Masala", price: "₹230", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Veg Biryani", price: "₹200", img: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Mexican Wrap", price: "₹180", img: "https://plus.unsplash.com/premium_photo-1679986537856-f13d1b30204c?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9ydGlsbGF8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Dal Makhani & Rice", price: "₹210", img: "https://images.unsplash.com/photo-1668337624325-e49fd5bf1446?fit=max&fm=jpg&h=3417&ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHw1fHxkYWwlMjBtYWtoaW5pfGVufDB8fHx8MTcyNDA5NTI5OHww&ixlib=rb-4.0.3&w=5125" },
];

const desserts = [
  { name: "Chocolate Cake", price: "₹140", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Ice Cream", price: "₹80", img: "https://images.unsplash.com/photo-1702742322469-36315505728f?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Brownie", price: "₹120", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW0lMjBzY29vcHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Gulab Jamun", price: "₹60", img: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Rasmalai", price: "₹100", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Apple Pie", price: "₹140", img: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Cheesecake", price: "₹180", img: "https://images.unsplash.com/photo-1676300185983-d5f242babe34?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
];

const drinks = [
  { name: "Cold Coffee", price: "₹90", img: "https://images.unsplash.com/photo-1527156231393-7023794f363c?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Mojito", price: "₹120", img: "https://plus.unsplash.com/premium_photo-1669807973429-8ed3f63682eb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjBzb2RhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Orange Juice", price: "₹70", img: "https://images.unsplash.com/photo-1619158403521-ed9795026d47?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlsa3NoYWtlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Lemon Ice Tea", price: "₹70", img: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Hot Coffee", price: "₹80", img: "https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Milkshake", price: "₹120", img: "https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwY29mZmVlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
  { name: "Energy Drink", price: "₹130", img: "https://plus.unsplash.com/premium_photo-1722194069219-16ec49c08625?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9qaXRvfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000" },
];

  const renderSection = (title, items) => (
    <div className="mt-14">
      <h2 className="text-3xl font-bold text-lime-400 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group bg-zinc-900 rounded-xl overflow-hidden border border-lime-400 hover:border-lime-300 hover:scale-105 duration-300 shadow-lg"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-48 w-full object-cover group-hover:opacity-90"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-lg text-gray-300 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black text-white py-16 text-center">
      <h1 className="text-5xl font-bold text-lime-400 drop-shadow-lg">
        Discover Our Delicious Menu
      </h1>
      <p className="text-gray-300 mt-3 text-lg">Freshly prepared dishes made with love</p>

      {renderSection("Starters", starters)}
      {renderSection("Main Course", mainCourse)}
      {renderSection("Desserts", desserts)}
      {renderSection("Drinks", drinks)}
    </section>
  );
}
