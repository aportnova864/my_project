import { useParams } from "react-router-dom"
import FriendPageContainer from "./FriendPageContainer";

const FriendWrapper = () => {
    const {id} = useParams();
    return <FriendPageContainer id={id} />
}
export default FriendWrapper