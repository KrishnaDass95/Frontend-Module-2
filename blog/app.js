// get all the elements
const createNewPostElement = document.querySelector('#new-post');
const newPostModalElement = document.querySelector('.modal-new-post');

// empty array to store all the blogs
let blogs = [];





function closeModal(modal){
    modal.style.display = 'none';
}


function createNewBlog(){
    newPostModalElement.style.display = 'block'
    const cancelButton = document.querySelector('#cancel');
    const crossButton = document.querySelector('.close');

    let blogsObj = {

    }
    const publishButtonElement = document.querySelector('#publish');

    publishButtonElement.addEventListener('click', ()=> {
        const blogTitle = document.querySelector('.blog-title').value;
        const blogDesc = document.querySelector('.blog-desc').value;
        alert(blogTitle + blogDesc);
    });

    cancelButton.addEventListener('click', ()=>{
        closeModal(newPostModalElement)});
    crossButton.addEventListener('click', ()=> {
        closeModal(newPostModalElement)
    });
    
}

// event listeners
createNewPostElement.addEventListener('click', createNewBlog);


