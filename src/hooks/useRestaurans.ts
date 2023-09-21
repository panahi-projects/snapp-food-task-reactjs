import { IRestaurant, IRestaurantQuery } from '../interfaces';
import { getLocationInfo } from '../mock/location';
import useData from './useDate';

const { lat, long } = getLocationInfo();
const query: IRestaurantQuery = {
  page: 0,
  page_size: 10,
  lat,
  long
};

const useRestaurants = () => useData<IRestaurant, IRestaurantQuery>('/restaurant/vendors-list', query);

export default useRestaurants;
