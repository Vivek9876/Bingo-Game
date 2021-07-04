export interface RandomNumber {
    isSelected: boolean,
    number: number
}
export interface GameStateType {
    randomArray: RandomNumber[];
    playerBoard: any;
    winningObject: any;
    isBingo: boolean;
    bingoMessageArray: number[];
    isFinish: boolean;
}