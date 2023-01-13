export interface Clothing {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  sizes: string[];
}

export interface ClothingResponse {
  data: Clothing[];
}
