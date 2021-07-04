import { Component } from "react";
import { StarIcon } from "../icon/icon";

interface PropsType {
    playerInput: any;
}

interface StateType {
    playerInput: any;
}

class TableInput extends Component<PropsType>{

    state: StateType = {
        playerInput: this.props.playerInput
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
                                    {row === 2 && column === 2 ?  <StarIcon/>: cell}
                                </td>)}
                        </tr>)}
                </table>
            </>
        )
    }
}

export default TableInput;
