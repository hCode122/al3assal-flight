import RadioButton from "./RadioButton";

const TripType = ({ setData, inputData }) => {
    const setTripType = (value) => {
        setData(prev => ({
            ...prev,
            tripType: value,
            multiTrips: value === "multi" ? [] : prev.multiTrips 
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
            <RadioButton onClick={setTripType} value="single" text="One Way" tripType={inputData.tripType} />
            <RadioButton onClick={setTripType} value="round" text="Round Trip" tripType={inputData.tripType} />
            <RadioButton onClick={setTripType} value="multi" text="Multi City" tripType={inputData.tripType} />
        </div>
    );
};

export default TripType;
