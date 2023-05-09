import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";

export type PostListType = PostType[]

export type PostType = {
    id: string,
    title: string,
    body: string
    likes: number
}


function App() {
    const [posts, setPosts] = useState<PostListType>([
        {id: v1(), title: "My first post", body: "This is the content of my first blog post.", likes: 5},
        {id: v1(), title: "Another post", body: "This is the content of another blog post.", likes: 3},
        {id: v1(), title: "A third post", body: "This is the content of a third blog post.", likes: 10},
    ])

    const addPost = (title: string, body: string) => {
        let newPost = {id: v1(), title: title, body: body, likes: 0}
        setPosts([newPost, ...posts])
    }

    const deletePost = (id: string) => setPosts(posts.filter(p => p.id !== id))
    const addLike = (taskID: string) => setPosts(posts.map(el => el.id === taskID ? {...el, likes: el.likes + 1} : el))
    const removeLike = (taskID: string) => setPosts(posts.map(el => el.id === taskID ? {
        ...el,
        likes: el.likes - 1
    } : el))

    const changeTitle = (newText: string, postId: string, field: 'title' | 'body') => setPosts(posts.map(el => el.id === postId ? {
        ...el,
        [field]: newText
    } : el))


    return (
        <div className="App">
            <PostsList addLike={addLike}
                       removeLike={removeLike}
                       posts={posts}
                       deletePost={deletePost}
                       addPost={addPost}
                       onChange={changeTitle}/>

        </div>
    )
}

export default App;
