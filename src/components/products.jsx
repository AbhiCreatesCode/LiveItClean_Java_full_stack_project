import React from "react";

const products = [
  {
    id: 1,
    title: "Organic India Classic Tulsi Green Tea, Loose Leaves, 100 gm",
    image: "https://storage.googleapis.com/a1aa/image/tiP9KIU9ARHdNUFnZQV4jWzcqu0wLEJWHcxFo_WX-K0.jpg",
    tag: "Sponsored",
    category: "Green",
    bought: "3.9k+ bought in past month",
    rating: 4.3,
    reviews: "12,380",
    price: "₹228",
    mrp: "₹285",
    discount: "20% off",
    delivery: "FREE delivery Tue, 11 Mar on first order",
  },
  {
    id: 2,
    title: "Tea And Twigs | Detox Desi Kahwa Green Tea- 25 Pyramid Teabags",
    image: "https://storage.googleapis.com/a1aa/image/egWu4h-7qcVGgQE96lPUH1kSoGIIZp4s8DI4pEA9aRg.jpg",
    tag: "Sponsored",
    category: "Green",
    bought: "5.4k+ bought in past month",
    rating: 4.4,
    reviews: "1,380",
    price: "₹337",
    mrp: "₹375",
    discount: "10% off",
    delivery: "FREE delivery Sun, 9 Mar on first order",
  },
  {
    id: 3,
    title: "Wellbeing Nutrition Daily Greens | Wholefood Multivitamins",
    image: "https://storage.googleapis.com/a1aa/image/Yx6HNw_G63VtYeatNhOx2k2BssHWeWSoRQ-x_P3l_Oc.jpg",
    tag: "Sponsored",
    category: "Tablet",
    bought: "4.1k+ bought in past month",
    rating: 4.1,
    reviews: "1,171",
    price: "₹1,061",
    mrp: "₹1,249",
    discount: "15% off",
    delivery: "FREE delivery Sun, 9 Mar",
  },
  {
    id: 4,
    title: "Dummy Product 1",
    image: "https://via.placeholder.com/150",
    tag: "Best Seller",
    category: "Miscellaneous",
    bought: "1.5k+ bought in past month",
    rating: 4.5,
    reviews: "2,500",
    price: "₹499",
    mrp: "₹599",
    discount: "17% off",
    delivery: "FREE delivery Tomorrow, 7 Mar",
  },
  {
    id: 5,
    title: "Dummy Product 2",
    image: "https://via.placeholder.com/150",
    tag: "Sponsored",
    category: "Electronics",
    bought: "500+ bought in past month",
    rating: 4.0,
    reviews: "890",
    price: "₹1,299",
    mrp: "₹1,599",
    discount: "20% off",
    delivery: "FREE delivery Tue, 11 Mar",
  }
];

const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <span className="text-xs text-gray-500">{product.tag}</span>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mt-2"
      />
      <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
      <div className="flex items-center mt-1">
        <span className="text-green-600 text-xs font-semibold">
          {product.category}
        </span>
        <span className="text-xs text-gray-500 ml-2">{product.bought}</span>
      </div>
      <div className="flex items-center mt-1">
        <span className="text-yellow-500 text-xs">
          <i className="fas fa-star"></i> {product.rating}
        </span>
        <span className="text-xs text-gray-500 ml-2">{product.reviews}</span>
      </div>
      <div className="text-lg font-bold mt-1">{product.price}</div>
      <div className="text-xs text-gray-500">M.R.P.: {product.mrp}</div>
      <div className="text-xs text-red-600">{product.discount}</div>
      <div className="text-xs text-gray-500">{product.delivery}</div>
      <button className="bg-yellow-400 text-black text-sm font-semibold py-1 px-2 rounded mt-2">
        Add to cart
      </button>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
