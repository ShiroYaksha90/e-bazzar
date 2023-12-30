import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (id, qty) => async (dispatch, getState) => {
  // getState is used to get the entire state tree
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      // eslint-disable-next-line no-underscore-dangle
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export default addToCart;
