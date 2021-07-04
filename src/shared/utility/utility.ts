import { Action } from '../../shared/interface';

export const createAction = (ACTION: string, data: any = null): Action => {
    return {
        type: ACTION,
        payload: data
    };
};

export const returnPlayerBoard = (item: number) => {
    const playerObj: any = {};
    while (item > 0) {
        playerObj[`${item}`] = [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, true, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]]
        --item;
    }
    return playerObj;
}

export const countBingos = (arr: (number | boolean)[][], player: number) => {
    let binogs = 0;
    if ((arr[0][0] === true) && (arr[0][1] === true) && (arr[0][2] === true) && (arr[0][3] === true) && (arr[0][4] === true)) {
        ++binogs;
    }
    if ((arr[1][0] === true) && (arr[1][1] === true) && (arr[1][2] === true) && (arr[1][3] === true) && (arr[1][4] === true)) {
        ++binogs;
    }
    if ((arr[2][0] === true) && (arr[2][1] === true) && (arr[2][2] === true) && (arr[2][3] === true) && (arr[2][4] === true)) {
        ++binogs;
    }
    if ((arr[3][0] === true) && (arr[3][1] === true) && (arr[3][2] === true) && (arr[3][3] === true) && (arr[3][4] === true)) {
        ++binogs;
    }
    if ((arr[4][0] === true) && (arr[4][1] === true) && (arr[4][2] === true) && (arr[4][3] === true) && (arr[4][4] === true)) {
        ++binogs;
    }
    if ((arr[0][0] === true) && (arr[1][0] === true) && (arr[2][0] === true) && (arr[3][0] === true) && (arr[4][0] === true)) {
        ++binogs;
    }
    if ((arr[0][1] === true) && (arr[1][1] === true) && (arr[2][1] === true) && (arr[3][1] === true) && (arr[4][1] === true)) {
        ++binogs;
    }
    if ((arr[0][2] === true) && (arr[1][2] === true) && (arr[2][2] === true) && (arr[3][2] === true) && (arr[4][2] === true)) {
        ++binogs;
    }
    if ((arr[0][3] === true) && (arr[1][3] === true) && (arr[2][3] === true) && (arr[3][3] === true) && (arr[4][3] === true)) {
        ++binogs;
    }
    if ((arr[0][4] === true) && (arr[1][4] === true) && (arr[2][4] === true) && (arr[3][4] === true) && (arr[4][4] === true)) {
        ++binogs;
    }
    if ((arr[0][0] === true) && (arr[1][1] === true) && (arr[2][2] === true) && (arr[3][3] === true) && (arr[4][4] === true)) {
        ++binogs;
    }
    if ((arr[0][4] === true) && (arr[1][3] === true) && (arr[2][2] === true) && (arr[3][1] === true) && (arr[4][0] === true)) {
        ++binogs;
    }
    return binogs;
}

export const randomNumberGenrator = () => {
    let arr = [];
    while (arr.length < 25) {
        const r = Math.floor(Math.random() * 30) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

export const playerBoard = {
    1: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [13, 15, 16, 11, 22], [19, 22, 26, 21, 28], [11, 12, 29, 14, 20]],
    2: [[6, 7, 8, 9, 10], [1, 2, 3, 4, 5], [19, 22, 26, 21, 28], [13, 15, 16, 11, 22], [11, 12, 29, 14, 20]],
    3: [[13, 15, 16, 11, 22], [11, 12, 29, 14, 20], [6, 7, 8, 9, 10], [1, 2, 3, 4, 5], [19, 22, 26, 21, 28]]
}

export const findIndex = (array2d: any, itemtofind: number) => {
    const indexArray = [...array2d[0], ...array2d[1], ...array2d[2], ...array2d[3], ...array2d[4]]
    const index = indexArray.indexOf(itemtofind);
    const quotient = Math.floor(index / 5);
    if (quotient === -1) {
        return false;
    } else {
        const remainder = index % 5;
        return [quotient, remainder]
    }
}