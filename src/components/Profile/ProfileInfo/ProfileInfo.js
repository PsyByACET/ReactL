import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.main_photo}>
                <img src="https://browsecat.net/sites/default/files/3440x1440-mountain-wallpapers-98041-878818-4684520.png" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+des
            </div>
        </div>
    );
}
export default ProfileInfo