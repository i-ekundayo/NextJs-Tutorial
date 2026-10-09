import Link from "next/link";

const Home = () => {
  return (
    <>
      <div>Welcome to the Home page!</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
