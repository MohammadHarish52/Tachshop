import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Tachshop",
  description: "We sell the best products for cheap",
  keywords: "electronic, buy, shop, best buy, cheap",
};

export default Meta;
