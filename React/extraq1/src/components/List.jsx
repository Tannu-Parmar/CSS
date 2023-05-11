import React, { useEffect, useState } from 'react'

export default function Table(props) {

    const raw = props.array
    const rawlen = raw.length ? (
        props.array.map((e, i) => {
            return (
                <tr>
                    <td style={{ border: "1px solid black" }}>{e.FName} {e.MName} {e.LName}</td>
                    <td style={{ border: "1px solid black" }}>{e.email}</td>
                    <td style={{ border: "1px solid black" }}>{e.building} {e.area} {e.city} {e.state}</td>
                    <td style={{ border: "1px solid black" }}> {e.male && 'Male'}{e.female && 'Female'}</td>
                    <td style={{ border: "1px solid black" }}>{e.m10} {e.g10} {e.p10}</td>
                    <td style={{ border: "1px solid black" }}>{e.m12} {e.g12} {e.p12}</td>
                    <td style={{ border: "1px solid black" }}>{e.md} {e.gd} {e.pd}</td>
                    <td style={{ border: "1px solid black" }}><button id={i} onClick={props.deletedata}>Delete data</button></td>
                    <td style={{ border: "1px solid black" }}><button id={i} onClick={props.update}>Update data</button></td>
                </tr>
            )
        })
    ) : (<tr><td>No Data found</td></tr>)
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black" }}>Name</th>
                    <th style={{ border: "1px solid black" }}>Email Adress</th>
                    <th style={{ border: "1px solid black" }}>Address</th>
                    <th style={{ border: "1px solid black" }}>Gender</th>
                    <th style={{ border: "1px solid black" }}>10th</th>
                    <th style={{ border: "1px solid black" }}>12th</th>
                    <th style={{ border: "1px solid black" }}>Degree</th>
                </tr>
            </thead>
            <tbody>
                {rawlen}
            </tbody>
        </table>
    )
}
