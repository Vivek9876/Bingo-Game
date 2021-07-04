import { Component } from "react";
import { connect } from "react-redux";

import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from "redux-thunk";
import { Action, State } from "../../../shared/interface";
import { GameStateType, RandomNumber } from '../interface/game.interface';
import { randomNumberGenrator, findIndex, countBingos } from '../../../shared/utility/utility';
import DisplayTable from '../../../shared/component/displayTable/displayTable';
import Layout from '../../../shared/component/layout/layout';

interface MapStateProps {
    player: number,
    playerBoard: any
}

interface DispatchProps {

}


interface PropsType extends MapStateProps, DispatchProps, RouteComponentProps { }

class GameBoard extends Component<PropsType> {

    state: GameStateType = {
        randomArray: randomNumberGenrator().map(item => ({ isSelected: false, number: item })),
        playerBoard: this.props.playerBoard,
        winningObject: Object.entries(this.props.playerBoard).map((item, index) => ({ player: index + 1, win: 0 })),
        isBingo: false,
        bingoMessageArray: [],
        isFinish: false
    }

    onClickCard = (item: RandomNumber, index: number) => {
        const numberArray = this.state.randomArray;
        for (let i = 1; i <= this.props.player; i++) {
            const replaceElement = findIndex(this.state.playerBoard[i], item.number)
            if (replaceElement) {
                const playerBoard = this.state.playerBoard;
                playerBoard[i][replaceElement[0]][replaceElement[1]] = true;
                this.setState({
                    playerBoard
                })
            }
        }
        numberArray[index] = { isSelected: true, number: item.number }
        const winnObj: any = [];
        let bingoMessageArray: number[] = [];
        for (let i = 1; i <= this.props.player; i++) {
            const playerBoard = this.state.playerBoard[i];
            const count = countBingos(playerBoard, i);
            console.log('this.state.winnObject', this.state.winningObject)
            console.log('hello', this.state.winningObject[i - 1]);
            if (this.state.winningObject[i - 1].win < count) {
                bingoMessageArray.push(i-1);
                this.setState({
                    bingoMessageArray
                })
                this.setState({
                    isBingo: true
                }, () => {
                    setTimeout(() => this.setState({ isBingo: false }), 2000)
                })
            }
            winnObj.push({ player: i, win: count });
        }
        if(index === 24){
            this.setState({
                isFinish: true
            })
        }
        this.setState({
            randomArray: numberArray,
            winningObject: winnObj
        })
    }

    onClickHome = () => {
        this.props.history.push('/')
    }

    render() {
        const { playerBoard, randomArray, winningObject, isBingo, bingoMessageArray, isFinish } = this.state;

        return (
            <Layout>
                <div>
                    <div className="circle-wrap">
                        {randomArray.map((item, index) =>
                            item.isSelected ? <span className='numbermargin'>{item.number}</span> :
                                <span
                                    onClick={() => this.onClickCard(item, index)}
                                    className="circle" ></span>
                        )}
                    </div>
                    <div className="table-count">
                        {Object.entries(playerBoard).map(item =>
                            <div className="table-count-inn">
                                <DisplayTable playerInput={item[1]} />
                            </div>
                        )}
                    </div>
                    <div className="table-count win-text">
                        {winningObject.map((item: any) => {
                            return (<div className="table-count-inn">
                                <span>{`player ${item.player} have won ${item.win} bingos`}</span>
                            </div>)
                        })}
                    </div>
                </div>
                <div className={isBingo? `popup-block you-are-bingo`:`you-are-bingo`}>
                    {isBingo && <span>{bingoMessageArray.map(item => <span>Player {item + 1}</span>)}<br/>{'You Got Bingo'}</span>}
                </div>
                <div className={isFinish? `popup-block you-are-bingo`:`you-are-bingo`}>
                    {isFinish && <>
                        {winningObject.map((item: any) => {
                            return (<div className="table-count-inn">
                                <span>{`player ${item.player} have won ${item.win} bingos.`}</span>
                            </div>)
                        })}
                        <div className="text-center players-btn">
                        <button className="orange-btn" onClick={() => this.onClickHome()}>
                            Home
                        </button>
                    </div>
                    </>}
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

});

export default connect<
    MapStateProps,
    DispatchProps,
    Record<string, unknown>,
    State
>(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
