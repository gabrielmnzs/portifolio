import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import HorizontalTimeline from "react-horizontal-timeline";

import { api } from "./../../services/api";
import profile from "./../../assets/img/profile.png";
import "./styles.scss";

function Work() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [period, setPeriod] = useState([]);
  const [works, setWorks] = useState([]);
  const [dates, setDates] = useState(0);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("works");

      setDates(response.data.map((work) => work.start));
      setWorks(response.data);
    }
    fetchApi();
  }, []);

  return (
    <section className="work">
      <div className="work__container">
        <h1 className="work__title">Experiência</h1>
        <div className="work__content">
          <div className="work__timeline">
            <HorizontalTimeline
              styles={{ outline: "#FFFFFF", foreground: "#41c9a2" }}
              index={value}
              indexClick={(index) => {
                setValue(index);
                setPrevious(value);
              }}
              values={dates}
              getLabel={(date) =>
                format(new Date(date), "MM/yyyy", { locale: ptBR })
              }
            />
          </div>
          <div className="work__company-container">
            <ol className="work__list">
              {works.map((item, index) => (
                <li
                  className={`work__list-item ${value === index && "active"}`}
                  key={item.name}
                >
                  <figure className="work__list-item__logo">
                    <img src={profile} alt={item.name} />
                  </figure>
                  <h2 className="work__list-item__name">{item.name}</h2>
                  <small className="work__list-item__role">{item.role}</small>
                  <p className="work__list-item__period">
                    {format(new Date(item.start), "MM/yyyy") +
                      " - " +
                      (item.present
                        ? "o momento"
                        : format(new Date(item.end), "MM/yyyy"))}
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
