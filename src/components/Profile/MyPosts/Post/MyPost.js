import s from "./MyPost.module.css"

const MyPost = (props) => {
    return (
        <div className={s.item}>

            <img src="https://mp3-cherry.com/uploads/cover/artist/9641e31c3933f50d6c031b3ee0ca3689.jpg" alt=""/>
            <span>{props.message}</span>
            <button onClick={()=> {alert('testAlert1111')}}>{props.like_counts}</button>
        </div>
    );
}
export default MyPost