import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="h-screen border-2">
      <section className="h-full border-2  border-red-500 md:flex md:items-center lg:justify-center">
        <section className=" min-h-[20%] w-full  border-2 border-blue-500 md: md:w-[40%] md:max-w-[550px]">
          <section className="border flex flex-col p-4 gap-2 items-center sm:items-start">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl">The Collection</h2>
            <h3 className="text-2xl">The Art of Congac</h3>
            <button className="py-4 px-2 w-[150px]">Discover more</button>
          </section>
        </section>
        <section className="flex flex-col h-[80%] w-full  border-2 border-green-500 md:w-[60%] lg:w-[750px] lg:h-full justify-center">
          <ProductCard />
        </section>
      </section>
    </section>
  );
};

export default Products;
