import { Component } from "react";
interface PropsType {

}
class Layout extends Component<PropsType> {
    render() {
        const { children } = this.props
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>
                            <div className="column">
                                <span className="blue-bg">B</span>
                                <span className="orange-bg">I</span>
                                <span className="yellow-bg">N</span>
                                <span>G</span>
                                <span className="green-bg">O</span>
                            </div>
                            <div className="column">
                                <span className="blue-bg">G</span>
                                <span className="orange-bg">A</span>
                                <span className="yellow-bg">M</span>
                                <span>E</span>
                            </div>
                        </h1>
                    </div>
                </header>
                <div className="main-block">
                    <div className="container">
                        {children}
                    </div>    
                </div>
            </div>
        )
    }
}

export default Layout;