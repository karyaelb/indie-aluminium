// import backgroundhome from "../assets/backgroundhome.jpg";
import Catalog from "./Catalog";
import Gallery from "./Gallery";
import backgroundpage from "../assets/backgroundpage.jpg";

export const Home = () => {
  return (
    <>
      <main id="home">
        <section className="relative w-full h-screen ">
          <img
            src={backgroundpage}
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-black
           dark:text-white text-2xl font-bold mx-4 my-2 space-y-6  
            sm:mx-12 sm:justify-center sm:items-start"
          >
            <div className="sm:max-w-3xl">
              <h2
                className="text-4xl sm:text-5xl text-center sm:text-start tracking-wide
               sm:leading-none text-black dark:text-white "
              >
                Aplikator Aluminium Berkualitas dan Terpercaya di Sidoarjo dan
                sekitarnya
              </h2>
            </div>
            <p
              className="text-xl sm:text-2xl font-normal text-center text-black
           dark:text-white
              sm:max-w-2xl sm:text-start sm:tracking-wider sm:leading-tight"
            >
              Kami melayani anda untuk pengaplikasian kusen pintu, jendela dan
              partisi dengan menggunakan bahan aluminium yang berkualitas tinggi
              dengan banyak macam merk dan warna sesuai dengan pilihan dan
              kebutuhan yang anda inginkan.
            </p>

            <button className="p-4 bg-sky-800 rounded-2xl font-medium text-xl capitalize">
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
