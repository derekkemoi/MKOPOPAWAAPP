import * as React from 'react';

import Table from '@mui/joy/Table';
import { Avatar, Card, Typography } from '@mui/joy';
import url from '../mpesa.png'


export default function TablePay(props) {
    return (
        <Card>
            <Table borderAxis="both" aria-label="table variants" variant="soft" >
                <caption>
                    <Typography component="h2" level="h4">
                        How To Make Verification Payment :
                    </Typography>
                </caption>
                <tbody>
                    <tr key="1">
                        <td>Go to M-PESA :</td>
                        <td><Avatar variant={"rounded"} alt="The image" src={url} style={{
                            width: 70,
                            height: 48,
                        }} /></td>
                    </tr>
                    <tr key="2">
                        <td>Select :</td>
                        <td>
                            <Typography level="title-md">
                                Lipa na M-PESA
                            </Typography>
                        </td>
                    </tr>
                    <tr key="2">
                        <td>Select :</td>
                        <td>
                            <Typography level="title-md">
                                Buy Goods and Services
                            </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter Till Number :</td>
                        <td>
                            <Typography level="title-md">
                                5204479
                            </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter Amount :</td>
                        <td><Typography level="title-md">
                            Ksh. {props.fee}
                        </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter your PIN :</td>
                        <td><Typography level="title-md">
                            Enter you PIN and confirm payment
                        </Typography></td>
                    </tr>

                </tbody>
            </Table>
        </Card>
    );
}
