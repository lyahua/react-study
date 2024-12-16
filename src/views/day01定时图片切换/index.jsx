import React from "react";
import ReactDOM from 'react-dom/client';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

export class ImageChange extends React.Component {
    constructor() {
        super();

        this.state = {
            arr: [img1, img2, img3],
            index: 0,
            timeId: ''
        }

    }

    stop() {
        clearInterval(this.state.timeId)
    }

    start(){
        this.stop()
        this.state.timeId = setInterval(() => {
            this.setState((state) => {
                return {
                    index: (state.index + 1) % 3
                }
            })
        }, 1000);
    }

    componentDidMount() {
        this.start()

        // console.log(document.querySelector('img'), 'dom')
        const dom = document.querySelector('img')
        dom.addEventListener('mouseenter', () => {
            console.log('鼠标移入')
            this.stop()
        })
        
        dom.addEventListener('mouseleave',()=>{
            this.start()
        })
    }
    render() {
        return (
            <>
                {
                    // ReactDOM.render(<h1>1111</h1>)
                }
                <img src={this.state.arr[this.state.index]} />
            </>
        )
    }
}