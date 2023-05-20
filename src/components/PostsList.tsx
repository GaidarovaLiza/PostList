import {PostListType} from "../App";
import React from "react";
import s from './PostsList.module.css'
import {SuperButton} from "./SuperButton/SupperButton";
import {AddForm} from "./AddForm/AddForm";
import EditableSpan from "./EditableSpan/EditableSpan";

type PostsListPropsType = {
    posts: PostListType
    deletePost: (id: string) => void
    addPost: (title: string, body: string) => void
    addLike: (taskID: string) => void
    removeLike: (taskID: string) => void
    onChange: (newTitle: string, taskID: string, field: 'title' | 'body') => void
}

export const PostsList: React.FC<PostsListPropsType> = (
    {
        posts,
        deletePost,
        addPost,
        addLike,
        removeLike,
        onChange
    }
) => {

    const mappedPosts = posts.map(el => {
        return (
            <div className={s.post}>
                <div className={s.titleAndButton}>
                    <h3>
                        <EditableSpan text={el.title} id={el.id} onChange={onChange} field="title"/>
                    </h3>
                    <SuperButton callback={() => deletePost(el.id)} name={'X'}/>
                </div>
                <li className={s.body} key={el.id}>
                    <EditableSpan text={el.body} onChange={onChange} id={el.id} field="body"/>
                </li>
                <span>
                    <SuperButton callback={() => removeLike(el.id)} name={'-'}/>
                    {el.likes}
                    <SuperButton callback={() => addLike(el.id)} name={'+'}/>
                </span>
            </div>
        )
    })

    return (
        <div>
            <AddForm addPost={addPost}/>
            {mappedPosts}
        </div>
    )
}
