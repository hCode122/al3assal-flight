'use client'
const { useState, useEffect } = require("react")
import TripType from "./TripType"
import SupportButton from "./SupportButton"

import RadioButton from "./RadioButton"
import Image from "next/image"
import AddCityButton from "./PassengerBox/AddCityButton"
import MainBar from "./MainBar"
const InputForm = () => {
    const [inputData, setData] = useState({
        tripType: 'single',
        from: "",
        to: "",
        refundable: 0,
        editable: 0,
        depart: '',
        passenger: ''
    });

    const [forms, setForms] = useState([{ id: 1 }]); 

    const addBar = () => {
        setForms([...forms, { id: Date.now() }]); 
    };

    useEffect(() => {
        if (inputData != "multi") {

            setForms([{ id: 1 }])
        }
    }, [inputData])

    const removeBar = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };


    return (
        <div className="flex flex-col  bg-[#FFFFFFB5] blur-[4] w-full px-4 gap-4 mt-auto h-auto py-8 z-[4]">
            <div className="flex justify-between">
                <TripType inputData={inputData} setData={setData} />
                <SupportButton />
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-[5.5rem] inputForm">

            {
                forms.map((form) => (
                    <MainBar key={form.id} inputData={inputData} id={form.id} onRemove={removeBar} 
                    notMain={form.id != 1} setFormData={setData}  />

                ))
            }
                </div>

            {inputData.tripType === "multi" ? <AddCityButton onClick={addBar} /> : null}

            <div className="flex gap-4">
                <RadioButton onClick={() => {setData({...inputData, ['refundable'] : !inputData.refundable})}} value={1} text="Refundable" selectedVal={inputData.refundable} />
                <RadioButton onClick={() => {setData({...inputData, ['editable'] : !inputData.editable})}} value={1} text="Editable" selectedVal={inputData.editable} />
            </div>
        </div>
    );
};


export default InputForm