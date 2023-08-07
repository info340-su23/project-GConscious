import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function PillItems(props) {
  const day = props.day;
  const weeklyPills = props.weeklyPills;

  return (
    weeklyPills[day].map(pillObj => (
      <Accordion key={pillObj.pillName} defaultActiveKey="1">
        <Accordion.Item listid={pillObj.pillName} key={pillObj.pillName} eventKey="0">
          <Accordion.Header>{pillObj.pillName}</Accordion.Header>
          <Accordion.Body>
            <p>{"Dose: " + pillObj.dose + " per day."}</p>
            <p>{"Quantity: " + pillObj.quantity}</p>
            <p>{"Next Refill: " + pillObj.refills + " weeks left. "}</p>
            <p>{"Description: " + pillObj.description}</p>
            <p>{"Symptoms: " + pillObj.symptoms}</p>
            <button name={pillObj.pillName} value={day} onClick={props.handleRemove}>remove</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ))
  );
}

function PillboxContent(props) {
  const weeklyPills = props.weeklyPills;
  const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return (
    <div className="row my-4">
      {
        daysOfTheWeek.map(day => {
          if (weeklyPills[day].length === 0) {
            return (
              <div key={day} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
                <div className="card my-2" style={{ width: '18rem' }}>
                  <img src={require('../days/' + day + '.png')} alt="React Image" />
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>No Pills For Today!</Accordion.Header>
                      <Accordion.Body>
                        <p>No Pills For Today!</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            );
          } else {
            return (
              <div key={day} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
                <div className="card my-2" style={{ width: '18rem' }}>
                  <img src={require('../days/' + day + '.png')} alt="React Image" />
                  <Accordion defaultActiveKey="1">
                    <PillItems handleRemove={props.handleRemove} day={day} weeklyPills={weeklyPills} />
                  </Accordion>
                </div>
              </div>
            );
          }
        })
      }
    </div>
  );
}


export function PillboxRow(props) {
  const weeklyPills = props.weeklyPills
  return (
    <PillboxContent handleRemove={props.handleRemove} weeklyPills={weeklyPills} />
  )

}
