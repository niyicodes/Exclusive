import ReactStars from "react-stars";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/Redux/Features/cartSlice";
import { addToWishlist } from "@/app/Redux/Features/wishlistSlice";
import { useState } from "react";

const Product = ({
 image,
 price,
 product_name,
 product_inStock,
 discount,
 rating,
 slug,
 alt,
 id
}) => {
 const navigate = useRouter();
 const dispatch = useDispatch();
 const [like, setLike] = useState(false);
 return (
  <div className="w-[300px] h-[300px] font-poppins product cursor-pointer shadow-md">
   <figure className="bg-wild-sand-100 relative py-3 mb-2 rounded-sm">
    <img src={image} alt={alt} className="m-auto w-[50%]" />
    {discount && (
     <p className="bg-valencia-500 text-white rounded-md px-2 py-1 absolute top-2 left-2 text-sm">
      -{discount}%
     </p>
    )}
    <div className="icons absolute top-2 right-2 flex flex-col gap-3">
     <AiOutlineHeart
      className={`bg-white rounded-full p-1 text-[25px] ${
       like ? "fill-red-500" : "fill-black"
      }`}
      onClick={() => {
       dispatch(addToWishlist({ slug, product_name, image,id })), setLike(!like);
      }}
     />
     <MdOutlineShoppingCart className="bg-white rounded-full p-1 text-[25px] " onClick={() =>
      dispatch(
       addToCart({
        image,
        price,
        product_name,
        product_inStock,
        discount,
        rating,
        slug,
        alt,
        id
       })
      )
     }/>
    </div>
    {/* add to cart button */}
    <button
     type="button"
     className="btn absolute bottom-0 py-1 w-full text-center xs:hidden bg-black text-white"
     onClick={() =>
      dispatch(
       addToCart({
        image,
        price,
        product_name,
        product_inStock,
        discount,
        rating,
        slug,
        alt,
        id
       })
      )
     }
    >
     Add To Cart
    </button>
   </figure>
   <div
    className="details pl-3 mt-auto"
    onClick={() => navigate.push(`/products/${slug}`)}
   >
    <p className="font-bold truncate w-[220px]">{product_name}</p>
    <div className="flex flex-col gap-2">
     <div className="price">
      {discount ? (
       <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
         <h5 className="text-valencia-500 font-bold text-[20px]">
          ${price - (price * discount) / 100}
         </h5>
         <h5 className="text-wild-sand-600 font-medium line-through text-[20px]">
          ${price}
         </h5>
        </div>
        <div className="flex gap-4 items-center">
         <ReactStars
          count={rating}
          size={25}
          color1="#FFAD33"
          color2="#9a9a9a"
          edit={false}
          half={true}
         />
         <small className="text-wild-sand-700 text-[17px]">
          ({product_inStock})
         </small>
        </div>
       </div>
      ) : (
       <div className="flex gap-2 items-center">
        <h5 className="text-valencia-500 font-bold text-[20px]">${price}</h5>
        <small className="text-wild-sand-700 text-[17px]">
         ({product_inStock})
        </small>
        <ReactStars
         count={rating}
         size={25}
         color1="#FFAD33"
         color2="#9a9a9a"
         edit={false}
         half={true}
        />
       </div>
      )}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Product;
