import React, { useRef } from 'react';

export default function Form(props) {

    const submitdata = (e) => {
        e.preventDefault();
        props.setarray([...props.array, {
            FName: FName.current.value,
            MName: MName.current.value,
            LName: LName.current.value,
            email: email.current.value,
            building: building.current.value,
            area: area.current.value,
            city: city.current.value,
            state: state.current.value,
            male: male.current.checked,
            female: female.current.checked,
            m10: m10.current.value,
            g10: g10.current.value,
            p10: p10.current.value,
            m12: m12.current.value,
            g12: g12.current.value,
            p12: p12.current.value,
            md: md.current.value,
            gd: gd.current.value,
            pd: pd.current.value,
        }]);
        props.setsubmited(true)

        FName.current.value = '';
        LName.current.value = '';
        MName.current.value = '';
        email.current.value = '';
        building.current.value = '';
        area.current.value = '';
        city.current.value = '';
        state.current.value = '';
        m10.current.value = '';
        g10.current.value = '';
        g12.current.value = '';
        m12.current.value = '';
        p10.current.value = '';
        p12.current.value = '';
        md.current.value = '';
        gd.current.value = '';
        pd.current.value = '';
    }


    const FName = useRef(props.uData && props.uData?.FName)
    const MName = useRef()
    const LName = useRef()
    const email = useRef()
    const building = useRef()
    const area = useRef()
    const city = useRef()
    const state = useRef()
    const male = useRef()
    const female = useRef()
    const m10 = useRef()
    const g10 = useRef()
    const p10 = useRef()
    const m12 = useRef()
    const g12 = useRef()
    const p12 = useRef()
    const md = useRef()
    const gd = useRef()
    const pd = useRef()

    if (props.uData) {
        FName.current.value = props.uData?.FName
        MName.current.value = props.uData?.MName
        LName.current.value = props.uData?.LName
        building.current.value = props.uData?.building
        email.current.value = props.uData?.email
        area.current.value = props.uData?.area
        city.current.value = props.uData?.city
        state.current.value = props.uData?.state
        male.current.value = props.uData?.male
        female.current.value = props.uData?.female
        m10.current.value = props.uData?.m10
        g10.current.value = props.uData?.g10
        p10.current.value = props.uData?.p10
        m12.current.value = props.uData?.m12
        g12.current.value = props.uData?.g12
        p12.current.value = props.uData?.p12
        md.current.value = props.uData?.md
        gd.current.value = props.uData?.gd
        pd.current.value = props.uData?.pd
    }
    return (
        <div>
            <form onSubmit={submitdata}>

                <div class="row mb-4">
                    <div class="col">

                        <input ref={FName} type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">First name</label>

                    </div>
                    <div class="col">

                        <input ref={MName} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">Middle name</label>

                    </div>
                    <div class="col">

                        <input ref={LName} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">Last name</label>

                    </div>
                </div>

                <div class=" mb-4">
                    <input ref={email} type="email" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>
                <div class="row mb-4">
                    <div class="col">

                        <input ref={building} type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">building</label>

                    </div>
                    <div class="col">

                        <input ref={area} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">Area</label>

                    </div>
                    <div class="col">

                        <input ref={city} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">City</label>

                    </div>
                    <div class="col">

                        <input ref={state} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">State</label>

                    </div>
                </div>
                <div>gender :
                    <div class="form-check form-check-inline">
                        <input ref={male} class="form-check-input ref={}" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input ref={female} class="form-check-input ref={}" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">

                        <input ref={m10} type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">10th marks</label>

                    </div>
                    <div class="col">

                        <input ref={g10} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">10th grade</label>

                    </div>
                    <div class="col">

                        <input ref={p10} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">passing year of 10th</label>

                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">

                        <input ref={m12} type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">12th marks</label>

                    </div>
                    <div class="col">

                        <input ref={g12} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">12th grade</label>

                    </div>
                    <div class="col">

                        <input ref={p12} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">12th passing year</label>

                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">

                        <input ref={md} type="text" id="form6Example1" class="form-control" />
                        <label class="form-label" for="form6Example1">degree marks</label>

                    </div>
                    <div class="col">

                        <input ref={gd} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">degree grade</label>

                    </div>
                    <div class="col">

                        <input ref={pd} type="text" id="form6Example2" class="form-control" />
                        <label class="form-label" for="form6Example2">degree passing year</label>

                    </div>
                </div>

                <button type="submit" class="btn btn-dark btn-block mb-4">Submit</button>

            </form>
        </div>
    )
}
