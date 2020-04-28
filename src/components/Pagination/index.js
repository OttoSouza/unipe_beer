import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },

}));

export default function TablePagination({ beerPerPage, total, changePage, currentPage }) {
    const classes = useStyles();

    const numbers = [];

    for (let i = 1; i <= Math.ceil(total / beerPerPage); i++) {
        numbers.push(i);
    }

    return (
        <div className={classes.root}>
            <Pagination count={numbers.length} page={currentPage} onChange={changePage} color='secondary' />
        </div>
    );
}