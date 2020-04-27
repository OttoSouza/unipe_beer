import React, { useState, useEffect } from 'react';
import MainContainer from "../../components/MainContainer";
import Header from "../../components/Header";
import TableBeers from "../../components/TableBeers";
import Footer from "../../components/Footer";
// import { Container } from './styles';
import api from '../../services/api'
export default function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchBeers = async () => {
            await api.get('/beers').then(response => {
                setBeers(response.data);
            }).catch(err => {
                alert('alguma coisa de errada nao esta certa')
            })
        }
        fetchBeers()
    }, [])
    return (
        <MainContainer>
            <Header />
            <TableBeers  beers={beers}/>
            <Footer  />
        </MainContainer>
    );
}
