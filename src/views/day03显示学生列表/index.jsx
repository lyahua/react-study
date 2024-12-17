import React from 'react'
import { getStudentsList } from './students'
import { StudentsItem } from './studentsitem'

export class StudentList extends React.Component {

    state = {
        result: []
    }
    componentDidMount() {
        getStudentsList().then(list => {
            // console.log('list', list)
            this.setState({
                result: list.map(x => <StudentsItem {...x} key={x.id}/>)
            })

        })
    }
    render() {

        return (
            <>
                <h2>学生列表</h2>
                {this.state.result}
            </>
        )
    }
}