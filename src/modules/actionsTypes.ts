import { PhotoData } from "./types";

export interface RemovePhotoById {
  type: string;
  payload: string;
}

export interface UpdateFavoritesById {
  type: string;
  payload: string;
}

export interface UpdateFavorites {
  type: string;
  payload: PhotoData;
}

export interface SelectPhoto {
  type: string;
  payload: PhotoData;
}
