import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { Action, State } from "../../../shared/interface";
import { BoardStateType } from '../interface/board.interface';
import TableInput from '../../../shared/component/tableInput/tableInput';
import { updatePlayerBoard } from '../../home/store/home.action';
import Layout from '../../../shared/component/layout/layout';

interface MapStateProps {
    player: number,
    playerBoard: any
}

interface DispatchProps {
    updatePlayerBoard: (player: any) => void;
}

interface PropsType extends MapStateProps, DispatchProps, RouteComponentProps { }

class Board extends Component<PropsType> {

    state: BoardStateType = {
        currentPlayer: 1,
        totalPlayer: [],
        isData: false,
        isValidationError: false,
        errorMessage: ''
    }

    componentDidMount() {

        const arr = [];
        for (let i = 0; i < this.props.player; i++) {
            arr[i] = (i + 1).toString();
        }
        this.setState({
            totalPlayer: arr,
            isData: true
        })
    };

    onPlayerChange = (item: number) => {
        this.setState({
            currentPlayer: item
        });
    }

    onChangeCellValue = (player: number, value: number, row: number, column: number) => {
        let playerArray: any = this.props.playerBoard[player];
        playerArray[row][column] = value;
        this.props.updatePlayerBoard({ ...this.props.playerBoard, [player]: playerArray })
    }

    onClickStartGame = () => {
        let isValidationError = false;
        let errorMessage = '';
        for (let i = 1; i <= this.state.totalPlayer.length; i++) {
            const playerInput = this.props.playerBoard[i];
            const checkUniquValue = [...playerInput[0], ...playerInput[1], ...playerInput[2], ...playerInput[3], ...playerInput[4]]
            if (checkUniquValue.includes(null || NaN)) {
                isValidationError = true
                errorMessage = `Player ${i} bingo board should not be empty`
                break;
            }
            const isNumberInRange = checkUniquValue.filter((item) => item > 0 && item < 30);
            if (isNumberInRange.length !== 25) {
                isValidationError = true
                errorMessage = `Player ${i} all number should beetween 0-30`
                break;
            }
            if (new Set(checkUniquValue).size !== checkUniquValue.length) {
                isValidationError = true
                errorMessage = `Player ${i} Bingo board values should be unique`
                break;
            }
        }
        this.setState({
            isValidationError,
            errorMessage
        }, () => {
            if (!this.state.isValidationError) {
                this.props.history.push('/game')
            }
        })
    }

    render() {
        const { totalPlayer, isValidationError, errorMessage } = this.state;

        return (
            <Layout>
                <div className="table-main">
                    <div className="table-wrap">
                    {
                        totalPlayer.map(item =>
                            <div className="game-count-table">
                                <button onClick={() => this.onPlayerChange(item)}>{`Player ${item}`}</button>
                                <><TableInput
                                    player={item}
                                    playerInput={this.props.playerBoard[`${item}`]}
                                    onChangeCellValue={this.onChangeCellValue}
                                /></>
                            </div>
                        )
                    }
                    </div>
                    <div className="game-start-bottom">
                    <button
                        onClick={() => this.onClickStartGame()}
                    >
                        Start Game
                    </button>
                    </div>
                </div>
                <div className="error-msg">
                    {isValidationError && <span>{errorMessage}</span>}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state: State): MapStateProps => ({
    ...state,
    player: state.home.player,
    playerBoard: state.home.playerBoard
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<
        Record<string, unknown>,
        Record<string, unknown>,
        Action
    >
): DispatchProps => ({
    updatePlayerBoard: (player: any) => dispatch(updatePlayerBoard(player)),
});

export default connect<
    MapStateProps,
    DispatchProps,
    Record<string, unknown>,
    State
>(
    mapStateToProps,
    mapDispatchToProps
)(Board);

// export default Board;
