import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-[#075985] text-white py-8">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between mx-4 sm:mx-6">
          <h2 className="text-2xl font-semibold text-left ">Indie Aluminium</h2>
          <div className="space-x-2 sm:space-x-6 text-end ">
            <a href="#home" className="text-sm hover:underline ">
              Home
            </a>
            <a href="#catalog" className="text-sm hover:underline">
              About
            </a>
            <a href="#gallery" className="text-sm hover:underline">
              Gallery
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mx-4 sm:mx-6">
          <p className="mt-2 mb-4 text-sm max-w-52 sm:max-w-lg">
            Penyedia jasa aluminium yang memberikan jaminan kualitas terbaik
            kepada konsumen. Harga yang bersaing, ketepatan waktu pengerjaan,
            dan pemasangan yang baik.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/andrianmac"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+6282232166957"
              className="hover:text-gray-300"
            >
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IoMailOutline />
            </a>
          </div>
        </div>
        <p className="mx-4 sm:mx-6 text-xs text-center sm:text-end">
          &copy;2024 Indie Aluminium
        </p>
      </div>
    </footer>
  );
};

export default Footer;
