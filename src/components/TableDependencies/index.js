import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, install) {
    return { name, install };
}

const rows = [
    createData('axios', 'yarn add axios'),
    createData('react-router-dom', 'yarn add react-router-dom'),
    createData('material core', 'yarn add @material-ui/core'),
    createData('material icons', 'yarn add @material-ui/icons'),
    createData('material lab - Pagination', 'yarn add @material-ui/lab'),
    createData('react-icons', 'yarn add react-icons'),
];

export default function TableDependicies() {

    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Dependencies Name</TableCell>
                        <TableCell align="right">Installation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow hover key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.install}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}