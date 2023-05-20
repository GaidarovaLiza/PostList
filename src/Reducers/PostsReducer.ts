import {v1} from "uuid";
import {PostListType} from "../App";

type ActionType = AddPostACType | DeletePostACType | AddLikeACType | RemoveLikeACType | ChangeTitleACType

export const PostsReducer = (state: PostListType, action: ActionType): PostListType => {
    switch (action.type) {
        case "ADD_POST": {
            let newPost = {id: v1(), title: action.payload.title, body: action.payload.body, likes: 0}
            return [newPost, ...state]
        }
        case "DELETE_POST": {
            return state.filter(p => p.id !== action.payload.id)
        }
        case "ADD_LIKE": {
            return state.map(el => el.id === action.payload.id ? {...el, likes: el.likes + 1} : el)
        }
        case "REMOVE_LIKE": {
            return state.map(el => el.id === action.payload.id ? {
                ...el,
                likes: el.likes - 1
            } : el)
        }
        case "CHANGE_TITLE": {
            return state.map(el => el.id === action.payload.postId ? {
                ...el,
                [action.payload.field]: action.payload.newText
            } : el)
        }
        default : {
            return state
        }
    }
}

type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (title: string, body: string) => {
    return {
        type: 'ADD_POST',
        payload: {
            title,
            body
        }
    } as const
}

type DeletePostACType = ReturnType<typeof deletePostAC>

export const deletePostAC = (id: string) => {
    return {
        type: 'DELETE_POST',
        payload: {
            id
        }
    } as const
}

type AddLikeACType = ReturnType<typeof addLikeAC>

export const addLikeAC = (id: string) => {
    return {
        type: "ADD_LIKE",
        payload: {
            id
        }
    } as const
}

type RemoveLikeACType = ReturnType<typeof removeLikeAC>

export const removeLikeAC = (id: string) => {
    return {
        type: "REMOVE_LIKE",
        payload: {
            id
        }
    } as const
}

type ChangeTitleACType = ReturnType<typeof changeTitleAC>

export const changeTitleAC = (newText: string, postId: string, field: 'title' | 'body') => {
    return {
        type: "CHANGE_TITLE",
        payload: {
            newText,
            postId,
            field
        }
    } as const
}