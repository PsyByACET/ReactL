import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://browsecat.net/sites/default/files/3440x1440-mountain-wallpapers-98041-878818-4684520.png" alt=""/>
            </div>
            <div>
                ava+des
            </div>
            <div>
                my posts
                <div className="div">
                    new post
                </div>
                <div className={s.item}>
                    post#1
                </div>
                <div className={s.item}>
                    post#2
                </div>
            </div>
        </div>
    );
}
export default Profile