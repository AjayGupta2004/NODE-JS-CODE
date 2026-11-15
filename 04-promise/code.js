function fetchStudent(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Rahul");
        },2000)
    })

    
}

async function loadStudent() {
    const student = await fetchStudent();
    console.log(student);
}

loadStudent();