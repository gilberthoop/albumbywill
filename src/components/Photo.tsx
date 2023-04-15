interface PhotoProps {
  imageFileName: string,
  imageFileSize: number,
  imageSource: string
};

function Photo({ imageFileName, imageFileSize, imageSource }: PhotoProps) {
  return (
    <div className="photo-container">
      <img
        className="photo-container__img"
        src={imageSource}
      />
      <div className="photo-container__title">
        {imageFileName}
      </div>
      <div className="photo-container__subtitle">
        {imageFileSize}
      </div>
    </div>
  );
}

export default Photo;