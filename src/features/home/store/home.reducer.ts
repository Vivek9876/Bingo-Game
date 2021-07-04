import * as actionTypes from '../../../shared/store/action-type';
import { Action } from '../../../shared/interface';
import { HomeState } from '../interface/home.interface';

const initialState: HomeState = {
    player: 0,
    playerBoard: {}
};

const reducer = (
    state: HomeState = initialState,
    action: Action
): HomeState => {
    switch (action.type) {
        case actionTypes.SET_PLAYER:
            console.log('playerBoard', action.payload.playerBoard)
            return {
                ...state,
                player: action.payload.player,
                playerBoard: action.payload.playerBoard
            };
        case actionTypes.UPDATE_PLAYER_BOARD:
            return {
                ...state,
                playerBoard: action.payload.playerBoard
            };
        default:
            return state;
    }
};

export default reducer;
