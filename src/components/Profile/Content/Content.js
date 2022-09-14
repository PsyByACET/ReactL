import s from "../Content/Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.main_photo}>
                <img src="https://browsecat.net/sites/default/files/3440x1440-mountain-wallpapers-98041-878818-4684520.png" alt=""/>
            </div>
            <div>
                ava+des
            </div>
            <MyPosts />


        </div>
    );
}
export default Content