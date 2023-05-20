import React, {ChangeEvent, useEffect, useState} from "react";

type EditableSpanPropsType = {
    text: string
    onChange: (newText: string, postId: string, field: 'title' | 'body') => void
    id: string
    field: 'title' | 'body'
}

const EditableSpan: React.FC<EditableSpanPropsType> = (
    {
        text,
        id,
        field,
        onChange
    }
) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(text)

    const onDoubleClickHandler = () => setEditMode(true)

    const onBlurHandler = () => {
        setEditMode(false)
        onChange(value, id, field)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    useEffect(() => {
        setValue(text)
    }, [text])

    return (
        editMode
            ? <input value={value} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus type="text"/>
            : <span onDoubleClick={onDoubleClickHandler}>{text}</span>
    );
};

export default EditableSpan;