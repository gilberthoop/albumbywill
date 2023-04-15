import { useSelector } from 'react-redux';
import Photo from './Photo'

interface PhotoData {
  id: number;
  filename: string;
  sizeInBytes: number;
  url: string;
  }

function RecentPhotos() {
  const { data } = useSelector((state: { photos: { data: PhotoData[] } }) => state.photos);
  const renderedPhotos = data.map((photo: PhotoData) => (
    <Photo
      key={photo.id}
      imageFileName={photo.filename}
      imageFileSize={photo.sizeInBytes}
      imageSource={photo.url}
    />
  ));
  

  return <div className="photo-grid">{renderedPhotos}</div>;
}

export default RecentPhotos;