import React, { useState } from "react";
import Select from "react-select";

const specialitiesOptions = [
  { value: 'yoga', label: 'Yoga' },
  { value: 'strength-training', label: 'Strength Training' },
  { value: 'cardio', label: 'Cardio' },
  { value: 'pilates', label: 'Pilates' },
  // add more options as needed
];

function SurveyComponent({ setformdata }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    const selectedValues = selected.map((option) => option.value);
    setformdata((prevFormdata) => ({ ...prevFormdata, specialties: selectedValues }));
    
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "rgba(0, 0, 0, 0.1)" : null,
      color: "black"
    }),
  };

  return (
    <Select
      options={specialitiesOptions}
      isMulti={true}
      value={selectedOptions}
      onChange={handleSelectChange}
      styles={customStyles}
    />
  );
}

export default SurveyComponent;
