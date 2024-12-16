
// 类组件写法
import React from "react";

export class MyDay02 extends React.Component {
    constructor(props){
        super(props)

        console.log('类组件Props', props, this.props === props)

    }
    render(){
        return(<>
        <h2>类组件</h2>
        </>)
    }
}

// 函数式组件写法
export function MyDay02Fn(props){
    console.log('函数式组件Props', props)
    return (
        <>
            <h2>函数式组件</h2>
        </>
    )
}
