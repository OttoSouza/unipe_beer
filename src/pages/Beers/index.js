import React, { useState, useEffect } from 'react';
import MainContainer from "../../components/MainContainer";
import Header from "../../components/Header";
import TableBeers from "../../components/TableBeers";
import Footer from "../../components/Footer";

import { get } from '../../services/api'

import TablePagination from '../../components/Pagination';
export default function Beers() {
    const [beers, setBeers] = useState([]);
    const [currentPage, setCurrentPag] = useState(1);
    const [beerPerPage] = useState(5);

    const indexLastBeer = currentPage * beerPerPage;
    const indexFistBeer = indexLastBeer - beerPerPage;
    const currentBeers = beers.slice(indexFistBeer, indexLastBeer);

    useEffect(() => {
        const fetchBeers = async () => {
            await get.then(response => {
                setBeers(response.data);
            }).catch(err => {
                alert('alguma coisa de errada nao esta certa')
            })
        }
        fetchBeers()
    }, [])

    const handleChangePage = (event, number) => {
        setCurrentPag(number);
    };


    return (
        <MainContainer>
            <Header />
            <TableBeers beers={currentBeers} />
            <TablePagination beerPerPage={beerPerPage} total={beers.length} changePage={handleChangePage} />
            <Footer />
        </MainContainer>
    );
}
