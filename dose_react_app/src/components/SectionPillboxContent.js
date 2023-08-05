import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function PillboxCardContents(props) {
  const { pillName, dose, quantity, refills, description, symptoms } = props.dayData;
  /*const sampleData = props.sampleData;
  console.log(sampleData.pillName);*/

  return (
    <div className="card my-2" style={{ width: '18rem' }}>
      <img src={require('../days/' + props.dayName + '.png')} alt="React Image" />
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{pillName}</Accordion.Header>
          <Accordion.Body>
            <p>{"Dose: " + dose + " per day."}</p>
            <p>{"Quantity: " + quantity}</p>
            <p>{"Next Refill: " + refills + " weeks left. "}</p>
            <p>{"Description: " + description}</p>
            <p>{"Symptoms: " + symptoms}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}



export function PillboxContent(props) {
  const sampleData = props.sampleData;
  // const { days } = props.sampleData;
  // days.map((dayName, index) => (
  //   <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
  //     <PillboxCardContents dayData={props.sampleData} dayName={dayName} />
  //   </div>
  // ))
  return (
    <div className="row my-4">
      {
        sampleData.map((pillObj) => {
          console.log(pillObj);
          const { days } = pillObj;
          return (
            days.map((dayName, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
                <PillboxCardContents dayData={pillObj} dayName={dayName} />
              </div>
            ))
          )
        })
      }
    </div>
  );
}
