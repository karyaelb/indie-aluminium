import imageone from "../assets/imageone.jpg";

export const Gallery = () => {
  return (
    <>
      <main id="gallery" className="max-w-4xl m-auto space-y-6">
        <section>
          <div className="mt-12">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold mt-4 mb-8 capitalize">
              Galeri Kami
            </h2>
          </div>
        </section>

        <section>
          <div className="sm:grid grid-cols-2 gap-8 mx-8 my-12">
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8">
                Produk 1
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8 ">
                Produk 2
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8">
                Produk 3
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8">
                Produk 4
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8">
                Produk 5
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:space-y-8">
              <img
                src={imageone}
                alt="produk"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-lg font-semibold mt-4 mb-8">
                Produk 6
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
