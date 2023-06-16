import Skeleton from "react-loading-skeleton";
import { usePathname } from "next/navigation";

const SkeletonProduct = ({ discount, price }) => {
 const pathName = usePathname();
 const isLikeButton = ["/", "/products"].includes(pathName);
 const isCartButton = ["/", "/products", "/wishlist"].includes(pathName);
 const isWishlist = ["/wishlist"].includes(pathName);

 return (
  <div className="w-[300px] h-[310px] shadow-md">
   <figure className="relative mb-2 rounded-sm">
    <Skeleton className="w-[70%] h-[170px]" />

    <p className="absolute top-2 left-2 w-[50px] h-[20px]">
     <Skeleton />
    </p>

    {/* icons */}
    <div className="icons absolute top-2 right-2 flex flex-col gap-3">
     {/* like button */}
     {isLikeButton && (
      <div className="h-[30px]">
       <Skeleton circle={true} />
      </div>
     )}
     {/* shop button */}
     {isCartButton && (
      <div className="h-[30px]">
       <Skeleton circle={true} />
      </div>
     )}
     {/* delete button */}
     {isWishlist && (
      <div className="h-[30px]">
       <Skeleton circle={true} />
      </div>
     )}
    </div>
   </figure>
   {/* product details */}
   <div className="details pl-3 mt-auto pt-2 pb-4">
    <p className="font-bold truncate w-[240px]">
     <Skeleton />
    </p>
    <div className="flex flex-col gap-2">
     <div className="price">
      {!discount ? (
       <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
         <h5 className="w-[150px]">
          <Skeleton className="" />
         </h5>
         <h5 className="w-[90px]">
          <Skeleton />
         </h5>
        </div>
        <div className="flex gap-4 items-center w-[200px]">
         <h5 className="w-[70px] h-[20px]">
          <Skeleton className="" />
         </h5>
         <h5 className="w-[70px] h-[20px]">
          <Skeleton className=""/>
         </h5>
        </div>
       </div>
      ) : (
       <div className="flex gap-4 items-center">
        <h5 className=" font-bold w-[100px]">
         <Skeleton />
        </h5>
        <small className="w-[40px] h-[40px] font-bold">
         <Skeleton circle={true} />
        </small>
        <Skeleton circle={true} className="h-[30px]" />
       </div>
      )}
     </div>
    </div>
   </div>
  </div>
 );
};

export default SkeletonProduct;
