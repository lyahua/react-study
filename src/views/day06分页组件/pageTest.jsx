import React from "react";
import Pagnation from './index.jsx'

export default class PageTest extends React.Component{
    state = {
        pageNo:3, pageSize: 11, totalCount: 99
    }

    onPageChange=(newPageNo)=>{
        console.log('%c 新页码' +newPageNo,'color: red')
        this.setState({
            pageNo: newPageNo
        })
    }
    render(){
        return (
            <>
                <Pagnation {...this.state} onPageChange = {this.onPageChange}/>
            </>
        )
    }
}