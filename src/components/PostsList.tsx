import {PostListType} from "../App";
import {ChangeEvent, useState} from "react";
import s from './PostsList.module.css'
import {SuperButton} from "./SuperButton/SupperButton";
import {AddForm} from "./AddForm/AddForm";

type PropsType = {
    posts: PostListType
    deletePost: (id: string) => void
    addPost: (title: string, body: string) => void
    addLike: (taskID: string) => void
    removeLike: (taskID: string) => void
}

export const PostsList = (props: PropsType) => {

    const mappedPosts = props.posts.map(el => {
        return (
            <div className={s.post}>
                <div className={s.titleAndButton}>
                    <h3>{el.title}</h3>
                    <SuperButton callback={() => props.deletePost(el.id)} name={'X'}/>
                </div>
                <li className={s.body} key={el.id}>{el.body}</li>
                <span>
                    <SuperButton callback={() => props.removeLike(el.id)} name={'-'}/>
                    {el.likes}
                    <SuperButton callback={() => props.addLike(el.id)} name={'+'}/>
                </span>
            </div>
        )
    })

    return (
        <div>
            <AddForm addPost={props.addPost}/>
            {mappedPosts}
        </div>
    )
}