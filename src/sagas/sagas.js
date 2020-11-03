import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import history from '../history/history';

function* login() {

  try {
    const json = yield axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBfd2HjJmstw4eqJzmzOmkOluVKNqs6yZc',
      {
        email: localStorage.email,
        password: localStorage.password,
      })
      .then((response) => response.data,);
    yield put({ type: "LOGIN" });
    history.push('/home');
  }
  catch {
    yield put({ type: "LOGIN_FAIL" });
  }

}

function* categoryProductsUpdate() {

  const json = yield axios.get('https://react-sphene-app-80aae.firebaseio.com/.json')
    .then(response => response.data.HomeProducts);

  yield put({ type: "UPDATE_CATEGORY_PRODUCTS", arr: json });

}
function* getShopProducts() {

  const json = yield axios.get('https://react-sphene-app-80aae.firebaseio.com/.json')
    .then(response => response.data.ShopProducts);

  yield put({ type: "UPDATE_SHOP_PRODUCTS", productsArr: json });

}





function* actionWatcher() {
  yield takeLatest('LOGIN_INITIATE', login);
  yield takeLatest('INITIATE_CATEGORY_PRODUCTS', categoryProductsUpdate);
  yield takeLatest('GET_SHOP_PRODUCTS', getShopProducts);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}