export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';
export interface IRestaurantQuery {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}
export interface IRestaurantData {
  id: number;
  title: string;
  description: string;
  rate: number;
  logo: string;
  voteCount: number;
  backgroundImage: string;
  deliveryFee: number;
  discountValueForView: number;
  best_coupon: string;
  isOpen: boolean;
  isZFExpress: boolean; //is express delivery
}
export interface IRestaurant {
  type: string;
  data: IRestaurantData;
}
