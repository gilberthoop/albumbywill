import { useEffect } from 'react';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchPhotos, RootState } from './store';
import RecentPhotos from './components/RecentPhotos';

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
    <div className="app-container grid">
      Album
      <RecentPhotos />
    </div>
  );
}; 

export default App;