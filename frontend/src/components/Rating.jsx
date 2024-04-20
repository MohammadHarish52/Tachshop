import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { PropTypes } from "prop-types";

const Rating = ({ value, text }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="rating">
      <span>{stars}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rating;
