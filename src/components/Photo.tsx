import '../assets/css/photos.css';
import { useDispatch } from 'react-redux';
import { selectPhoto, resetSelectedPhoto } from '../store';
import HeartIcon from './HeartIcon';

// Define interface for photo object
interface PhotoData {
  [key: string]: any;
}

// Define interface for props passed to PhotoDetails component
interface PhotoProp {
  photo: PhotoData;
  narrowCaption: boolean;
}

function Photo({ photo, narrowCaption  }: PhotoProp) {
  // Calculate the image size and format in MB
  const imageSizeInMB = photo.sizeInBytes / (1024 * 1024);
  const imageSize = `${imageSizeInMB.toFixed(1)} MB`;

  /**
   * Dispatch the resetSelectedPhoto and selectPhoto actions.
   * resetSelectedPhoto makes sure that the state starts with a fresh value
   * before it gets reassigned a new value using selectPhoto.
   */ 
  const dispatch = useDispatch();
  const handlePhotoClick = () => {
    dispatch(resetSelectedPhoto());
    dispatch(selectPhoto(photo));
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
        className="photo-card__img"
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
        { narrowCaption ? <HeartIcon /> : null }
      </section>
    </section>
  );
}

export default Photo;