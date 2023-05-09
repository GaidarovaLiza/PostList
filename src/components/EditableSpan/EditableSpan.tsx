import {ChangeEvent, useEffect, useState} from "react";

type EditableSpanPropsType = {
    text: string
    onChange: (newText: string, postId: string, field: 'title' | 'body') => void
    id: string
    field: 'title' | 'body'
}

const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(props.text)

    const onDoubleClickHandler = () => setEditMode(true)

    const onBlurHandler = () => {
        setEditMode(false)
        props.onChange(text, props.id, props.field)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)

    useEffect(() => {
        setText(props.text)
    }, [props.text])

    return (
        editMode
            ? <input value={text} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus type="text"/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.text}</span>
    );
};

export default EditableSpan;