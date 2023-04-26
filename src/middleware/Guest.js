import { useNavigate } from "react-router";
const Guest = ({ isLoggedIn, children }) => {
    const navigate = useNavigate();
    if (isLoggedIn) {
        navigate('/')
        return <></>
    }
    else{
        return children;
    }
};
export default Guest;