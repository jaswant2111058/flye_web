import "./home.css"
import { useData } from "../Hooks/apiHooks";
import { useNavigate } from "react-router-dom"


const Profile = () => {

    const { results,
        isLoading,
        user,
        setUser, } = useData();


    const navigate = useNavigate();

    return (
        <>
            <div className="containerWrapper">

            </div>
        </>
    )



}

export default Profile;