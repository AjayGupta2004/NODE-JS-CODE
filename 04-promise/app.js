async function yourLogic(){
    await new Promise((resolve,reject) =>{
        setTimeout(()=>{
        console.log('hello who are you')
        resolve()
        },1000)
    })


    
}

console.log('one')
await yourLogic()
console.log('Two')