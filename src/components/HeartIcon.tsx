import "../assets/css/ui-elements.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { markAsFavorite, updateFavoritesById, RootState } from "../store";
import { PhotoData } from "../modules/types";

const HeartIcon: React.FC = () => {
  /**
   * Determine if the photo is currently favorited
   * so that it can be used for proper toggling and styling.
   */
  const photoData = useSelector((state: RootState) => state.selectedPhoto);

  /**
   * Handle click events on the heart icon
   * for dispatching the actions to correctly add to favorites.
   * 'markAsFavorite' marks the selected photo as favorite.
   * 'updateFavorites' updates the photos state.
   * @param {PhotoData} - the photos state
   */
  const dispatch = useDispatch();
  const handleAddToFavorites = (photo: PhotoData) => {
    dispatch(markAsFavorite());
    dispatch(updateFavoritesById(photo.id));
  };

  // Render the heart icon, using AiOutlineHeart when the icon is not filled and AiFillHeart when it is filled
  return (
    <button
      className="heart-icon"
      onClick={() => handleAddToFavorites(photoData)}
    >
      {photoData.favorited ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
    </button>
  );
};

export default HeartIcon;
