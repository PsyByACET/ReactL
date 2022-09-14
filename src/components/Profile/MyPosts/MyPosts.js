import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div className="div">
                new post
            </div>
            <MyPost />
            <MyPost />
            <MyPost />
            <MyPost />
        </div>
    );
}
export default MyPosts