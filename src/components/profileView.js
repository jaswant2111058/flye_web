import './ProfileView.css';

import RepoCard from './repoCard';
import { useData } from '../Hooks/apiHooks';

const ProfileView = ({ name, bio, github, profileImage, location, twitter }) => {

    const { PerPage, setPerPage } = useData();

    const repoData = [
        {
            repoName: 'example-repo-1',
            description: 'This is an example repository.',
            languagesUsed: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            repoName: 'example-repo-2',
            description: 'Another example repository with a longer description to showcase styling.',
            languagesUsed: ['Python', 'Django'],
        },
        {
            repoName: 'example-repo-1',
            description: 'This is an example repository.',
            languagesUsed: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            repoName: 'example-repo-2',
            description: 'Another example repository with a longer description to showcase styling.',
            languagesUsed: ['Python', 'Django'],
        },
        {
            repoName: 'example-repo-1',
            description: 'This is an example repository.',
            languagesUsed: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            repoName: 'example-repo-2',
            description: 'Another example repository with a longer description to showcase styling.',
            languagesUsed: ['Python', 'Django'],
        },
        {
            repoName: 'example-repo-1',
            description: 'This is an example repository.',
            languagesUsed: ['JavaScript', 'HTML', 'CSS'],
        },
        {
            repoName: 'example-repo-2',
            description: 'Another example repository with a longer description to showcase styling.',
            languagesUsed: ['Python', 'Django'],
        },
        {
            repoName: 'example-repo-2',
            description: 'Another example repository with a longer description to showcase styling.',
            languagesUsed: ['Python', 'Django'],
        },
        // Add more repository data as needed
    ];
    return (
        <div>
            <div className="profile-view">
                <div className="profile-details-wrapper">
                    <div className='profile-details'>
                        <div className="profile-image">
                            <img src={profileImage} alt={`${name}'s Profile`} />
                        </div>
                        <div className="profile-data">
                            <h2>{name}</h2>
                            <p className="bio">{bio}</p>
                            <p className={location}>{location}</p>
                            <div className={"socialLinks"}>

                            </div>
                        </div>
                    </div>
                    <div className='repoPerPage'>
                        <h3>Repos Per Page </h3>
                        <button className="subtract" onClick={() => { setPerPage(PerPage - 1) }}>-</button>
                        <input type="number" className="perPage" name="primium" value={PerPage} onChange={(e) => { setPerPage(e.target.value) }} />
                        <button className="add" onClick={() => { setPerPage(PerPage + 1) }}>+</button>
                    </div>
                </div>
                <div className='repo-data'>
                    {repoData.map((repo, index) => (
                        <RepoCard key={index} {...repo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
