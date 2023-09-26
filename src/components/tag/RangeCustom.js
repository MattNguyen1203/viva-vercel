'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return value;
}

export default function RangeCustom() {
  const [value, setValue] = React.useState([20, 37]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Slider
        sx={{
          '& .MuiSlider-thumb': {
              color: "white",
              border: '2px solid #138140',
          },
          '& .MuiSlider-track': {
              color: "#138140"
          },
          '& .MuiSlider-rail': {
              color: "#138140"
          },
          '& .MuiSlider-active': {
              color: "green"
          },
          height: '0.4375vw'
      }}
        getAriaLabel={() => 'Days range'}
        min={0}
        max={50}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}