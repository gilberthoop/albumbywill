import '../../assets/css/photos.css';
import { useSelector } from 'react-redux';
import Photo from '../Photo'

// Define interface for photo object
interface PhotoData {
  [key: string]: any;
}

function RecentPhotos() {
  // Render photos sorted by the most recent
  const { data } = useSelector((state: { photos: { data: PhotoData[] } }) => state.photos);
  const recentPhotos = data.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
 
  const renderedPhotos = recentPhotos.map((photo: PhotoData) => (
    <Photo
      key={photo.id}
      photo={photo}
      narrowCaption={false}
    />
  ));
  
  return <div className="photo-grid">{renderedPhotos}</div>;
}

export default RecentPhotos;