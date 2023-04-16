import '../assets/css/ui-elements.css';
import Photo from './Photo';

// Define interface for photo object
interface Photo {
  [key: string]: any;
}

// Define interface for props passed to PhotoDetails component
interface PhotoProp {
  photo: Photo;
}

// Define interface for photo dimensions
interface Dimensions {
  height: number;
  width: number;
}

/**
 * Formats a date string according to the mockup.
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Formats the dimensions of the photo according to the mockup.
 * @param {Dimensions} dimensions - The dimensions of the photo.
 * @returns {string} The formatted dimensions string.
 */
const formatDimensions = ({ height, width }: Dimensions) => {
  return `${height} x ${width}`;
}

function PhotoDetails({ photo }: PhotoProp) {
  // Define the labels (with values) for photo details
  const { uploadedBy, createdAt, updatedAt, dimensions, resolution, description } = photo;
  const labels = [
    { title: 'Uploaded by', value: uploadedBy },
    { title: 'Created' , value: formatDate(createdAt) },
    { title: 'Last modified', value: formatDate(updatedAt) },
    { title: 'Dimensions', value: formatDimensions(dimensions) },
    { title: 'Resolution', value: formatDimensions(resolution) }
  ];

  // Set photo description to 'Not available' if it is undefined or null
  const photoDescription = description ?? 'Not available.';

  return (
    <section className="photo-details">
      <Photo photo={photo} narrowCaption={true} />
      <section className="photo-info">
        <h3>Information</h3>
        <hr />
        {
          labels.map((label, index) => (
            <div>
              <div className="photo-info__label" key={index}>
                <p>{label.title}</p>
                <p>{label.value}</p>
              </div>
              <hr />
            </div>
          ))
        }
      </section>
  
      <section className="photo-description">
        <h3>Description</h3>
        <p>{photoDescription}</p>
      </section>

      <button className="fluid-btn">Delete</button>
    </section>
  );
}

export default PhotoDetails;