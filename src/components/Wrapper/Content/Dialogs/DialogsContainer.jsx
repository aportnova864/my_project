import { connect } from 'react-redux'
import Dialogs from './Dialogs'
let mapStateToProps = (state) => {
  return {
    DialogsData: state.DialogsPage.DialogsData,
    MessagesData: state.DialogsPage.MessagesData
  }
}
const DialogsContainer = connect(mapStateToProps)(Dialogs)
export default DialogsContainer