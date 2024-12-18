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
export default function Pagnation(props) {
    // 由总数 和 pageSize 可得出一共有多少页，如果存在小数，向上取整
    const pageNumber = Math.ceil(props.totalCount / props.pageSize);

    // 先默认显示 5 个页码
    // 要求页码的最大值与最小值
    const min = getMinPageNo(props)
    const max = getMaxPageNo(props, pageNumber)

    const result = []
    for (let i = min; i <= max; i++) {
        result.push(
            <span className={props.pageNo === i?"item active" :"item"} key={i} onClick={()=>pageChange(i, props)}>{i}</span>
        )
    }
    return (
        <>
            <h2>分页组件</h2>
            {
                '总数' + props.totalCount
            }

            <span className={props.pageNo === 1 ? "item disable" : 'item'} onClick={() => pageChange(1, props)}>首页</span>
            <span className="item" onClick={() => pageChange(props.pageNo - 1 > 1 ? props.pageNo - 1 : 1, props)}>上一页</span>

            {/* <span className="item">1</span>
            <span className="item">2</span>
            <span className="item">3</span>
            <span className="item">4</span>
            <span className="item">5</span> */}
            {result}

            <span className="item" onClick={() => pageChange((props.pageNo + 1) > pageNumber ? pageNumber : props.pageNo + 1, props)}>下一页</span>
            <span className={props.pageNo === pageNumber ? "item disable" : 'item'} onClick={() => pageChange(pageNumber, props)}>尾页</span>

            {
                props.pageNo + '/' + pageNumber
            }
        </>
    )
}

function pageChange(newPageNo, props) {
    // 如果点击的就是当前页面，则无需做任何操作
    if (newPageNo === props.pageNo) {
        return;
    }

    props.onPageChange && props.onPageChange(newPageNo)

}

// 计算最小页数
function getMinPageNo(props) {
    return (props.pageNo - Math.floor(5 / 2)) < 1 ? 1 : (props.pageNo - Math.floor(5 / 2))
}

// 计算最大页数
function getMaxPageNo(props, pageNumber) {
    return getMinPageNo(props) + 5 - 1 > pageNumber ? pageNumber : getMinPageNo(props) + 5 - 1
}