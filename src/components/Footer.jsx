export const Footer = () => {
  return (
    <footer className="bg-[#075985] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Indie Aluminium</h2>
            <p className="mt-2 text-sm">
              Penyedia aluminium terbaik dengan harga terjangkau dan kualitas
              terjamin.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:items-start md:flex-row md:gap-6">
            <a href="#home" className="text-sm hover:underline">
              Home
            </a>
            <a href="#catalog" className="text-sm hover:underline">
              Tentang Kami
            </a>
            <a href="#gallery" className="text-sm hover:underline">
              Gallery
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center md:justify-between items-center">
          <p className="text-xs">&copy; 2024 Indie Aluminium</p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
