import '../../assets/css/photos.css';
import { useSelector } from 'react-redux';
import Photo from '../Photo'

// Define interface for photo object
interface PhotoData {
  [key: string]: any;
}

function FavoritePhotos() {
  // Render only the favorite photos
  const { data } = useSelector((state: { photos: { data: PhotoData[] } }) => state.photos);
  const favoritePhotos = data.filter(photo => photo.favorited)

  const renderedPhotos = favoritePhotos.map((photo: PhotoData) => (
    <Photo
      key={photo.id}
      photo={photo}
      narrowCaption={false}
    />
  ));

  return <div className="photo-grid">{renderedPhotos}</div>;
}

export default FavoritePhotos;