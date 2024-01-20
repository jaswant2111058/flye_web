import "./profile.css"
import { useData } from "../Hooks/apiHooks";
import { useNavigate } from "react-router-dom"
import ProfileView from "../components/profileView";
import PaginationBar from "../components/pagenationBar";


const Profile = () => {

    const { results,
        isLoading,
        user,
        setUser, } = useData();


    const navigate = useNavigate();
    const userData = {
        name: 'John Doe',
        bio: 'Web Developer',
        github: 'https://github.com/johndoe',
        profileImage: 'https://avatars.githubusercontent.com/u/114646646?v=4',
        location: 'City, Country',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
    };

    return (
        <>
            <div className="profile-wrapper">
                <ProfileView {...userData} />
                <div className="bottom-nav">
                    <PaginationBar repoCount={10} PerPage ={5}/>
                </div>
            </div>
        </>
    )



}

export default Profile;