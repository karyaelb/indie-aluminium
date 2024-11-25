import { useState } from "react";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = {
    sidoarjo: [
      {
        src: "/sidoarjo/20230822_164301.jpg",
        alt: "Slide Sidoarjo 2",
      },
      {
        src: "/sidoarjo/20231109_164758.jpg",
        alt: "Slide Sidoarjo 3",
      },
      {
        src: "/sidoarjo/20231110_170000.jpg",
        alt: "Slide Sidoarjo 4",
      },
      {
        src: "/sidoarjo/20231110_170308.jpg",
        alt: "Slide Sidoarjo 5",
      },
      {
        src: "/sidoarjo/produksda.jpeg",
        alt: "Slide Sidoarjo 6",
      },
      {
        src: "/sidoarjo/produksda1.jpeg",
        alt: "Slide Sidoarjo 7",
      },
      {
        src: "/sidoarjo/20230609_131734.jpg",
        alt: "Slide Sidoarjo 1",
      },
    ],
    surabaya: [
      {
        src: "/surabaya/20210512_155403.jpg",
        alt: "Slide Surabaya 1",
      },
      {
        src: "/surabaya/20210621_194220.jpg",
        alt: "Slide Surabaya 2",
      },
      {
        src: "/surabaya/20210902_142439.jpg",
        alt: "Slide Surabaya 3 ",
      },
      {
        src: "/surabaya/20230114_184130.jpg",
        alt: "Slide Surabaya 4 ",
      },
      {
        src: "/surabaya/20230506_160539.jpg",
        alt: "Slide Surabaya 5",
      },
      {
        src: "/surabaya/20230831_120323.jpg",
        alt: "Slide Surabaya 6 ",
      },
      {
        src: "/surabaya/20230831_120348.jpg",
        alt: "Slide Surabaya 7 ",
      },
      {
        src: "/surabaya/20230831_164435.jpg",
        alt: "Slide Surabaya 8",
      },
      {
        src: "/surabaya/20230901_152127.jpg",
        alt: "Slide Surabaya 9",
      },

      {
        src: "/surabaya/20240713_132135.jpg",
        alt: "Slide Surabaya 11 ",
      },

      {
        src: "/surabaya/20240907_142040.jpg",
        alt: "Slide Surabaya 12 ",
      },

      {
        src: "/surabaya/20240920_102233.jpg",
        alt: "Slide Surabaya 13 ",
      },

      {
        src: "/surabaya/20240920_102240.jpg",
        alt: "Slide Surabaya 14 ",
      },
      {
        src: "/surabaya/20240920_102302.jpg",
        alt: "Slide Surabaya 15 ",
      },

      {
        src: "/surabaya/20240920_102323.jpg",
        alt: "Slide Surabaya 16 ",
      },

      {
        src: "/surabaya/20240920_102347.jpg",
        alt: "Slide Surabaya 17 ",
      },

      {
        src: "/surabaya/20240920_102411.jpg",
        alt: "Slide Surabaya 18 ",
      },

      {
        src: "/surabaya/20240923_101955.jpg",
        alt: "Slide Surabaya 19 ",
      },

      {
        src: "/surabaya/20240930_115152.jpg",
        alt: "Slide Surabaya 20 ",
      },

      {
        src: "/surabaya/20241005_111305.jpg",
        alt: "Slide Surabaya 21 ",
      },

      {
        src: "/surabaya/IMG-20210704-WA0008.jpeg",
        alt: "Slide Surabaya 22 ",
      },
    ],
    malang: [
      { src: "/malang/20210806_102615.jpg", alt: "Slide Malang 1" },
      { src: "/malang/20210806_114639.jpg", alt: "Slide Malang 2" },
      { src: "/malang/20210806_164540.jpg", alt: "Slide Malang 3" },
      { src: "/malang/20210806_164605.jpg", alt: "Slide Malang 4" },
      { src: "/malang/20211019_153722.jpg", alt: "Slide Malang 5" },
      { src: "/malang/20211019_153850.jpg", alt: "Slide Malang 6" },
      { src: "/malang/20220823_101340.jpg", alt: "Slide Malang 7" },
      { src: "/malang/20220908_170901.jpg", alt: "Slide Malang 8" },
      { src: "/malang/20220908_185439.jpg", alt: "Slide Malang 9" },
      { src: "/malang/20221014_145922.jpg", alt: "Slide Malang 10" },
      { src: "/malang/20221014_150007.jpg", alt: "Slide Malang 11" },
      { src: "/malang/20221014_150033.jpg", alt: "Slide Malang 12" },
      { src: "/malang/20221014_150112.jpg", alt: "Slide Malang 13" },
      { src: "/malang/20221014_150140.jpg", alt: "Slide Malang 14" },
      { src: "/malang/20221014_150201.jpg", alt: "Slide Malang 15" },
      { src: "/malang/20221014_150226.jpg", alt: "Slide Malang 16" },
      { src: "/malang/20221014_152856.jpg", alt: "Slide Malang 17" },
      { src: "/malang/20221014_153315.jpg", alt: "Slide Malang 18" },
      { src: "/malang/20221017_145856.jpg", alt: "Slide Malang 19" },
      { src: "/malang/20221017_171056.jpg", alt: "Slide Malang 20" },
      { src: "/malang/20221017_180007.jpg", alt: "Slide Malang 21" },
      { src: "/malang/20221027_125353.jpg", alt: "Slide Malang 22" },
      { src: "/malang/20230304_125740.jpg", alt: "Slide Malang 23" },
      { src: "/malang/20230304_125945.jpg", alt: "Slide Malang 24" },
      { src: "/malang/20231121_111425.jpg", alt: "Slide Malang 25" },
      { src: "/malang/20231121_111449.jpg", alt: "Slide Malang 26" },
      { src: "/malang/20231121_111527.jpg", alt: "Slide Malang 27" },
      { src: "/malang/20231121_111604.jpg", alt: "Slide Malang 28" },
      {
        src: "/malang/IMG-20210921-WA0001.jpeg",
        alt: "Slide Malang 29",
      },
      {
        src: "/malang/IMG-20211228-WA0010.jpeg",
        alt: "Slide Malang 30",
      },
      {
        src: "/malang/IMG-20230305-WA0000.jpg",
        alt: "Slide Malang 31",
      },
      {
        src: "/malang/IMG-20230305-WA0009.jpg",
        alt: "Slide Malang 32",
      },
      {
        src: "/malang/IMG-20231115-WA0005.jpg",
        alt: "Slide Malang 33",
      },
      {
        src: "/malang/IMG-20231115-WA0006.jpg",
        alt: "Slide Malang 34",
      },
      {
        src: "/malang/IMG-20231115-WA0011.jpg",
        alt: "Slide Malang 35",
      },
      {
        src: "/malang/IMG-20231115-WA0012.jpg",
        alt: "Slide Malang 36",
      },
      {
        src: "/malang/IMG-20231115-WA0014.jpg",
        alt: "Slide Malang 37",
      },
      {
        src: "/malang/IMG-20231115-WA0015.jpg",
        alt: "Slide Malang 38",
      },
      {
        src: "/malang/IMG-20231115-WA0020.jpg",
        alt: "Slide Malang 39",
      },
      {
        src: "/malang/IMG-20231115-WA0022.jpg",
        alt: "Slide Malang 40",
      },
      {
        src: "/malang/IMG-20240207-WA0006.jpg",
        alt: "Slide Malang 41",
      },
      {
        src: "/malang/IMG-20240207-WA0007.jpg",
        alt: "Slide Malang 42",
      },
    ],
    kitchenSet: [
      {
        src: "/kitchenset/20241115_120639.jpg",
        alt: "Slide Kitchen Set 1",
      },
      {
        src: "/kitchenset/20241115_120646.jpg",
        alt: "Slide Kitchen Set 2",
      },
      {
        src: "/kitchenset/20241115_120713.jpg",
        alt: "Slide Kitchen Set 3",
      },
      {
        src: "/kitchenset/20241115_120722.jpg",
        alt: "Slide Kitchen Set 4",
      },
      {
        src: "/kitchenset/20211228_194321.jpg",
        alt: "Slide Kitchen Set 5",
      },
      {
        src: "/kitchenset/20211228_194558.jpg",
        alt: "Slide Kitchen Set 6",
      },
      {
        src: "/kitchenset/IMG_20211229_112612_450.webp",
        alt: "Slide Kitchen Set 7",
      },
      {
        src: "/kitchenset/IMG_20211229_112616_879.webp",
        alt: "Slide Kitchen Set 8",
      },
    ],
  };

  const [sidoarjoIndex, setSidoarjoIndex] = useState(0);
  const [surabayaIndex, setSurabayaIndex] = useState(0);
  const [malangIndex, setMalangIndex] = useState(0);
  const [kitchenSetIndex, setKitchenSetIndex] = useState(0);

  // Variabel untuk mendeteksi swipe
  let startTouch = 0;
  let endTouch = 0;

  // Fungsi untuk berpindah ke slide berikutnya
  const goToNext = (category) => {
    if (category === "sidoarjo" && images.sidoarjo.length > 0) {
      setSidoarjoIndex((prevIndex) =>
        prevIndex === images.sidoarjo.length - 1 ? 0 : prevIndex + 1
      );
    } else if (category === "surabaya" && images.surabaya.length > 0) {
      setSurabayaIndex((prevIndex) =>
        prevIndex === images.surabaya.length - 1 ? 0 : prevIndex + 1
      );
    } else if (category === "malang" && images.malang.length > 0) {
      setMalangIndex((prevIndex) =>
        prevIndex === images.malang.length - 1 ? 0 : prevIndex + 1
      );
    } else if (category === "kitchenSet" && images.kitchenSet.length > 0) {
      setKitchenSetIndex((prevIndex) =>
        prevIndex === images.kitchenSet.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const goToPrevious = (category) => {
    if (category === "sidoarjo" && images.sidoarjo.length > 0) {
      setSidoarjoIndex((prevIndex) =>
        prevIndex === 0 ? images.sidoarjo.length - 1 : prevIndex - 1
      );
    } else if (category === "surabaya" && images.surabaya.length > 0) {
      setSurabayaIndex((prevIndex) =>
        prevIndex === 0 ? images.surabaya.length - 1 : prevIndex - 1
      );
    } else if (category === "malang" && images.malang.length > 0) {
      setMalangIndex((prevIndex) =>
        prevIndex === 0 ? images.malang.length - 1 : prevIndex - 1
      );
    } else if (category === "kitchenSet" && images.kitchenSet.length > 0) {
      setKitchenSetIndex((prevIndex) =>
        prevIndex === images.kitchenSet.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Menangani swipe
  const handleTouchStart = (e) => {
    startTouch = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, category) => {
    endTouch = e.changedTouches[0].clientX;
    if (startTouch - endTouch > 100) {
      goToNext(category); // swipe ke kiri (next)
    }
    if (endTouch - startTouch > 100) {
      goToPrevious(category); // swipe ke kanan (previous)
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 }, // Mulai dari atas dan tidak terlihat
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade-in ke posisi akhir
  };

  return (
    <>
      <main id="gallery" className="max-w-4xl m-auto space-y-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <section>
            <div className="mt-12">
              <h2 className="text-center text-3xl sm:text-4xl font-semibold mt-4 mb-8 capitalize">
                Galeri Kami
              </h2>
            </div>
          </section>
        </motion.div>

        <section className="mx-4 space-y-8">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <section
              className="relative flex flex-col items-center justify-center"
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={(e) => handleTouchEnd(e, "sidoarjo")}
            >
              {images.sidoarjo.length > 0 ? (
                <>
                  <div className="w-full h-64 sm:h-96 overflow-hidden relative">
                    <a
                      href={images.sidoarjo[sidoarjoIndex].src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.sidoarjo[sidoarjoIndex].src}
                        alt={images.sidoarjo[sidoarjoIndex].alt}
                        className="w-full h-full object-contain hover:scale-110"
                        style={{
                          aspectRatio: "9 / 16",
                        }}
                      />
                    </a>
                  </div>
                  <p className="text-center text-xl font-semibold mt-4">
                    Sidoarjo, Jawa Timur
                  </p>
                  <button
                    onClick={() => goToPrevious("sidoarjo")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => goToNext("sidoarjo")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❯
                  </button>
                </>
              ) : (
                <p>No images available for Sidoarjo.</p>
              )}
            </section>
          </motion.div>

          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {" "}
            <section
              className="relative flex flex-col items-center justify-center"
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={(e) => handleTouchEnd(e, "surabaya")}
            >
              {images.surabaya.length > 0 ? (
                <>
                  <div className="w-full h-64 sm:h-96 overflow-hidden relative">
                    <a
                      href={images.surabaya[surabayaIndex].src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.surabaya[surabayaIndex].src}
                        alt={images.surabaya[surabayaIndex].alt}
                        className="w-full h-full object-contain hover:scale-110"
                        style={{
                          aspectRatio: "9 / 16",
                        }}
                      />
                    </a>
                  </div>
                  <p className="text-center text-xl font-semibold mt-4">
                    Surabaya, Jawa Timur
                  </p>
                  <button
                    onClick={() => goToPrevious("surabaya")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => goToNext("surabaya")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❯
                  </button>
                </>
              ) : (
                <p>No images available for Sidoarjo.</p>
              )}
            </section>
          </motion.div>

          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {" "}
            <section
              className="relative flex flex-col items-center justify-center"
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={(e) => handleTouchEnd(e, "malang")}
            >
              {images.malang.length > 0 ? (
                <>
                  <div className="w-full h-64 sm:h-96 overflow-hidden relative">
                    <a
                      href={images.malang[malangIndex].src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.malang[malangIndex].src}
                        alt={images.malang[malangIndex].alt}
                        className="w-full h-full object-contain hover:scale-110"
                        style={{
                          aspectRatio: "9 / 16",
                        }}
                      />
                    </a>
                  </div>
                  <p className="text-center text-xl font-semibold mt-4">
                    Malang, Jawa Timur
                  </p>
                  <button
                    onClick={() => goToPrevious("malang")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => goToNext("malang")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❯
                  </button>
                </>
              ) : (
                <p>No images available for Sidoarjo.</p>
              )}
            </section>
          </motion.div>

          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <section
              className="relative flex flex-col items-center justify-center"
              onTouchStart={(e) => handleTouchStart(e)}
              onTouchEnd={(e) => handleTouchEnd(e, "kitchenSet")}
            >
              {images.kitchenSet.length > 0 ? (
                <>
                  <div className="w-full h-64 sm:h-96 overflow-hidden relative">
                    <a
                      href={images.kitchenSet[kitchenSetIndex].src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.kitchenSet[kitchenSetIndex].src}
                        alt={images.kitchenSet[kitchenSetIndex].alt}
                        className="w-full h-full object-contain hover:scale-110"
                        style={{
                          aspectRatio: "9 / 16",
                        }}
                      />
                    </a>
                  </div>
                  <p className="text-center text-xl font-semibold mt-4 mb-8">
                    Kitchen Set
                  </p>
                  <button
                    onClick={() => goToPrevious("kitchenSet")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => goToNext("kitchenSet")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-sky-800 hover:bg-sky-950 w-8 h-8 sm:w-12 sm:h-12 sm:p-0 rounded-full flex items-center justify-center"
                  >
                    ❯
                  </button>
                </>
              ) : (
                <p>No images available for Sidoarjo.</p>
              )}
            </section>
          </motion.div>
        </section>
      </main>
    </>
  );
};
export default Gallery;
