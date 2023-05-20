import React, {useReducer} from 'react';
import './App.css';
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";
import {addLikeAC, addPostAC, changeTitleAC, deletePostAC, PostsReducer, removeLikeAC} from "./Reducers/PostsReducer";

export type PostListType = PostType[]

export type PostType = {
    id: string,
    title: string,
    body: string
    likes: number
}


function App() {
    const [posts, dispatchPosts] = useReducer(PostsReducer, [
        {id: v1(), title: "My first post", body: "This is the content of my first blog post.", likes: 5},
        {id: v1(), title: "Another post", body: "This is the content of another blog post.", likes: 3},
        {id: v1(), title: "A third post", body: "This is the content of a third blog post.", likes: 10},
    ])

    const addPost = (title: string, body: string) => dispatchPosts(addPostAC(title, body))
    const deletePost = (id: string) => dispatchPosts(deletePostAC(id))
    const addLike = (taskID: string) => dispatchPosts(addLikeAC(taskID))
    const removeLike = (taskID: string) => dispatchPosts(removeLikeAC(taskID))

    const changeTitle = (newText: string, postId: string, field: 'title' | 'body') => dispatchPosts(changeTitleAC(newText, postId, field))


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
