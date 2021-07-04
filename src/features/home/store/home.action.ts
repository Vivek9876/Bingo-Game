import { ThunkDispatch } from 'redux-thunk';

import * as actionTypes from '../../../shared/store/action-type';
import { createAction, returnPlayerBoard } from '../../../shared/utility/utility';


const setPlayer = (player: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, any>) => {
        try {
            const playerBoard = returnPlayerBoard(player);
            dispatch(createAction(actionTypes.SET_PLAYER, {
                player,
                playerBoard
            }));
        } catch (err) {
            console.log('this is error', err)
        }
    };
};

const updatePlayerBoard = (playerBoard: any) => {
    return async (dispatch: ThunkDispatch<{}, {}, any>) => {
        try {
            dispatch(createAction(actionTypes.UPDATE_PLAYER_BOARD, {
                playerBoard
            }));
        } catch (err) {
            console.log('this is error', err)
        }
    };
}

export {
    setPlayer,
    updatePlayerBoard
}