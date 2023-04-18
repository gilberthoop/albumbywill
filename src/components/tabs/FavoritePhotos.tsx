import '../../assets/css/photos.css';
import { useSelector } from 'react-redux';
import { PhotoData } from '../../modules/types';
import Photo from '../Photo'

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

  return <div data-testid="photo-grid" className="photo-grid">{renderedPhotos}</div>;
}

export default FavoritePhotos;