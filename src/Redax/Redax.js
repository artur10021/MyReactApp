const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _callSubscriber() {
        console.log("from state")
    },
    _appState: {
        profilePage: {
            posts: [
                { id: 1, postMessage: "Hi, how are you", likes: 15 },
                { id: 2, postMessage: "I, hope you will enjoy my proect!", likes: 20 },
            ],
            newPostText: "example",
        },

        dialoguesPage: {
            massegesData: [
                { id: 1, massegeText: "Hi, how are you?" },
                { id: 1, massegeText: "Your project is so nice!" },
                { id: 1, massegeText: "Hi" },
                { id: 1, massegeText: "Thank you! :3" },
            ],
            contactsData: [
                { id: 1, name: "Artur", img: "https://i.pinimg.com/originals/00/bf/e1/00bfe1b5690bdb15794ef9175c107bc8.png" },
                { id: 2, name: "Andrej", img: "https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png" },
                { id: 3, name: "Max", img: "https://www.si-lab.org/img/members/avatar4.png" },
                { id: 4, name: "Viktoria", img: "https://i.pinimg.com/originals/a2/26/91/a226914001492533a363c320ba6dba4c.png" },
                { id: 5, name: "Madama", img: "https://i.pinimg.com/originals/cb/d5/a4/cbd5a4f8087a308a53c71bdf5d6b165e.png" },
                { id: 6, name: "Dima", img: "https://i.pinimg.com/originals/60/7b/a1/607ba1795c55444e38bed385a9272932.png" },


            ],
        },
    },
    getAppState() {
        return this._appState;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                postMessage: this._appState.profilePage.newPostText,
                likes: 0,
            }

            this._appState.profilePage.posts.push(newPost);
            this._callSubscriber(store.getAppState);
            this._appState.profilePage.newPostText = '';

        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._appState.profilePage.newPostText = action.newText;
            this._callSubscriber(store.getAppState);
        }
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default store;