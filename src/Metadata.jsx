import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Metadata = ({ title, description, icon, openGraph }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {icon && <link rel="icon" href={icon} />}
      {description && <meta name="description" content={description} />}
      {openGraph?.images && (
        <meta property="og:image" content={openGraph.images[0]} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string,
  openGraph: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

Metadata.defaultProps = {
  title: "Indie Aluminium",
  description:
    "Kami melayani pemasangan aluminium di Sidoarjo dan sekitarnya. Seperti pintu, kusen, jendela dan partisi lain dengan menggunakan bahan yang berkualitas tinggi dengan beragam merk pilihan dan warna sesuai dengan kebutuhan anda",
  icon: "public/logo.jpg",
  openGraph: {
    images: ["opengraph-image.png"],
  },
};

export default Metadata;
