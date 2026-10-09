import Link from "next/link";

const ProductList = async ({ params }: { params: { productId: string } }) => {
  const product = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: params.productId });
    }, 1000);
  });
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href={`/products/1`}>Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
    </>
  );
};

export default ProductList;
