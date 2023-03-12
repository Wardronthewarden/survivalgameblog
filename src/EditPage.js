import React, { useState } from 'react'

const EditPage = ({editBody, setEditBody, editTitle, setEditTitle, handleEdit, id}) => {
    return(
        <>
            <form className='postForm card' onSubmit={() => handleEdit(id)}>
            <label className='hidden' htmlFor='postForm'>Edit Post</label>
            <input 
                className='titleInput'
                type='text'
                autoComplete='off'
                id='postTitleField' 
                required 
                placeholder='Enter title here' 
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)} 
                />
                <hr/>
            <TextareaAutosize 
                className='bodyInput'
                type='text' 
                autoComplete='off'
                id='postBodyField' 
                required 
                placeholder='Enter text here'
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                />
                <hr/>
            <button className='postSubmitButton' type='submit' ><FaPaperPlane/></button>
        </form>
        </>
    )
}