import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import HomeMenu from "@/components/layouts/HomeMenu";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem
          harum ut, voluptatem, repudiandae atque, voluptate asperiores neque
          fugit fugiat optio accusantium. Sint autem nesciunt natus deleniti
          blanditiis? Nobis, dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem
          harum ut, voluptatem, repudiandae atque, voluptate asperiores neque
          fugit fugiat optio accusantium. Sint autem nesciunt natus deleniti
          blanditiis? Nobis, dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem
          harum ut, voluptatem, repudiandae atque.
        </p>
        </div>
       
      </section>
    </>
  );
}
