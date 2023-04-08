import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css"
import React, { useRef } from "react";
import {addPostActionCreater, updateNewPostActionCreater} from "../../../Redux/profile-reducer";
const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let onAddPost = () => {
        // let testText = newPostElement.current.value;
        // alert(testText)
        // props.dispatch(addPostActionCreater())
        props.addPost();


    }

    let onPostChange = () => {
        let testText = newPostElement.current.value;
        // props.dispatch(updateNewPostActionCreater(testText))
        props.updateNewPostText(testText);
    }

    let postsElements = props.posts.map(p => <MyPost message={p.message} like_counts={p.like_counts}/>)
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className="div">
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}>Добаить пост</button>
            </div>
            {postsElements}

        </div>
    );
}
export default MyPosts