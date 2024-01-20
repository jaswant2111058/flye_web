import './ProfileView.css';

import RepoCard from './repoCard';
import { useData } from '../Hooks/apiHooks';

const ProfileView = ({ name, bio, html_url, avatar_url, location }) => {

    const { perPage,setPerPage,results } = useData();
    

    return (
        <div>
            <div className="profile-view">
                <div className="profile-details-wrapper">
                    <div className='profile-details'>
                        <div className="profile-image">
                            <img src={avatar_url} alt={`${name}'s Profile`} />
                        </div>
                        <div className="profile-data">
                            <h2>{name}</h2>
                            <p className="bio">{bio ? bio : "No Bio"}</p>
                            <p className="location">{location ? location : "No location"}</p>
                            <div className={"socialLinks"}>
                                GitHub : {html_url}
                            </div>
                        </div>
                    </div>
                    <div className='repoPerPage'>
                        <h3>Repos Per Page </h3>
                        <button className="subtract" onClick={() => { setPerPage(perPage - 1) }}>-</button>
                        <input type="number" className="perPage" name="primium" value={perPage} onChange={(e) => { setPerPage(e.target.value) }} />
                        <button className="add" onClick={() => { setPerPage(perPage + 1) }}>+</button>
                    </div>
                </div>
                <div className='repo-data'>
                    {results.map((repo, index) => (
                        <RepoCard key={index} {...repo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
