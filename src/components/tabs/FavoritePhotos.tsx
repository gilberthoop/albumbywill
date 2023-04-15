import '../../assets/css/photos.css';
import { useSelector } from 'react-redux';
import Photo from '../Photo'

interface PhotoData {
  id: number;
  filename: string;
  sizeInBytes: number;
  url: string;
  favorited: boolean;
}

function FavoritePhotos() {
  // Render only the favorite photos
  const { data } = useSelector((state: { photos: { data: PhotoData[] } }) => state.photos);
  const favoritePhotos = data.filter(photo => photo.favorited)

  const renderedPhotos = favoritePhotos.map((photo: PhotoData) => (
    <Photo
      key={photo.id}
      imageFileName={photo.filename}
      imageFileSize={photo.sizeInBytes}
      imageSource={photo.url}
    />
  ));

  return <div className="photo-grid">{renderedPhotos}</div>;
}

export default FavoritePhotos;