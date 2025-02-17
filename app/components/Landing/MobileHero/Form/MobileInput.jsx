'use client'

import SupportButton from "../../Hero/Form/SupportButton"
import TripType from "../../Hero/Form/TripType"
import MainBar from "../../Hero/Form/MainBar"
import RadioButton from "../../Hero/Form/RadioButton"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import { useState, useRef } from "react"
import AddCityButton from "../../Hero/Form/PassengerBox/AddCityButton";
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

    const splideRef = useRef(null);

    const [forms, setForms] = useState([{ id: 1 }]); 

    const addBar = () => {
        setForms([...forms, { id: Date.now() }]); 
    };

    const removeBar = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };
    return (
                <div className="flex flex-col px-10 gap-8 bg-white pt-8 pb-2">
                        <TripType inputData={inputData} setData={setData} />
                        <div className="flex flex-col gap-2">


                        <Splide
                ref={splideRef}
                options={{
                    arrows: false,
                perPage:1, 
                gap: '10px', 
                pagination: true, 
              
                }}
            >
            {
                forms.map((form) => (
                    <SplideSlide className="flex justify-center items-center">

                    <MainBar key={form.id} inputData={inputData} id={form.id} onRemove={removeBar} 
                    notMain={form.id != 1}  />
                    </SplideSlide>
                ))
            }

            </Splide>
            {inputData.tripType === "multi" ? <AddCityButton onClick={addBar} /> : null}
            <RadioButton onClick={() => {setData({...inputData, ['refundable'] : 1})}} value={1} text="Refundable" selectedVal={inputData.refundable} />

                </div>
            <SupportButton />
        </div>
    )
}

export default MobileInput