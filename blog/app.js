// get all the elements
const createNewPostElement = document.querySelector('#new-post');
const newPostModalElement = document.querySelector('.modal-new-post');
const blogContainerElement = document.querySelector('.blog-container');
const editPostModalElement = document.querySelector('.modal-edit-post');
const body = document.getElementsByTagName('body');
const editCancelButton = document.querySelector('.close-edit')
const cancelButton = document.querySelector('#cancel');
const crossButton = document.querySelector('.close');
const publishButtonElement = document.querySelector('#publish');
const saveDataButtonElement = document.querySelector('#save');
const deleteEditButtonElement = document.querySelector('#delete');


// empty array to store all the blogs
let blogs = [];

function saveDataFromEditModal(postId){
    let postElement = document.querySelector(`.blog[data-id="${postId}"]`);
    let blogTitleInput = document.querySelector('.blog-title-edit');
    let blogDescInput = document.querySelector('.blog-desc-edit');
    
    let titleValue = blogTitleInput.value;
    let descValue = blogDescInput.value;

    let titleElement = postElement.querySelector('h3');
    let descElement = postElement.querySelector('p');
    titleElement.textContent = titleValue;
    descElement.textContent = descValue;

    //lets close modal
    closeModal(editPostModalElement);
}

function deleteBlogFromEditModal(postId){
    console.log('delete blog called from edit modal');
    // get the parent blog using the target and parentNode function
    let postElement = document.querySelector(`.blog[data-id="${postId}"]`);
    console.log('postElement', postElement);

    // you can find elements using this and then you can 
    console.log('postID', postId);
    postElement.remove();
    // ideally handle deleting the data inside the blogs array

    const indexToBeDeleted = blogs.findIndex(obj => obj.id === postId)
    console.log('del' , indexToBeDeleted);
    if(indexToBeDeleted != -1){
        blogs.splice(indexToBeDeleted, 1);
    }
    closeModal(editPostModalElement);
    
}

function deleteBlog(event){
    console.log('delete blog called');
    // get the parent blog using the target and parentNode function
    let postElement = event.target.parentNode.parentNode.parentNode;
    console.log('postElement', postElement);

    // you can find elements using this and then you can 
    let postId = postElement.dataset.id;
    console.log('postID', postId);
    postElement.remove();
    // ideally handle deleting the data inside the blogs array

    const indexToBeDeleted = blogs.findIndex(obj => obj.id === postId)
    console.log('del' , indexToBeDeleted);
    if(indexToBeDeleted != -1){
        blogs.splice(indexToBeDeleted, 1);
    }
}
function editBlog(event){
    let postElement = event.target.parentNode.parentNode.parentNode;
    console.log(postElement);
    let postId = postElement.dataset.id;
    let blogHeading = '';
    let blogContent = '';
    blogs.forEach(function (blog, index){
        if(blog.id == postId){
            blogHeading = blog.title;
            blogContent = blog.description;
        }
    })
    // console.log('head', blogHeading);
    // console.log('head', blogContent); 
    
    // let's show the edit Modal
    editPostModalElement.style.display = 'block';
    let blogTitleInput = document.querySelector('.blog-title-edit');
    let blogDescInput = document.querySelector('.blog-desc-edit');
    console.log('ll', blogTitleInput);
    blogTitleInput.value = blogHeading;
    blogDescInput.value = blogContent;

    // now we need to handle the delete
    deleteEditButtonElement.addEventListener('click', ()=>{
        deleteBlogFromEditModal(postId);
    } );
    saveDataButtonElement.addEventListener('click', ()=>{
        saveDataFromEditModal(postId);
    })
}


function addBlogToPage(obj) {
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog");
    blogElement.setAttribute('data-id', obj.id);
  
    const headingElement = document.createElement("h3");
    headingElement.textContent = obj.title;
    blogElement.appendChild(headingElement);
  
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = obj.description;
    blogElement.appendChild(paragraphElement);

    const dateAndButtonGroupDiv = document.createElement('div');
    dateAndButtonGroupDiv.classList.add('dateAndButtonGroupDiv');

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('buttonGroup')
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Post";
    editButton.classList.add('edit-button')
    buttonGroup.appendChild(editButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Post";
    deleteButton.classList.add('delete-button');
    deleteButton.classList.add('edit-button')
    buttonGroup.appendChild(deleteButton);

    dateAndButtonGroupDiv.appendChild(buttonGroup);
  
    const dateElement = document.createElement("span");
    dateElement.textContent = obj.date;
    dateElement.classList.add('date');
    dateAndButtonGroupDiv.appendChild(dateElement);

    blogElement.appendChild(dateAndButtonGroupDiv);
  
    blogContainerElement.appendChild(blogElement);


    deleteButton.addEventListener('click', deleteBlog);
    editButton.addEventListener('click', editBlog);
    // deleteEditButtonElement.addEventListener('click', deleteBlog);

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
    newPostModalElement.style.display = 'block';
}


publishButtonElement.addEventListener('click', ()=> {
    let blogTitleInput = document.querySelector('.blog-title');
    let blogDescInput = document.querySelector('.blog-desc');
    let blogTitle = blogTitleInput.value;
    let blogDesc = blogDescInput.value;
    if(!blogTitle && !blogDesc){
        alert('Blog fields are empty, please add data');
    }
    else{
    let blogsObj = {
        id: Math.random().toString(36).substring(2,8),
        title: blogTitle,
        description: blogDesc,
        date: `created At: ${getDateAndTime()}`,
    }
    // for debugging
    console.log(blogsObj); 
    blogs.push(blogsObj);
    addBlogToPage(blogsObj);
    blogTitleInput.value = '';
    blogDescInput.value = '';
    closeModal(newPostModalElement);
}
});




editCancelButton.addEventListener('click', ()=> {
    closeModal(editPostModalElement);
})
cancelButton.addEventListener('click', ()=>{
    closeModal(newPostModalElement)});
crossButton.addEventListener('click', ()=> {
    closeModal(newPostModalElement)
});


// event listeners
createNewPostElement.addEventListener('click', createNewBlog);


