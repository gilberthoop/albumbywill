import { selectPhoto, removePhoto, markAsFavorite, selectedPhotoReducer } from '../selectedPhotoSlice';

describe('selectedPhotoSlice', () => {
  const initialState = {};

  it('should handle selectPhoto', () => {
    const selectedPhoto = { id: 1, title: 'photo1' };
    const action = selectPhoto(selectedPhoto);
    const newState = selectedPhotoReducer(initialState, action);

    expect(newState).toEqual(selectedPhoto);
  });

  it('should handle removePhoto', () => {
    const action = removePhoto();
    const newState = selectedPhotoReducer(initialState, action);

    expect(newState).toEqual({});
  });

  it('should handle markAsFavorite', () => {
    const initialState = { id: 1, title: 'photo1' };
    const action = markAsFavorite(true);
    const newState = selectedPhotoReducer(initialState, action);

    expect(newState).toEqual({ id: 1, title: 'photo1', favorited: true });
  });
});
