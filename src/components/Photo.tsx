import '../assets/css/photos.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoto } from '../store';
import { PhotoData } from '../modules/types';

// Define interface for props passed to PhotoDetails component
interface PhotoProp {
  photo: PhotoData;
  narrowCaption: boolean;
}

function Photo({ photo, narrowCaption  }: PhotoProp) {
  // Determine selected photo to be highlighted and apply outline style.
  const selectedPhoto = useSelector((state: PhotoData) => state.selectedPhoto)
  const isSelected = selectedPhoto && selectedPhoto.id === photo.id;
  const cardImgClassName = `photo-card__img ${isSelected ? 'photo-card__img--selected' : ''}`;

  // Calculate the image size and format in MB
  const imageSizeInMB = photo.sizeInBytes / (1024 * 1024);
  const imageSize = `${imageSizeInMB.toFixed(1)} MB`;

  /**
   * Dispatch the selectPhoto action to get data about the selected photo.
   * Scroll up window to focus view on the details.
   */ 
  const dispatch = useDispatch();
  const handlePhotoClick = () => {
    dispatch(selectPhoto(photo));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine the class name of the label and caption sections based on the narrowCaption prop
  const labelClassName = narrowCaption
    ? 'photo-card__label photo-card__label--narrow'
    : 'photo-card__label';
  const captionClassName = narrowCaption
    ? 'photo-card__caption photo-card__caption--narrow'
    : 'photo-card__caption';

  return (
    <section className="photo-card" onClick={handlePhotoClick}>
      <img
        className={cardImgClassName}
        src={photo.url}
        alt={photo.description}
      />
      <section className={labelClassName}>
        <section className={captionClassName}>
          <div className="photo-card__title">
            {photo.filename}
          </div>
          <div className="photo-card__subtitle">
            {imageSize}
          </div>
        </section>
      </section>
    </section>
  );
}

export default Photo;