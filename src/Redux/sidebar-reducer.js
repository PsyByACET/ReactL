let initialState = {
    friends: [
        {id: 1, name: "Alena", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"},
        {id: 2, name: "Valya", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"},
        {id: 3, name: "Oksana", image: "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-58.jpg"}
    ]
}

const sidebarReducer = (state= initialState, action) => {
    console.log(state);
    return state
}
export default sidebarReducer;