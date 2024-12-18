export const getStudentsList = (pageNo=1, pageSize=10) =>{
    return new Promise((resolve, reject)=>{
        let result = [];

        for(let i =0; i< 100; i++){
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
        let startIndex = pageNo * pageSize - pageSize
        let endIndex = startIndex + pageSize
       const pageResult =  result.slice(startIndex, endIndex)

        resolve(pageResult)
    })
}