import axios from "axios";
import React, { useEffect, useState } from "react";
import { IFacts } from "../../interfaces/facts";
import FactsService from "../../services/fetchFacts";
import { useLocation } from "react-router-dom";
import "./style.css";

const Facts = () => {
  const location = useLocation();

  const [facts, setFatcs] = useState<IFacts[]>();
  const [isLoading, setIstLoading] = useState<boolean>(true);

  const deleteFact = (id: any) => {
    setFatcs(facts?.filter((el) => el._id !== id));
    console.log(id)
  };

  useEffect(() => {
    try {
      setIstLoading(true);
      FactsService.fetchPosts(setFatcs);
    } catch (error) {
    } finally {
      setIstLoading(false);
    }
  }, [location]);

  return (
    <>
      {isLoading
        ? "Loading..."
        : facts?.map((fact) => (
            <div className="facts" key={fact._id}>
              <div className="facts__info">
                <div className="facts__type">{fact.type}</div>
                <div className="facts__text">{fact.text}</div>
              </div>
              <button onClick={() => deleteFact(fact._id)}>Delete</button>
            </div>
          ))}
    </>
  );
};

export default Facts;
