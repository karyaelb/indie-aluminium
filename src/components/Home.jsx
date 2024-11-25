import Catalog from "./Catalog";
import Gallery from "./Gallery";

export const Home = () => {
  return (
    <>
      <main id="home">
        <section className="relative w-full h-screen ">
          <img
            src="public/malang/20221014_150140.jpg"
            alt="background"
            className="w-full h-full object-cover blur-[2px]"
          />

          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold mx-4 my-2 space-y-6  
            sm:mx-12 sm:justify-center sm:items-start"
          >
            <div className="sm:max-w-3xl">
              <h2
                className="text-4xl sm:text-5xl text-center sm:text-start tracking-wide
               sm:leading-none text-white 
 "
              >
                Aplikator Aluminium Berkualitas dan Terpercaya di Sidoarjo dan
                sekitarnya
              </h2>
            </div>
            <p
              className="text-xl sm:text-2xl font-normal text-white text-center
              sm:max-w-2xl sm:text-start sm:tracking-wider sm:leading-tight"
            >
              Kami melayani anda untuk pengaplikasian kusen pintu, jendela dan
              partisi dengan menggunakan bahan aluminium yang berkualitas tinggi
              dengan beragam merk pilihan dan warna sesuai dengan selera dan
              kebutuhan yang anda inginkan.
            </p>

            <button
              className="px-3 py-4 sm:p-4 bg-sky-800 hover:bg-sky-950 rounded-2xl 
            font-medium text-base sm:text-xl capitalize text-white "
            >
              <a href="https://wa.me/+6282232166957" target="_blank">
                contact here
              </a>
            </button>
          </div>
        </section>

        <Catalog />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
