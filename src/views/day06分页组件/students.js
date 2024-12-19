export const getStudentsList = (pageNo=1, pageSize=10) =>{
    return new Promise((resolve, reject)=>{
        let result = [];
        let totalCount = 100;

        for(let i =0; i< totalCount; i++){
            result.push({
                id: Date.now()+''+Math.random(),
                name: Math.random().toString(36).substring(1, 5),
                age: Math.ceil(Math.random() * 100),
                sex: (Math.random() - 0.5)>0?'男':'女',
                index: i
            })
        }

        // 1 1 - 10
        // 2 11 - 20
        // 3 21 - 30
        let startIndex = pageNo * pageSize - pageSize/* (pageNo -1) * pageSize */
        let endIndex = startIndex + pageSize
        console.log('startIndex', startIndex, endIndex)
       const pageResult =  result.slice(startIndex, endIndex)

        resolve({
            data: pageResult,
            totalCount
        })
    })
}