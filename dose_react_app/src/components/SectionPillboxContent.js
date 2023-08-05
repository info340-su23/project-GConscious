import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function PillItems(props) {
  const day = props.day;
  const weeklyPills = props.weeklyPills;
  return (



    weeklyPills[day].map(pillObj => {
      if (weeklyPills[day].length === 0) {
        return <p>No pills for this day</p>
      } else {
        return (
          <Accordion.Item key={pillObj.pillName} eventKey="0">
            <Accordion.Header>{pillObj.pillName}</Accordion.Header>
            <Accordion.Body>
              <p>{"Dose: " + pillObj.dose + " per day."}</p>
              <p>{"Quantity: " + pillObj.quantity}</p>
              <p>{"Next Refill: " + pillObj.refills + " weeks left. "}</p>
              <p>{"Description: " + pillObj.description}</p>
              <p>{"Symptoms: " + pillObj.symptoms}</p>
            </Accordion.Body>
          </Accordion.Item>
        )
      }
    })
  )
}


function PillboxContent(props) {
  const weeklyPills = props.weeklyPills;
  const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  return (
    daysOfTheWeek.map(day => {

      return (

        <div key={day} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
          <div className="card my-2" style={{ width: '18rem' }}>
            <img src={require('../days/' + day + '.png')} alt="React Image" />
            <Accordion defaultActiveKey="1">
              <PillItems day={day} weeklyPills={weeklyPills} />
            </Accordion>
          </div>
        </div>
      )
    })
  )



}

export function PillboxRow(props) {
  const weeklyPills = props.weeklyPills
  return (
    <div className="row my-4">
      <PillboxContent weeklyPills={weeklyPills} />
    </div>
  )

}





    // daysOfTheWeek.map(day => {
    //   <div class="row my-4">
    //     <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
    //       <div className="card my-2" style={{ width: '18rem' }}>
    //         <img src={require('../days/' + day + '.png')} alt="React Image" />
    //         <Accordion defaultActiveKey="0">
    //           <Accordion.Item eventKey="0">
    //             <Accordion.Header>Accordion Item #1</Accordion.Header>
    //             <Accordion.Body>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //               aliquip ex ea commodo consequat. Duis aute irure dolor in
    //               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //               culpa qui officia deserunt mollit anim id est laborum.
    //             </Accordion.Body>
    //           </Accordion.Item>
    //           <Accordion.Item eventKey="1">
    //             <Accordion.Header>Accordion Item #2</Accordion.Header>
    //             <Accordion.Body>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //               aliquip ex ea commodo consequat. Duis aute irure dolor in
    //               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //               culpa qui officia deserunt mollit anim id est laborum.
    //             </Accordion.Body>
    //           </Accordion.Item>
    //         </Accordion>
/* <Accordion defaultActiveKey="1">
    </Accordion> */
    //     </div>
    //   </div>
    // </div>
    // })

