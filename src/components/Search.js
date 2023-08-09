import React from 'react';
import { useNavigate } from 'react-router-dom';


function SearchRow({drugsList}) {
  //data
  const drug_name = drugsList.drug_name;
  const side_effects = drugsList.side_effects;
  const drug_link = drugsList.drug_link;

  const navigate = useNavigate();
  const handleButtonClicked = () => {
    navigate('/upload?drug=' + encodeURIComponent(drug_name));
  };

  //appearance
  return(
    <li className='my-2'>
        <a href={drug_link}>{drug_name}</a>
        <button onClick={handleButtonClicked}>Add to my Pillbox</button>
        <ul>
            <li>Side Effects: {side_effects}</li>
        </ul>
    </li>
  )
}

export function Search({drugsList}) {
  //data mapping
  console.log(drugsList);
  const drugArray = drugsList.map((searchRowObject) => {
    const id = searchRowObject.drug_name
    const searchRowElement = (
        <SearchRow key={id} drugsList={searchRowObject} />
    )
    return searchRowElement;
})

  //appearence
  return (
    <div className='my-5'>
      <input type="text" className="search-input mb-3" placeholder="Type here to search for medications.." />
      <ul className="searchable-drugs-ul">
        {drugArray}
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