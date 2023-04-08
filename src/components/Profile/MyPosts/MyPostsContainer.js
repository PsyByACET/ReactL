import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css"
import React, { useRef } from "react";
import {addPostActionCreater, updateNewPostActionCreater} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {


    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreater())

    }

    let onPostChange = (testText) => {
        props.store.dispatch(updateNewPostActionCreater(testText))
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}></MyPosts>
    );
}
export default MyPostsContainer