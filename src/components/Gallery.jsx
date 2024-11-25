import { useState } from "react";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = {
    sidoarjo: [
      {
        src: "/sidoarjo/download (6).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download (1).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download.webp",
        alt: "Slide Sidoarjo",
      },

      {
        src: "/sidoarjo/download (5).webp",
        alt: "Slide Sidoarjo",
      },

      {
        src: "/sidoarjo/download (7).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download (8).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download (9).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download (10).webp",
        alt: "Slide Sidoarjo",
      },
      {
        src: "/sidoarjo/download (11).webp",
        alt: "Slide Sidoarjo",
      },
    ],
    surabaya: [
      {
        src: "/surabaya/download (1).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (2).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (3).webp",
        alt: "Slide Surabaya ",
      },

      {
        src: "/surabaya/download (5).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (6).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (7).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (8).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (9).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (10).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (11).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (12).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (13).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (14).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (15).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (16).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (17).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (18).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (19).webp",
        alt: "Slide Surabaya ",
      },
      {
        src: "/surabaya/download (20).webp",
        alt: "Slide Surabaya ",
      },
    ],
    malang: [
      {
        src: "/malang/download (4).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (2).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (3).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (1).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (5).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (6).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (7).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (8).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (9).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (10).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (11).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (12).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (13).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (14).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (15).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (16).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (17).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (18).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/downlaod (19).webp",
        alt: "Slide Malang",
      },

      {
        src: "/malang/download (20).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (21).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (22).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (23).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (24).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (25).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (26).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (27).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (28).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (29).webp",
        alt: "Slide Malang",
      },
      {
        src: "/malang/download (30).webp",
        alt: "Slide Malang",
      },
    ],
    kitchenSet: [
      {
        src: "/kitchenset/kitchenset (1).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (2).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (3).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (4).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (5).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (6).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (7).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (8).webp",
        alt: "Slide Kitchen Set ",
      },
      {
        src: "/kitchenset/kitchenset (9).webp",
        alt: "Slide Kitchen Set ",
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
                        className="w-full h-full object-contain "
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
                        className="w-full h-full object-contain "
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
                        className="w-full h-full object-contain "
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
                        className="w-full h-full object-contain "
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
