import Paragraph from "./Paragraph";
import React, { useEffect, useState } from "react";
import apiRequest from "./apiRequest";
import NewPostForm from "./PostForm";
function App() {
  const API_URL = 'http://localhost:3500/paragraphs'

  const [posts, setPosts] = useState([])
  const [newPostTitle, setNewPostTitle] = useState([])
  const [newPostBody, setNewPostBody] = useState([])
  const [fetchError, setFetchError] =useState(null)
  const [editBody, setEditBody] = useState('')
  const [editTitle, setEditTitle] = useState('')

  const handleSubmit = async (e)=> {
    if(!newPostTitle || !newPostBody) return;
    const correctedBody = newPostBody.replace(/(\r\n|\r|\n)/g, '<br>')
    setNewPostBody(correctedBody)
    const success = await addPost()
    if (success == null){
    setNewPostTitle('')
    setNewPostBody('')
    }

  }

  const initPostDate = () =>{
    const currentTime = new Date()
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth()+1;
    const day = currentTime.getDate();

    const currentDate = `${year}/${month}/${day}`
    return currentDate
  }

  const getEditTime = () =>{
    const currentTime = new Date()
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth()+1;
    const day = currentTime.getDate();

    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    const editTime = `${year}/${month}/${day} ${hour}:${minute}`
    return editTime
  }

  const handleEdit =(id)=>{
      const editTime = getEditTime()
      
  }

  const addPost = async () => {
    const id = posts.length ? posts[posts.length - 1].id +1 : 1;
    const dateAdded = initPostDate()
    const lastModified = getEditTime()
    const title = newPostTitle
    const body = newPostBody
    
    const newPost = {
      id, body, title, dateAdded, lastModified
    }
    console.log(JSON.stringify(newPost))

    console.log(newPost)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result);
    return result
  }

  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listPosts = await response.json()
        console.log(listPosts)
        setPosts(listPosts.reverse())
        setFetchError(null)
      }catch (err) {
        setFetchError(err.message)
      }
    }

    (async () => await fetchPosts())()
  }, [])
 

  return (
    <div className="App">
      <main>
        <section className="paragraphContainer">
      
      <NewPostForm
        handleSubmit={handleSubmit}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
        newPostBody={newPostBody}
        setNewPostBody={setNewPostBody}
       />
       <Paragraph
        posts={posts} 
      />
       </section>
      </main>

    </div>
  );
}

export default App;
