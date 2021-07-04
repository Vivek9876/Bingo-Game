import { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action, State } from "../../../shared/interface";
import { setPlayer } from '../store/home.action';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../../shared/component/layout/layout';

interface StateType {
    isGameStart: boolean;
}

interface MapStateProps {

}

interface DispatchProps {
    setPlayer: (player: number) => void;
}

interface PropsType extends MapStateProps, DispatchProps, RouteComponentProps { }

class Home extends Component<PropsType> {
    state: StateType = {
        isGameStart: true
    }

    startGame = () => {
        this.setState({
            isGameStart: false
        })
    }

    onClickPlayer = (player: number) => {
        this.props.setPlayer(player);
        this.props.history.push('/board');
    }

    render() {
        const { isGameStart } = this.state;

        return (
            <Layout>
                <div>
                    {
                        isGameStart ? <div className="text-center"> <button onClick={() => this.startGame()}>
                            Start Game
                        </button></div>
                            : <div className="text-center players-btn">
                                <button onClick={() => this.onClickPlayer(1)}>
                                    1 Player
                                </button>
                                <button className="orange-btn" onClick={() => this.onClickPlayer(2)}>
                                    2 Player
                                </button>
                                <button className="gray-btn" onClick={() => this.onClickPlayer(3)}>
                                    3 Player
                                </button>
                            </div>}
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state: State): MapStateProps => ({
    ...state,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<
        Record<string, unknown>,
        Record<string, unknown>,
        Action
    >
): DispatchProps => ({
    setPlayer: (player: number) => dispatch(setPlayer(player)),
});

export default connect<
    MapStateProps,
    DispatchProps,
    Record<string, unknown>,
    State
>(
    mapStateToProps,
    mapDispatchToProps
)(Home);

