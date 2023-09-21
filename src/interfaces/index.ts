export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';
export interface IRestaurantQuery {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}
export interface IRestaurant {
  type: string;
  data: {
    id: number;
    title: string;
    description: string;
    rate: number;
    logo: string;
    voteCount: number;
    backgroundImage: string;
    deliveryFee: number;
    best_coupon: string;
    isOpen: boolean;
  };
}
