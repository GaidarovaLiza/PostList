import React, {ChangeEvent, useState} from "react";
import {SuperButton} from "../SuperButton/SupperButton";

type AddFormPropsType = {
    addPost: (title: string, body: string) => void
}

export const AddForm: React.FC<AddFormPropsType> = (
    {
        addPost
    }
) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onChangeBodyHandler = (e: ChangeEvent<HTMLInputElement>) => setBody(e.currentTarget.value)

    const addTaskHandler = () => {
        addPost(title, body)
        setBody('')
        setTitle('')
    }

    return (
        <div>
            <input placeholder={'Type your title'} value={title} onChange={onChangeTitleHandler} type="text"/>
            <input placeholder={'Type your post'} value={body} onChange={onChangeBodyHandler} type="text"/>
            <SuperButton callback={addTaskHandler} name={'Add'}/>
        </div>
    )
}