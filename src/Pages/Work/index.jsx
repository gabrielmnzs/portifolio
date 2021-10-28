import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import Timeline from "../../components/Timeline";

import { api } from "./../../services/api";
import profile from "./../../assets/img/profile.png";
import "./styles.scss";

function Work() {
  const [works, setWorks] = useState([]);
  const [dates, setDates] = useState();
  const [selectedDateIndex, setSelectedDateIndex] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("works").then((response) => {
      setDates(response.data.map((work) => work.start));
      setWorks(response.data);
    });
  }, []);

  const handleSelectedDateIndex = (value) => {
    setSelectedDateIndex(value);
  };

  const compareDateIndex = (index) => {
    return selectedDateIndex === index;
  };

  const handlePeriodFormetted = (startDate, endDate, present) => {
    const start = format(new Date(startDate), "MM/yyyy");
    const end = format(new Date(endDate), "MM/yyyy");

    return start + " - " + (present ? "o momento" : end);
  };

  return (
    <section className="work">
      <div className="work__container">
        <h1 className="work__title">Experiência</h1>
        <div className="work__content">
          <div className="work__timeline">
            {dates && (
              <Timeline
                dates={dates}
                getSelectedIndex={handleSelectedDateIndex}
              />
            ) }
          </div>
          <div className="work__company-container">
            <ol className="work__list">
              {works.map((item, index) => (
                <li
                  className={`work__list-item ${
                    compareDateIndex(index) && "active"
                  }`}
                  key={item.name}
                >
                  <figure className="work__list-item__logo">
                    <img src={profile} alt={item.name} />
                  </figure>
                  <h2 className="work__list-item__name">{item.name}</h2>
                  <small className="work__list-item__role">{item.role}</small>
                  <p className="work__list-item__period">
                    {handlePeriodFormetted(item.start, item.end, item.present)}
                  </p>
                  <p className="work__list-item__description">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
