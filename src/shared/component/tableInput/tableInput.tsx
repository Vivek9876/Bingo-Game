import { Component } from "react";
import { StarIcon } from "../icon/icon";

interface PropsType {
    player: number;
    playerInput: any;
    onChangeCellValue: (value: number, player: number, row: number, column: number) => void;
}

interface StateType {
    playerInput: any;
}

class TableInput extends Component<PropsType>{

    state: StateType = {
        playerInput: this.props.playerInput
    }

    onChangeCellValue = (value: number, row: number, column: number) => {
        this.props.onChangeCellValue(this.props.player, value, row, column);
    }

    render() {
        const { playerInput } = this.state;

        return (
            <>
                <table>
                    {playerInput.map((item: number[], row: number) =>
                        <tr>
                            {item.map((cell, column) =>
                                <td>
                                    {row === 2 && column === 2 ? <span><StarIcon/></span> : <input
                                        type="text"
                                        id="depositedAmount"
                                        maxLength={2}
                                        pattern="[+-]?\d+(?:[.,]\d+)?"
                                        placeholder="Enter number"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChangeCellValue(parseInt(e.target.value), row, column)}
                                        value={cell ? cell : ''}
                                    />}
                                </td>)}
                        </tr>)}
                </table>
            </>
        )
    }
}

// const mapStateToProps = (state: State): MapStateProps => ({
//     ...state,
//     playerBoard: state.home.playerBoard
// });

// const mapDispatchToProps = (
//     dispatch: ThunkDispatch<
//         Record<string, unknown>,
//         Record<string, unknown>,
//         Action
//     >
// ): DispatchProps => ({

// });

// export default connect<
//     MapStateProps,
//     DispatchProps,
//     Record<string, unknown>,
//     State
// >(
//     mapStateToProps,
//     mapDispatchToProps
// )(TableInput);


export default TableInput;