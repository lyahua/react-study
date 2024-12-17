import React from "react";
import './ball.css'
export class Ball extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            left: props.left || 0, // 横坐标
            top: props.top || 0, // 纵坐标
            xSpeed: 100,
            ySpeed: 200,
            background: props.background ||'red',
            duration: 16, // 间隔的时间
        }
    }

    componentDidMount(){
        setInterval(()=>{
            const xDis = this.state.xSpeed * (this.state.duration / 1000)
            const yDis = this.state.ySpeed * (this.state.duration / 1000)
            let left = this.state.left + xDis;
            let top = this.state.top + yDis;
            this.setState({
                left,
                top
            })
            if(left> document.documentElement.clientWidth -100){
                left = document.documentElement.clientWidth -100
                this.setState({
                    left: left,
                    xSpeed: -this.state.xSpeed
                })
            }
            if(left < 0){
                left = 0;
                this.setState({
                    left: left,
                    xSpeed: -this.state.xSpeed
                })
            }
            if(top> document.documentElement.clientHeight - 100){
                top = document.documentElement.clientHeight - 100
                this.setState({
                    top: top,
                    ySpeed: -this.state.ySpeed
                })
            }
            if(top<0){
                top = 0;
                this.setState({
                    top: top,
                    ySpeed: -this.state.ySpeed
                })
            }
            
        },this.state.duration)
    }

    render(){
        return(
            <>
                <div className="ball" style={{background: this.state.background, top: this.state.top, left: this.state.left}}>

                </div>
            </>
        )
    }
}