import { addMessageActionCreator, updateMessageTextActionCreator } from '../../../../../redux/dialogs-reducer';
import DialogPage from './DialogPage';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
        newMessageBody: state.DialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        sendMessage: (dialogId) => {
            dispatch(addMessageActionCreator(dialogId))
        }
    }
}
const DialogPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogPage);
export default DialogPageContainer
