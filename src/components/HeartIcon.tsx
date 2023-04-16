import '../assets/css/ui-elements.css';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function HeartIcon() {
  // Define a state variable to keep track of whether the heart icon is filled or not
  const [isFilled, setIsFilled] = useState(false);

  /**
   * Handle click events on the heart icon
   * by toggling the isFilled state when the heart icon is clicked
   */
  const handleClick = () => {
    setIsFilled(!isFilled);
  };


  // Render the heart icon, using AiOutlineHeart when the icon is not filled and AiFillHeart when it is filled
  return (
    <div className="heart-icon" onClick={handleClick}>
      {isFilled ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
    </div>
  );
}

export default HeartIcon;