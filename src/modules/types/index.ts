// Define interface for photo object
export interface PhotoData {
  id: string;
  url: string;
  filename: string;
  description: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  dimensions: Dimensions;
  resolution: Resolution;
  sizeInBytes: number;
  sharedWith: SharedWith[];
  favorited: boolean;
}

// Define interface for the photos as PhotosState
export interface PhotosState {
  data: PhotoData[];
  isLoading: boolean;
  error: string | null;
}

// Define interface for SharedWith
export interface SharedWith {
  id: string;
  name: string;
  avatar: string;
}

// Define interface for photo dimensions
export interface Dimensions {
  height: number;
  width: number;
}

// Define interface for photo resolution
export interface Resolution {
  height: number;
  width: number;
}

// Define interface for label
export interface Label {
  title: string;
  value: string;
}
