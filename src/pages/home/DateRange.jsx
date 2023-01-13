import React, { useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect } from "react";
import "./DateRange.css";
import { addDays } from "date-fns";

const DateRangeComponent = () => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="calendar-wrap">
      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        onClick={() => {
          setOpen((open) => !open);
        }}
      />
      {open && (
        <DateRange
          className="calendar-element"
          onChange={(item) => {
            setRange([item.selection]);
          }}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
        />
      )}
    </div>
  );
};

export default DateRangeComponent;
