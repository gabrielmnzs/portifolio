import React, { useState, useEffect } from "react";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import HorizontalTimeline from "react-horizontal-timeline";

const Timeline = ({ dates, getSelectedIndex }) => {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const style = { outline: "#FFFFFF", foreground: "#41c9a2" };

  useEffect(() => {
    getSelectedIndex(value);
  }, [value, getSelectedIndex]);

  return (
    <HorizontalTimeline
      styles={{ outline: style.outline, foreground: style.foreground }}
      index={value}
      indexClick={(index) => {
        setValue(index);
        setPrevious(value);
      }}
      values={dates}
      getLabel={(date) => format(new Date(date), "MM/yyyy", { locale: ptBR })}
    />
  );
};

export default Timeline;
