import '../assets/css/ui-elements.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { markAsFavorite, updateFavorites } from '../store';

// Define interface for photo object
interface PhotoData {
  [key: string]: any;
}

function HeartIcon() {
  /**
   * Determine if the photo is currently favorited
   * so that it can be used for proper toggling and styling.
   */
  const photoData = useSelector((state: PhotoData) => state.selectedPhoto)

  /**
   * Handle click events on the heart icon
   * for dispatching the actions to correctly add to favorites.
   * 'markAsFavorite' marks the selected photo as favorite.
   * 'updateFavorites' updates the photos state.
   * @param {PhotoData} - the photos state
   */
  const dispatch = useDispatch();
  const handleAddToFavorites = (photo: PhotoData) => {
    const updatedPhotoFavorited = { ...photo, favorited: !photo.favorited };
    dispatch(markAsFavorite(updatedPhotoFavorited.favorited));
    dispatch(updateFavorites(updatedPhotoFavorited));
  }

  // Render the heart icon, using AiOutlineHeart when the icon is not filled and AiFillHeart when it is filled
  return (
    <button className="heart-icon" onClick={() => handleAddToFavorites(photoData)}>
      {photoData.favorited ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
    </button>
  );
}

export default HeartIcon;