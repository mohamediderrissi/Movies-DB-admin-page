import React, { useState, useEffect} from 'react';
import TableComponent from '../../components/TableComponent';
import LoadingComponent from '../../components/LoadingComponent';

import { getMovies } from '../../service';

const TableContainer = () => {
    const [data, setData] = useState(undefined);

    useEffect( () => {
        async function fetchData(){
            const movies = await getMovies();
            setData(movies);
        };
        fetchData();
    }, []);

    const renderTableContainer = () => {
        if(data) return (<TableComponent data={data} />);
        return <LoadingComponent />
        };

    return (
        <>
            {renderTableContainer()}
        </>
    );
};

export default TableContainer;