import React, { useState } from 'react'
import colorNames from 'colornames'
import {FaPen} from 'react-icons/fa'


const Paragraph = ({posts}) => {
    
  return (
   <>
        <ul>
            {posts.map((post)=>(
                <li className="post" key={post.id}>
                    <div className='card postCard'>
                        <h2 className='postTitle'>{post.title}</h2>
                        <hr/>
                        <p className='postBody'>{post.body}</p>
                        <hr />
                            <div className='postActionsBar'>
                                <time className='postTime'>Posted: {post.dateAdded}</time>
                                <button className='postSubmitButton'><FaPen/></button>
                            </div>
                    </div>
                </li>
            ))}
        </ul>
   </>
  )
}

export default Paragraph
