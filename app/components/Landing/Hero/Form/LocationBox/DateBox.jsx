import Image from "next/image"

const calender = "/icons/Landing/Hero/calender.svg";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs from "dayjs";
const DateBox = ({ isDisabled }) => {
  const [isDateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleClick = () => {
    if (!isDisabled) {
      setDateOpen(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        onClick={handleClick}
        className={`flex gap-4 bg-[#F7F7FA] lg:flex-3 lg:flex-none px-4 w-full lg:w-auto  pl-4 py-2 h-[5rem] lg:h-[4rem] relative cursor-pointer items-center rounded-[7.5px] ${
          isDisabled ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        <Image src={calender} alt="date button" width={25} height={25} />
        <div className="flex flex-col rounded-[8px] cursor-pointer">
          <p className="text-[#7A7A7A] text-[0.9rem] xl:text-[1.1rem]">From</p>
          <p className="text-[#BFBFBF] text-[0.7rem] xl:text-[0.8rem] font-[400]">
            {selectedDate.format('MMM DD, YYYY')}
          </p>
        </div>
      </div>
      {!isDisabled && (
        <MobileDatePicker
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          open={isDateOpen}
          slots={{ toolbar: () => null }}
          onClose={() => setDateOpen(false)}
          sx={{ display: 'none' }}
          slotProps={{
            
          }}
        />
      )}
    </LocalizationProvider>
  );
};

export default DateBox;