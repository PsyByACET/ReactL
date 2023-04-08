const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: "it-kamaz",
    posts: [
        {id: 1, message: "Hi", like_counts: 2},
        {id: 2, message: "Hi2", like_counts: 12},
        {id: 3, message: "HIIIIIII", like_counts: 321},
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:4,
                message: state.newPostText,
                like_counts: 0,
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        // state._callSubscriber(this._state);
            return state;

        default:
            return state;
    }

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostActionCreater = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export default profileReducer;