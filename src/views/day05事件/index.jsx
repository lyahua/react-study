import React from "react";

export class Tick extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 10,
        }

        // let timerid = setInterval(() => {

        //     console.log(this.state.number)
        //     if (this.state.number === 0) {
        //         clearInterval(timerid)
        //     }
        //     this.setState({
        //         number: this.state.number - 1
        //     })
        // }, 1000)

       
    }

    componentDidMount() {
        const timer = setInterval(() => {
            // this.setState({
            //     number: this.state.number - 1
            // })
            this.setState({
                number: this.state.number -1
            },() =>{
                console.log(this.state.number)
                if (this.state.number === 0) {
                    clearInterval(timer);
                    //倒计时完成
                    // this.props.onOver && this.props.onOver();
                }
            })
            
        }, 1000);
    }

    render() {
        return (
            <>
                <h1>
                    倒计时：{this.state.number}
                </h1>
            </>
        )
    }
}