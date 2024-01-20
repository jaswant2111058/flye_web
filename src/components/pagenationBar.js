import { useState } from 'react';
import './PaginationBar.css';
import { useData } from '../Hooks/apiHooks';



const PaginationBar = ({ repoCount, perPage }) => {
    const { currentPage, setCurrentPage } = useData();
    const [paginationNum, setPaginationNum] = useState(0);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
       
            setCurrentPage(currentPage + 1);
    };



    const handlePageClick = (page) => {
        setCurrentPage(page);
    };



    return (
        <div className="pagination-bar">
            <button className='navBTN' onClick={handlePrevious} disabled={currentPage === 1}>
                Prev
            </button>
            <div className='NUM_BTN'>
                <button onClick={()=>{setPaginationNum(paginationNum-1)}} disabled={paginationNum === 0} >{"<<"}</button>
                {[...Array(repoCount % perPage === 0 ? Math.floor(repoCount / perPage) : Math.floor(repoCount / perPage) + 1)]?.map((_, index) => {

                    if (index >= paginationNum * 10 && index < 10 * (paginationNum +1) ) {
                        return (
                            <button key={index} onClick={() => handlePageClick(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                {index + 1}
                            </button>
                        )
                    }

                })}
                <button onClick={()=>{setPaginationNum(paginationNum+1)}}  disabled={paginationNum   === ((repoCount % perPage)%10 === 0 ? Math.floor((repoCount / perPage)/10) : Math.floor((repoCount / perPage)/10) + 1)}>{">>"}</button>
            </div>
            <button className='navBTN' onClick={handleNext} disabled={currentPage === (repoCount % perPage === 0 ? Math.floor(repoCount / perPage) : Math.floor(repoCount / perPage) + 1)}>
                Next
            </button>
        </div>
    );
};

export default PaginationBar;
