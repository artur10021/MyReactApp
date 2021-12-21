const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, postMessage: "Hi, how are you", likes: 15 },
        { id: 2, postMessage: "I, hope you will enjoy my proect!", likes: 20 },
    ],
    newPostText: "example",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                postMessage: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;


        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)


export default profileReducer;