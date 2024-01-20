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
    const [perPage, setPerPage] = useState(10);
    const [profileData, setProfileData] = useState({});
    const [user, setUser] = useState("");
    const baseURL = "https://api.github.com/users";
    let cancelTokenSource;

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
        if (user) getData();

    }, [user]);



    useEffect(() => {
        const reposData = async () => {
            startLoading();
            try {
                if (cancelTokenSource) {
                    cancelTokenSource.cancel("Request canceled due to page change");
                }
                cancelTokenSource = axios.CancelToken.source();
                const response = await axios.get(
                    `${baseURL}/${user}/repos?page=${currentPage}&per_page=${perPage}`,
                    {
                        cancelToken: cancelTokenSource.token,
                    }
                );
                if (response) {
                    setResults(response?.data);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Previous request canceled:", error.message);
                } else {
                    console.error('Error searching:', error);
                }
            } finally {
                stopLoading();
            }
        };

        if (user) reposData();

        return () => {
            if (cancelTokenSource) {
                cancelTokenSource.cancel("Component unmounted");
            }
        };
    }, [user, currentPage, perPage]);

    return (
        <DateContext.Provider
            value={{
                results,
                profileData,
                isLoading,
                user,
                setUser,
                perPage,
                setPerPage,
                currentPage,
                setCurrentPage,
            }}
        >
            {children}
        </DateContext.Provider>
    );
};
