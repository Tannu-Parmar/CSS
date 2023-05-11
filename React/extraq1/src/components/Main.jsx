import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

export default function Main() {
    const [uData, setUData] = useState()


    const [submited, setsubmited] = useState(true)
    const [array, setarray] = useState([])
    function deletedata(e) {
        const id = e.target.id;
        let t = array.filter((e, i) => {
            return i != id
        })
        console.log(t)
        setarray(t);

    }
    function update(e) {
        const id = e.target.id;
        let t = array.filter((ee, i) => {
            return i == id
        })
        setUData(t);
        console.log(t);
        deletedata(e);
    }




    return (
        <div>

            <div>
                <Form array={array} setarray={setarray} setsubmited={setsubmited} uData={uData && uData[0]}> </Form>
            </div>
            <div>
                <List array={array} deletedata={deletedata} update={update} ></List>
            </div>
        </div>
    )
}
