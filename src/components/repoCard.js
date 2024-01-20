
import { useEffect, useState } from 'react';
import './RepoCard.css';
import axios from 'axios';

const RepoCard = ({ name, description, languages_url }) => {

  const [languages, setLanguage] = useState({})

  useEffect(() => {

    async function getLanguage() {
      const res = await axios.get(languages_url)
      setLanguage(res?.data)
    }
    getLanguage();

  })



  return (
    <div className="repoCard">
      <h3 className="repoName">{name?.length > 20 ? `${name?.slice(0, 20)}...` : name?name:"No Name"}</h3>
      <p className="description">{description?.length > 30 ? `${description?.slice(0, 30)}...` : description?description:"No Description"}</p>
      <div className='languages_wrapper'>
        {
          Object.keys(languages).map((item,index) => {
            return (
              <>
                <div className="languages" key={index}>
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
