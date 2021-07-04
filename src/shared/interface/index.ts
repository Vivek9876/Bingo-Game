import { HomeState } from "../../features/home/interface/home.interface";

export interface Action {
    type: string;
    payload: any;
}

export interface State {
    home: HomeState;
    // loading: LoadingState;
    // login: LoginState;
    // navigation: NavigationTypeState;
    // cpcoupon: CpCouponGobalState;
    // coupon: CouponState;
}