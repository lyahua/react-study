import React from "react";
import Pagnation from './index.jsx'
import { getStudentsList } from './students.js'
import { StudentsItem } from '../day03显示学生列表/studentsitem.jsx'

export default class PageTest extends React.Component {
    state = {
        pageParams: {

            pageNo: 1, pageSize: 9, 
        },
        totalCount: 99,
        data: []
    }

    onPageChange =  (newPageNo) => {
        console.log('%c 新页码' + newPageNo, 'color: red')
        this.setState({
            pageParams: {
                ...this.state.pageParams,
                pageNo: newPageNo
            }
        },async ()=>{
            await this.initData()
        })

        
    }

   async initData(){
        const res = await getStudentsList(this.state.pageParams.pageNo, this.state.pageParams.pageSize)
        this.setState({
            data: res.data,
            totalCount: res.totalCount
        })
    }

    async componentDidMount() {
        await this.initData()
    }
    render() {
        return (
            <>
                {
                    this.state.data.map(item => <StudentsItem {...item} key={item.id} />)
                }
                <Pagnation {...this.state.pageParams} totalCount={this.state.totalCount} onPageChange={this.onPageChange} />
            </>
        )
    }
}