import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return <h1>Details about product {productId}</h1>;
};

export default ProductDetails;
