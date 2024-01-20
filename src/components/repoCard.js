
import './RepoCard.css'; // Create a new CSS module for the component

const RepoCard = ({ repoName, description, languagesUsed }) => {
  return (
    <div className="repoCard">
      <h3 className="repoName">{repoName}</h3>
      <p className="description">{description.length > 30 ? `${description.slice(0, 30)}...` : description}</p>
      <div>
        {
          languagesUsed.map((item) => {
            return (
              <>
                <div className="languages">
                  {item}
                </div>
              </>
            )
          })
        }
      </div>
    </div >
  );
};

export default RepoCard;
