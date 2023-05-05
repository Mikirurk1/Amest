
import Dialogs from './Dialogs';
import { sendMessage } from "../../redux/reduser/dialogReduser";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withUrlParams } from '../../hoc/withUrlParams';



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        isAuth: state.auth.isAuth,
        userId: state.auth.data.userId
    }
}

export default compose(connect(mapStateToProps, { sendMessage }),
    withUrlParams,
    withAuthRedirect
)(Dialogs)

