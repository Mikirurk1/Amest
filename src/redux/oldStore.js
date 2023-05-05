import profileReduser from "./reduser/profileReduser";
import dialogReduser from './reduser/dialogReduser';


let store = {
    _state: {
        dialogPage: {
            dialogData: [
                { id: 1, name: 'Mikola' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Karina' },
                { id: 4, name: 'Kiril' }

            ],
            messageData: [
                { id: 5, message: 'Dialog1' },
                { id: 6, message: 'Dialog2' },
                { id: 7, message: 'Dialog3' },
                { id: 8, message: 'Dialog4' },
                { id: 9, message: 'Dialog5' },
                { id: 10, message: 'Dialog6' },
                { id: 11, message: 'Dialog7' }
            ],
            newMessageText: '',
        },
        profilePage: {
            postData: [
                { id: 1, name: 'Mikola', text: 'Good Game Mikirurk-', likes: '10', avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/kartinki-dlya-vajbera-na-avu-1.jpg' },
                { id: 2, name: 'Nikita', text: 'Good Game Mikirurk10', likes: '125', avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/b_5b30ea9329fe1.jpg' },
                { id: 3, name: 'Karina', text: 'Good Game Mikirurk(', likes: '421', avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/1554879524_2.jpg' },
                { id: 4, name: 'Kiril', text: 'Good Game Mikirurk)', likes: '375', avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/bezymyannyje-6.jpg' },
            ],
            newPostText: '',

        },
      


    },
    _callSubscriber() {
        console.log('hello i dont know what i do thare')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogReduser(this._state.dialogPage, action)
        this._callSubscriber(this._state)

    },
}

export default store;
