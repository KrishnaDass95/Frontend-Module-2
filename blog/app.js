// get all the elements
const createNewPostElement = document.querySelector('#new-post');
const newPostModalElement = document.querySelector('.modal-new-post');

// empty array to store all the blogs
let blogs = [];



function addBlogToPage(obj){
    
}

function getDateAndTime(){
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const time = d.toLocaleTimeString();
    return `${date}/${month}/${year} at ${time}`;
}

// close the modal when open
function closeModal(modal){
    modal.style.display = 'none';
}

// Creates a new Blog
function createNewBlog(){
    newPostModalElement.style.display = 'block'
    const cancelButton = document.querySelector('#cancel');
    const crossButton = document.querySelector('.close');
    const publishButtonElement = document.querySelector('#publish');

    publishButtonElement.addEventListener('click', ()=> {
        let blogTitle = document.querySelector('.blog-title').value;
        let blogDesc = document.querySelector('.blog-desc').value;
        let blogsObj = {
            id: Math.random().toString(36).substring(2,8),
            title: blogTitle,
            description: blogDesc,
            date: `created At: ${getDateAndTime()}`,
        }
        // for debugging
        // console.log(blogsObj); 
        blogs.push(blogsObj);
        addBlogToPage(blogsObj);
        // TODO clear the fields once submitted
    });

    cancelButton.addEventListener('click', ()=>{
        closeModal(newPostModalElement)});
    crossButton.addEventListener('click', ()=> {
        closeModal(newPostModalElement)
    });
    
}

// event listeners
createNewPostElement.addEventListener('click', createNewBlog);


