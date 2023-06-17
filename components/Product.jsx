import ReactStars from "react-stars";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, removeItem } from "@/Redux/Features/cartSlice";
import {
 addToWishlist,
 removeFromWishlist,
} from "@/Redux/Features/wishlistSlice";
import { motion } from "framer-motion";

const Product = ({
 image,
 price,
 product_name,
 product_inStock,
 discount,
 rating,
 slug,
 alt,
 id,
 variants,
}) => {
 const navigate = useRouter();
 const pathName = usePathname();
 const { wishListItems } = useSelector((store) => store.wishlist);
 const isItemInWishlist = wishListItems.find((item) => item.id === id);
 // setting path to show some icons
 const isLikeButton = ["/", "/products"].includes(pathName);
 const isCartButton = ["/", "/products", "/wishlist"].includes(pathName);
 const isWishlist = ["/wishlist"].includes(pathName);

 const dispatch = useDispatch();
 const [like, setLike] = useState(false);
 const [inCart, setInCart] = useState(false);

 const handleWish = () => {
  if (!like) {
   dispatch(
    addToWishlist({
     image,
     price,
     product_name,
     product_inStock,
     discount,
     rating,
     slug,
     alt,
     id,
    })
   );
  } else {
   dispatch(removeFromWishlist(id));
  }
  setLike(!like);
 };

 // remove from wishlist, not working yet
 const deleteWishItem = () => {
  if (isItemInWishlist) {
   dispatch(removeFromWishlist(id));
  }
 };

 // cart icon function
 const handleAddToCartIcon = () => {
  if (!inCart) {
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
     id,
    })
   );
  } else {
   dispatch(removeItem(id));
  }
  setInCart(!inCart);
 };

 return (
  <motion.div
   className="w-[300px] h-auto font-poppins product cursor-pointer shadow-md"
   variants={variants}
  >
   <figure className="bg-wild-sand-100 relative py-3 mb-2 rounded-sm">
    <img src={image} alt={alt} className="m-auto w-[50%]" />
    {discount && (
     <p className="bg-valencia-500 text-white rounded-md px-2 py-1 absolute top-2 left-2 text-sm">
      -{discount}%
     </p>
    )}
    {/* icons */}
    <div className="icons absolute top-2 right-2 flex flex-col gap-3">
     {/* like button */}
     {isLikeButton && (
      <div
       className="bg-white rounded-full p-1 text-[20px]"
       onClick={handleWish}
      >
       {!like ? (
        <AiOutlineHeart className="outline-black" />
       ) : (
        <AiFillHeart className="fill-valencia-700" />
       )}
      </div>
     )}
     {/* shop button */}
     {isCartButton && (
      <div
       className="bg-white rounded-full p-1 text-[25px] "
       onClick={handleAddToCartIcon}
      >
       {!inCart ? (
        <MdOutlineShoppingCart />
       ) : (
        <BsFillCartCheckFill className="fill-valencia-500" />
       )}
      </div>
     )}
     {/* delete button */}
     {isWishlist && (
      <div
       className="bg-white rounded-full p-1 text-[20px]"
       onClick={deleteWishItem}
      >
       <RiDeleteBinLine className="fill-black" />
      </div>
     )}
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
        discount,
        id,
       })
      )
     }
    >
     Add To Cart
    </button>
   </figure>
   {/* product details */}
   <div
    className="details pl-3 mt-auto pt-2 pb-4"
    onClick={() => navigate.push(`/products/${slug}`)}
   >
    <p className="font-bold truncate w-[220px]">{product_name}</p>
    <div className="flex flex-col gap-2">
     <div className="price">
      {discount ? (
       <div className="flex flex-col gap-2">
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
  </motion.div>
 );
};

export default Product;
