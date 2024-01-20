import "./profile.css"
import { useData } from "../Hooks/apiHooks";
import { useNavigate } from "react-router-dom"
import ProfileView from "../components/profileView";
import PaginationBar from "../components/pagenationBar";
import { useEffect } from "react";


const Profile = () => {

    const { profileData,perPage,user } = useData();

    const navigate = useNavigate()
    useEffect(()=>{
        if(user==="") navigate("/")
    })


    return (
        <>
            <div className="profile-wrapper">
                <ProfileView {...profileData} />
                <div className="bottom-nav">
                    <PaginationBar repoCount={profileData?.public_repos?profileData?.public_repos:1} perPage ={perPage?perPage:1}/>
                </div>
            </div>
        </>
    )



}

export default Profile;