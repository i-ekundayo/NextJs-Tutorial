"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName?.split("/")[2];
  const reviewId = pathName?.split("/")[4];

  return (
    <div>
      <h1>ReviewNot Found</h1>
      <p>
        Review {reviewId} not found for Product {productId}
      </p>
    </div>
  );
};

export default NotFound;
