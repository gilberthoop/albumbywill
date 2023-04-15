import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchPhotos, RootState } from './store';
import NavBar from './components/navigation/NavBar';
import RecentPhotos from './components/tabs/RecentPhotos';
import FavoritePhotos from './components/tabs/FavoritePhotos';

function App() {
  // Load the photos data on app render by dispatching the thunk fetchPhotos function
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch();
  const { isLoading, error } = useSelector((state: RootState) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching photos.</div>
  }

  return (
    <div className="app-container">
      <h1 className="heading">Photos</h1>
      <section className="app-section">
        <NavBar />
        <div className="tab-container">
          <Routes>
            <Route path="/" element={<RecentPhotos />} />
            <Route path="/favorites" element={<FavoritePhotos />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}; 

export default App;