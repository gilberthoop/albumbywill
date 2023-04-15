import '../assets/css/photos.css';

interface PhotoProps {
  imageFileName: string,
  imageFileSize: number,
  imageSource: string
};

function Photo({ imageFileName, imageFileSize, imageSource }: PhotoProps) {
  const imageSizeInMB = imageFileSize / (1024 * 1024);
  const imageSize = `${imageSizeInMB.toFixed(1)} MB`;

  return (
    <div className="photo-card">
      <img
        className="photo-card__img"
        src={imageSource}
      />
      <div className="photo-card__caption">
        <div className="photo-card__title">
          {imageFileName}
        </div>
        <div className="photo-card__subtitle">
          {imageSize}
        </div>
      </div>
    </div>
  );
}

export default Photo;