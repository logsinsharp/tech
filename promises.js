const posts=[
    {title:"Post one",body:"This is post one",createdAt: new Date().getTime()},
    {title:"Post two",body:"This is post two",createdAt: new Date().getTime()},
    {title:"Post three",body:"This is post three",createdAt: new Date().getTime()}
];

let intervalId=0;

function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(() => {
        let output='';
        for(i=0;i<posts.length;i++){
            output +=`<li> ${posts[i].title}=last updated ${(new Date().getTime()- posts[i].createdAt)/1000} seconds ago</li>`;
        }
        document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
        },1000);
    });
}
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastElement=posts.pop()
                resolve(lastElement);
            }else{
                reject('array is empty now');

            }

        },1000);
    });
}
function updatelastActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            user.lastActivity =new Date().getTime();
            resolve(user.lastActivity)
        })
    })
}
function userUpdate(){
    Promise.all([createPost,updatelastActivity]).then(([createPostres,updatelastActivityres])=>{
        console.log(updatelastActivityres)
    })
    .catch((err)=>console.log(err))
}


createPost({title:"Post four",body:"This is post four"})
.then(()=>{
    getPosts()
    deletePost().then((deleteElement)=>{
        console.log(deleteElement)
        getPosts();
        deletePost().then((deleteElement)=>{
            console.log(deleteElement)
            getPosts();
            deletePost().then((deleteElement)=>{
                console.log(deleteElement)
                getPosts();
                deletePost().then((deleteElement)=>{
                    console.log(deleteElement)
                    getPosts();
                })
                .catch((err)=>{
                    console.log('inside catch block',err)
                })
            })
        })       
    })
})
.catch((err)=>console.log(err))




