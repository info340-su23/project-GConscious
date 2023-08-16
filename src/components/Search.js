import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchRow({ drugsList }) {
  //data
  const drug_name = drugsList.drug_name;
  const side_effects = drugsList.side_effects;
  const drug_link = drugsList.drug_link;

  const navigate = useNavigate();
  const handleButtonClicked = () => {
    navigate("/upload?drug=" + encodeURIComponent(drug_name) + '&side_effects='+encodeURIComponent(side_effects));
  };

  //appearance
  return (
    <li className="my-2">
      <a href={drug_link}>{drug_name}</a>
      <button onClick={handleButtonClicked}>Add to my Pillbox</button>
      <ul>
        <li>Side Effects: {side_effects}</li>
      </ul>
    </li>
  );
}

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading,setLoading] = useState(true);
  const [text,setText] = useState('loading...');
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      fetchSearchResults(searchTerm)
        .then((data) => {
          setSearchResults(data);
          setLoading(false)
        })
        .catch((error) => {
          setText('error')
          setLoading(false)
          console.error("Error fetching search results:", error);
        });
    }, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setLoading(true)
    setSearchTerm(event.target.value);
  };

  const fetchSearchResults = (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let response = process.env.PUBLIC_URL + "/data/merged-cleaned-drugs.json";
        fetch(response)
          .then((result) => result.json())
          .then((data) => {
            const filteredData = data.filter((item) =>
              item.drug_name.includes(query)
            );
            resolve(query === '' ? [] : filteredData);
          })
          .catch((error) => {
            console.error("Error fetching search results:", error);
            resolve([]); 
          });
      }, 1000);
    });
  };

  //data mapping
  const drugArray = searchResults.map((searchRowObject) => {
    const id = searchRowObject.drug_name
    const searchRowElement = (
      <SearchRow key={id} drugsList={searchRowObject} />
    );
    return searchRowElement;
  });

  //example links
  const defaultLinks = (
    <div>
      <p>Example prescriptions</p>
      <ul>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a696005.html" target="_blank">Metformin</a>
        </li>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a692030.html" target="_blank">Simvastatin</a>
        </li>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a605045.html" target="_blank">Pregabalin</a>
        </li>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a692051.html" target="_blank">Lisinopril</a>
        </li>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a682864.html" target="_blank">Metoprolol</a>
        </li>
        <li className="my-3">
          <a href="https://medlineplus.gov/druginfo/meds/a695033.html" target="_blank">Metoprolol</a>
        </li>
      </ul>
    </div>
  );

  const content = loading ? (
    <li>{text}</li>
  ) : (
    searchResults.length > 0 ? drugArray : defaultLinks
  );

  //Search result
  const searchResult = (
    <div className="my-5">
      <input
        type="text"
        className="form-control search-input mb-3"
        placeholder="Type here to search for medications.."
        onChange={handleInputChange}
        value={searchTerm}
      />
      <ul className="searchable-drugs-ul">
        {content}
      </ul>
    </div>
  );

  return (
    <div>
      {searchResult}
      <small>Search Dataset via <a href="https://www.kaggle.com/datasets/jithinanievarghese/drugs-side-effects-and-medical-condition" target="_blank">Link</a>.</small>
    </div>
  )
}
