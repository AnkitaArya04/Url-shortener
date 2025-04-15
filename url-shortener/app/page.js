import Image from "next/image";

export default function Home() {
  return (
   <main>
    <section className="grid grid-cols-2">
      <div className="bg-green-50">
        <p>
          The best URL Shortener in the market
        </p>
        <p>
          We are the most straightforward URL Shortener in the world
        </p>
      </div>
      <div className="bg-red-500">
      <Image alt="an image of vector" src={"/vector.jpg"} width={300} height={300} />
      </div>
    </section>
   </main>
  );
}
