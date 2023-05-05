const SEND_MESSAGE = 'dialogReduser/SEND-MESSAGE'



let initialState = {
    dialogData: [
        { id: 1, name: 'Mikola' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Karina' },
        { id: 4, name: 'Kiril' }

    ],
    messageData: [
        { id: 5, message: 'Dialog1', userId: 1 },
        { id: 6, message: 'Dialog2', userId: 1 },
        { id: 7, message: 'Dialog3', userId: 1 },
        { id: 8, message: 'Dialog4', userId: 1 },
        { id: 9, message: 'Dialog5', userId: 1 },
        { id: 10, message: 'Dialog6', userId: 1 },
        { id: 11, message: 'Dialog7', userId: 1 }
    ],
}

const dialogReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 12,
                message: action.newMessageText,
                userId: action.userId
            }

            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            }

        default:
            return state;;
    }
}
// ActionCreators//////////////////////////////////////////////////////////////////////


export const sendMessage = (newMessageText, userId, id) => ({ type: SEND_MESSAGE, newMessageText, userId, id })

// ThunkCreators///////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////



export default dialogReduser