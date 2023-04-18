// Define interface for photo object
export interface PhotoData {
  [key: string]: any;
};

// Define interface for photo dimensions
export interface Dimensions {
  height: number;
  width: number;
};

// Define interface for label
export interface Label {
  title: string;
  value: string;
}

// Define interface for PhotoState
export interface PhotosState {
  data: any[];
  isLoading: boolean;
  error: any | null;
}