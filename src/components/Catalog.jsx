import { IoIosPricetags } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GiFly } from "react-icons/gi";
import { FaCloudSun } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdGppGood } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import { GrTools } from "react-icons/gr";

export const Catalog = () => {
  return (
    <>
      <main id="catalog" className="max-w-4xl m-auto ">
        <section className="space-y-6">
          <div className="mt-12">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold capitalize">
              about us
            </h2>
          </div>

          <div className="mx-6">
            <p className="text-justify sm:text-lg">
              Kami adalah perusahaan kaca dan aluminium yang telah bergerak
              lebih dari 10 tahun dalam bidang pengaplikasian aluminium yang
              berlokasi di Sidoarjo, Jawa Timur.
            </p>
          </div>

          <div className="mx-6">
            <p className="text-justify sm:text-lg">
              Kami memberikan kualitas yang terbaik untuk konsumen, harga yang
              bersaing, ketepatan waktu pengerjaan, dan pemasangan yang baik.
            </p>
          </div>

          <div className="mx-6 sm:text-lg">
            <p>Melayani eceran dan proyek : </p>
            <div className="sm:flex sm:justify-between ">
              <p>
                • Jendela Kaca Mati <br />
                • Jendela Sleding <br />
                • Jendela Swing <br />
                • Jendela Pivot <br />
                • Jendela Casement <br />
              </p>
              <p>
                • Jendela Kasa Nyamuk Magnet <br />
                • Pintu Kasa Nyamuk <br />
                • Pintu Swing <br />
                • Pintu Sliding <br />
              </p>
              <p>
                • Pintu Lipat <br />
                • Kusen Aluminium <br />
                • Partisi Aluminium <br />
                • Aluminium Kitchen Set <br />
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 ">
          <div className="mt-12">
            <h2 className="m-4 text-center text-3xl sm:text-4xl font-semibold capitalize ">
              kenapa harus menggunakan jasa kami?
            </h2>
          </div>

          <div className="m-6 grid grid-cols-2 sm:grid-cols-3 gap-12 py-4 capitalize">
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <MdGppGood size={52} color="#075985" className="mt-8" />
              <p>free konsultasi</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <AiFillDollarCircle size={52} color="#075985" className="mt-8" />
              <p>garansi pemasangan</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <AiOutlineSolution size={52} color="#075985" className="mt-8" />
              <p>pelayanan yang ramah </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <FaUserClock size={52} color="#075985" className="mt-8" />
              <p>jam terbang professional</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <GrTools size={52} color="#075985" className="mt-8" />
              <p>pengerjaan rapi</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="mt-12">
            <h2 className="mx-4 text-center text-3xl sm:text-4xl font-semibold capitalize">
              apa kelebihan aluminium?
            </h2>
          </div>

          <div className="m-6 grid grid-cols-2 sm:grid-cols-4 gap-12 py-4 capitalize">
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <IoIosPricetags size={52} color="#075985" className="mt-8" />
              <p>harga terjangkau</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <FaBuilding size={52} color="#075985" className="mt-8" />
              <p>modern</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <IoColorPaletteSharp size={52} color="#075985" className="mt-8" />
              <p>banyak pilihan warna</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <GiFly size={52} color="#075985" className="mt-8" />
              <p>anti rayap</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <FaTools size={52} color="#075985" className="mt-8" />
              <p>pemasangan mudah</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <IoTime size={52} color="#075985" className="mt-8" />
              <p>pemasangan cepat</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <FaCloudSun size={52} color="#075985" className="mt-8" />
              <p>tahan terhadap cuaca</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 font-semibold">
              <GrStatusGood size={52} color="#075985" className="mt-8" />
              <p>perawatan mudah</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Catalog;
