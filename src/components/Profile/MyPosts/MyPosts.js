import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css"
const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi", like_counts: 2},
        {id: 2, message: "Hi2", like_counts: 12},
        {id: 3, message: "HIIIIIII", like_counts: 321},
    ]
    let postsElements = posts.map(p => <MyPost message={p.message} like_counts={p.like_counts}/>)
    return (
        <div className={s.postsBlock}>
            my posts
            <div className="div">
                new post
            </div>
            {postsElements}

        </div>
    );
}
export default MyPosts