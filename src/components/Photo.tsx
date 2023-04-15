import '../assets/css/photos.css';

interface PhotoData {
  [key: string]: any;
}

interface PhotoProp {
  photo: PhotoData;
}

function Photo({ photo }: PhotoProp) {
  const imageSizeInMB = photo.sizeInBytes / (1024 * 1024);
  const imageSize = `${imageSizeInMB.toFixed(1)} MB`;

  return (
    <div className="photo-card">
      <img
        className="photo-card__img"
        src={photo.url}
        alt={photo.description}
      />
      <div className="photo-card__caption">
        <div className="photo-card__title">
          {photo.filename}
        </div>
        <div className="photo-card__subtitle">
          {imageSize}
        </div>
      </div>
    </div>
  );
}

export default Photo;