import "../../assets/css/photos.css";
import { useSelector } from "react-redux";
import { PhotoData } from "../../modules/types";
import Photo from "../Photo";

const RecentPhotos: React.FC = () => {
  // Render photos sorted by the most recent
  const { data } = useSelector(
    (state: { photos: { data: PhotoData[] } }) => state.photos
  );
  const recentPhotos = data
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const renderedPhotos = recentPhotos.map((photo: PhotoData) => (
    <Photo key={photo.id} photo={photo} narrowCaption={false} />
  ));

  return (
    <div data-testid="photo-grid" className="photo-grid">
      {renderedPhotos}
    </div>
  );
};

export default RecentPhotos;
