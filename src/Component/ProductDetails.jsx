import { FaHeart, FaShareAlt } from "react-icons/fa";
import Apicalling from "./Apicalling";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/productSlice";




function ProductDetails() {
  const allProduct = Apicalling();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.item);

  const product = allProduct.find((item) => item.id === parseInt(id));

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
// product not there in cart than 
  if (!product) {
    return (
      <div>
        <div className="flex flex-col items-center mt-10 text-center">
          <div className="text-gray-600 font-bold text-lg">Product not found...</div>
          <Link to="/">
            <div className="mt-4 bg-purple-700 text-white px-4 py-2 rounded w-40">
              Go to Home
            </div>
          </Link>
        </div>
      </div>
    );
  }
// add the product in cart
  const handleAddItem = () => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-900 mb-4">
         <Link to="/product"> Home <span className="capitalize">/ {product.brand}</span> / {product.category}</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Product Image */}
          <div className="bg-gray-100 rounded-xl p-10 flex items-center justify-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Right - Product Info */}
          <div>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full uppercase">
              {product.brand}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {product.category}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2 text-yellow-400 text-xl">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
              ))}
              <span className="text-gray-500 text-xs ml-2">{product.rating}</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <span className="line-through text-gray-400">$9.99</span>
              <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">10% off</span>
            </div>
            <div className="text-green-600 mt-1 text-sm">You save $1.05</div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-800">Description</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            </div>

            {/* Brand Info */}
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800">Brand</h3>
              <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleAddItem}
                className="bg-[#a52a2a] hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                Add More
              </button>
              <button className="p-2 border rounded-lg">
                <FaHeart className="text-gray-600" />
              </button>
              <button className="p-2 border rounded-lg">
                <FaShareAlt className="text-gray-600" />
              </button>
            </div>

            {/* View Cart Button */}
            <Link to="/cart">
              <button className="mt-4 w-full border rounded py-2 text-sm text-gray-700 font-medium">
                View Cart ({totalCartItems})
              </button>
            </Link>

            {/* Feature Icons */}
            <div className="mt-6 border-t pt-4 grid grid-cols-3 text-center text-sm text-gray-600">
              <div>
                <span className="block text-xl">🚚</span>
                Free Shipping
              </div>
              <div>
                <span className="block text-xl">🔁</span>
                Easy Returns
              </div>
              <div>
                <span className="block text-xl">🛡️</span>
                Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
