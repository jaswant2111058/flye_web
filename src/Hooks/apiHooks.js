import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();

export const useData = () => {
    return useContext(DateContext);
};

export const DataProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [PerPage, setPerPage] = useState(10);
    const [profileData, setProfileData] = useState({})
    const [user, setUser] = useState("")
    const baseURL = "https://api.github.com/users"
    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${baseURL}/${user}`);
                if (response) {
                    setProfileData(response?.data);
                }
            } catch (error) {
                console.error('Error searching:', error);
            }
        };
        getData();

    }, [user]);


    useEffect(() => {
        const reposDate = async () => {
            try {
                const response = await axios.get(`${baseURL}/${user}/repos?page=${currentPage}&per_page=${PerPage}`);
                if (response) {
                    setResults(response?.data);
                }
            } catch (error) {
                console.error('Error searching:', error);
            }
        };
        reposDate();

    }, [user]);





    return (
        <DateContext.Provider value={{
            results,
            profileData,
            isLoading,
            user,
            setUser,
            PerPage,
            setPerPage,
            currentPage,
            setCurrentPage
        }}>
            {children}
        </DateContext.Provider>
    );
};