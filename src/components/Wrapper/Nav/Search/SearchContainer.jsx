import { connect } from "react-redux"
import Search from "./Search"

let mapStateToProps = (state) => {
    return {
        FriendsPage: state.FriendsPage
    }
}
const SearchContainer = connect(mapStateToProps)(Search)
export default SearchContainer