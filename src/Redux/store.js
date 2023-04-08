import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {

        profilePage: {
            newPostText: "it-kamaz",
            posts: [
                {id: 1, message: "Hi", like_counts: 2},
                {id: 2, message: "Hi2", like_counts: 12},
                {id: 3, message: "HIIIIIII", like_counts: 321},
            ]
        },

        dialogsPage: {
            newMessageBody: '',
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "how are you"},
                {id: 3, message: "im fine"},
                {id: 4, message: "kek"},
                {id: 5, message: "Leha pidor"}
            ],
            dialogs: [
                {id: 1, name: "Andry"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Bogdan"},
                {id: 4, name: "Dimas"},
                {id: 5, name: "Leha"}
            ],
        },

        navbar: {
            friends: [
                {id: 1, name: "Alena", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"},
                {id: 2, name: "Valya", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"},
                {id: 3, name: "Oksana", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"}
            ]
        },

    },
    _callSubscriber ()  {
        console.log("sssss")
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = sidebarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);

    },

}







window.store = store;

export default store