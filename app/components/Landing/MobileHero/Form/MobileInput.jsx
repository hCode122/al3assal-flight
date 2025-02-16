'use client'

import SupportButton from "../../Hero/Form/SupportButton"
import TripType from "../../Hero/Form/TripType"
import MainBar from "../../Hero/Form/MainBar"
import { useState } from "react"
const MobileInput = () => {
    const [inputData, setData] = useState({
        tripType: 'single',
        from: "",
        to: "",
        refundable: '',
        editable: '',
        depart: '',
        passenger: ''
    });

    const [forms, setForms] = useState([{ id: 1 }]); 

    const addBar = () => {
        setForms([...forms, { id: Date.now() }]); 
    };

    const removeBar = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };
    return (
        <div className="flex flex-col px-10 gap-8 bg-white pt-8">
                <TripType inputData={inputData} setData={setData} />
                <div className="flex flex-col gap-2">

            {
                forms.map((form) => (
                    <MainBar key={form.id} inputData={inputData} id={form.id} onRemove={removeBar} 
                    notMain={form.id != 1}  />

                ))
            }
                </div>
            <SupportButton />
        </div>
    )
}

export default MobileInput