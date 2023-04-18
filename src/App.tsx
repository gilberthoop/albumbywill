import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchPhotos, RootState } from './store';
import NavBar from './components/navigation/NavBar';
import RecentPhotos from './components/tabs/RecentPhotos';
import FavoritePhotos from './components/tabs/FavoritePhotos';
import PhotoDetails from './components/PhotoDetails';

function App() {
  // Load the photos data on app render by dispatching the thunk fetchPhotos function
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch();
  const { isLoading, error } = useSelector((state: RootState) => state.photos);

  // Get data about the selected photo.
  const selectedPhotoData = useSelector((state: RootState) => state.selectedPhoto);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  if (isLoading) {
    return <section className="loading-section">Loading...</section>;
  }

  if (error) {
    return (
      <section className="error-section">
        Error fetching photos. Please try again later.
      </section>
    );
  }

  // Render details about the photo that is currently selected.
  const rendredSelectedPhoto = Object.keys(selectedPhotoData).length > 0
    ? <section className="app-section app-section--narrow"><PhotoDetails photo={selectedPhotoData} /></section>
    : null

  return (
    <div className="app-container">
      <section className="app-section app-section--padded">
        <header className="app-heading">
          <h1>Photos</h1>
          <NavBar />
        </header>
        <div className="app-tab">
          <Routes>
            <Route path="/" element={<RecentPhotos />} />
            <Route path="/favorites" element={<FavoritePhotos />} />
          </Routes>
        </div>
      </section>
      
      {rendredSelectedPhoto}
    </div>
  );
}; 

export default App;