import React from "react";
import './pagnation.css'

// export default class Pagnation extends React.Component {

//     render(){
//         return (
//             <>
//                 <h2>分页组件</h2>
//             </>
//         )
//     }
// }

/**
 * 数据源
 * @returns 
 * current 当前页
 * pageNo 页码号
 * pageSize 分页大小
 * totalCount 总数
 */
export default function Pagnation() {
    return (
        <>
            <h2>分页组件</h2>

            <span>首页</span>
            <span>上一页</span>

            <span>下一页</span>
            <span>尾页</span>
        </>
    )
}