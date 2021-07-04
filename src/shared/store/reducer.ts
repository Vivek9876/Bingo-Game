import { combineReducers } from 'redux';
import { State, Action } from '../interface';
import homeReducer from '../../features/home/store/home.reducer';
// import { State, Action } from 'shared/interface';
// import loginReducer from 'features/login/store/login.reducer';
// import loadingReducer from './loading.reducer';
// import { navigationReducer } from 'shared/store/navigation.reducer';
// import { cpCouponReducer } from 'features/customerPanel/cpCoupons/store/cpCoupon.reducer';
// import { CouponReducer } from 'shared/store/coupon.reducer';

const appReducer = combineReducers({
    home: homeReducer,
    // loading: loadingReducer,
    // login: loginReducer,
    // navigation: navigationReducer,
    // cpcoupon: cpCouponReducer,
    // coupon: CouponReducer
});

const rootReducer = (state: State | undefined, action: Action): any => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;