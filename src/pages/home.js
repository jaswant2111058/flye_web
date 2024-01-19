import "./home.css"
import { useData } from "../Hooks/apiHooks";
import { useNavigate } from "react-router-dom"


const Home = () => {

    const { setUser, user } = useData();
    const navigate = useNavigate();
    function extractUsernameFromGitHubLink(link) {
        const githubRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/?([^\/]+)?/i;
        const match = link.match(githubRegex);
        return match ? match[1] : null;
    }
    return (
        <>
            <div className="containerWrapper">
                <div className="container">
                    <h1 className="heading">GitHub Profile</h1>
                    <input className="input_repo" type="text" placeholder="Enter GitHub Repo" required
                        onChange={(e) => {
                            setUser(extractUsernameFromGitHubLink(e.target.value))
                        }}
                    />
                    <div>
                        <button onClick={() => {
                            console.log(user)
                            if (user) navigate("/profile")
                            else window.alert("Enter Valid Repo");
                        }}
                            className="show_profile">Show Profile</button>
                    </div>
                </div>
            </div>
        </>
    )



}

export default Home;