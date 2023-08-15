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
            resolve(filteredData);
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

  //appearence
  return (
    <div className="my-5">
      <input
        type="text"
        className="form-control search-input mb-3"
        placeholder="Type here to search for medications.."
        onChange={handleInputChange}
        value={searchTerm}
      />
      <ul className="searchable-drugs-ul">
        {!loading ? drugArray : text}
        {/* 
        UNCOMMENT FOR SAMPLE DATA
        <li>
            <a href="#">Coumadin</a>
            <ul>
                <li>Description: An anticoagulant (blood thinner) that reduces the formation of blood clots.</li>
                <li>Symptoms: Severe bleeding, headache, and stomach pain.</li>
            </ul>
        </li>
        <li className='my-2'>
            <a href="#">Ibuprofen</a>
            <ul>
                <li>Description: A nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain.</li>
                <li>Symptoms: HeadAches, feeling dizzy, or indigestion.</li>
            </ul>
        </li>
        
        <li className='my-2'>
            <a href="#">Levonorgestrel</a>
            <ul>
                <li>Description: an emergency contraceptive that is used to prevent pregnancy after unprotected sex or after the failure of another birth control method.</li>
                <li>Symptoms: Feel sick, headaches, tummy pain, diarrhea, feel dizzy or tired.</li>
            </ul>
        </li>
        <li className='my-2'>
            <a href="#">Atorvastatin</a>
            <ul>
                <li>Description: used to lower cholesterol and triglyceride (fats) levels in the blood.</li>
                <li>Symptoms: headache, sorethroat, or nosebleeds.</li>
            </ul>
        </li>
        <li className='my-2'>
            <a href="#">Metoprolol</a>
            <ul>
                <li>Description: a medication that lowers your blood pressure and heart rate.</li>
                <li>Symptoms: Cold hands, headache, and stomach pain.</li>
            </ul>
        </li>
        <li className='my-2'>
            <a href="#">Sertraline</a>
            <ul>
                <li>Description: manage and treat major depressive disorder, or obsessive-compulsive disorder</li>
                <li>Symptoms: trouble staying focus, memory problems, cannot think clearly, have weakness, or lose your balance</li>
            </ul>
        </li> */}
      </ul>
    </div>
  );
}
