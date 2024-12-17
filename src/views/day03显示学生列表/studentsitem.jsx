export function StudentsItem(props){
    return(
        <>
            <li>
                【ID 】: {props.id}
                【姓名】：{props.name}
                【年龄】：{props.age}
                【性别】：{props.sex} 
                【index】：{props.index}
            </li>     
        </>
    )
}