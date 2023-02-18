import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize'

const NewPostForm = ({handleSubmit, newPostTitle, setNewPostTitle, newPostBody, setNewPostBody}) => {
    
  return (
   <>
   <form className='postForm card' onSubmit={handleSubmit}>
            <label className='hidden' htmlFor='postForm'>Add Post</label>
            <input 
                className='titleInput'
                type='text'
                autoComplete='off'
                id='postTitleField' 
                required 
                placeholder='Enter title here' 
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)} 
                />
                <hr/>
            <TextareaAutosize 
                className='bodyInput'
                type='text' 
                autoComplete='off'
                id='postBodyField' 
                required 
                placeholder='Enter text here'
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                />
                <hr/>
            <button className='postSubmitButton' type='submit' ><FaPaperPlane/></button>
        </form>
   </>
  )
}

export default NewPostForm