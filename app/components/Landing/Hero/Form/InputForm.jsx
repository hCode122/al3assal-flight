'use client'
const { useState } = require("react")
import TripType from "./TripType"
import SupportButton from "./SupportButton"
import LocationBox from "./LocationBox/LocationBox"
import DateBox from "./LocationBox/DateBox"
import PassengerBox from "./PassengerBox/PassengerBox"
import SearchButton from "./LocationBox/SearchButton"
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

    const removeBar = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };


    return (
        <div className="flex flex-col  bg-[#FFFFFFB5] blur-[4] w-full px-4 gap-4 mt-auto h-auto py-8 ">
            <div className="flex justify-between">
                <TripType inputData={inputData} setData={setData} />
                <SupportButton />
            </div>
            <div className="flex flex-col gap-2">

            {
                forms.map((form) => (
                    <MainBar key={form.id} inputData={inputData} id={form.id} onRemove={removeBar} 
                    notMain={form.id != 1} setFormData={setData}  />

                ))
            }
                </div>

            {inputData.tripType === "multi" ? <AddCityButton onClick={addBar} /> : null}

            <div className="flex gap-4">
                <RadioButton onClick={() => {setData({...inputData, ['refundable'] : 1})}} value={1} text="Refundable" selectedVal={inputData.refundable} />
                <RadioButton text="editable" selectedVal={'1'} />
            </div>
        </div>
    );
};


export default InputForm