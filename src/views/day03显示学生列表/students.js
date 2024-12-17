export const getStudentsList = () =>{
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

        resolve(result)
    })
}