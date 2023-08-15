import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function PillItems(props) {
  const day = props.day;
  const organizedPillbox = props.organizedPillbox;

  const handleRemove = (event) => {
    const pillName = event.target.name;
    const day = event.target.value;

    //filter pills with that day. 
    const newPillbox = organizedPillbox[day].filter(pillObj => {
      return pillObj.pillName !== pillName;
    })

    // create new list of pills for specific day
    const dayPills = {};
    dayPills[day] = newPillbox;

    //create new weekly prescription and set state
    const newWeekPrescriptions = { ...organizedPillbox, ...dayPills }
    props.handleSetOrganizedPillbox(newWeekPrescriptions);
  };

  let organized = organizedPillbox[day].map(pillObj => (
    <Accordion key={pillObj.pillName} defaultActiveKey="1">
      <Accordion.Item listid={pillObj.pillName} key={pillObj.pillName} eventKey="0">
        <Accordion.Header>{pillObj.pillName}</Accordion.Header>
        <Accordion.Body>
          <p>{"Dose: " + pillObj.dose + " per day."}</p>
          <p>{"Quantity: " + pillObj.quantity}</p>
          <p>{"Next Refill: " + pillObj.refills + " weeks left. "}</p>
          <p>{"Description: " + pillObj.description}</p>
          <p>{"Symptoms: " + pillObj.symptoms}</p>
          <button name={pillObj.pillName} value={day} onClick={handleRemove}>remove</button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ))
  return (
    <div>
      {organized}
    </div>
  )
}

function AccordionItemsNoPills(props) {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>No Pills For Today!</Accordion.Header>
      <Accordion.Body>
        <p>No Pills For Today!</p>
      </Accordion.Body>
    </Accordion.Item>

  )
}

function PillboxContent(props) {
  const organizedPillbox = props.organizedPillbox;
  const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const organized =
    daysOfTheWeek.map(day => {
      return (
        <div key={day} className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
          <div className="card my-2" style={{ width: '18rem' }}>
            <img src={'/img/days/' + day + '.png'} alt={day + "'s Pills"} />
            <Accordion defaultActiveKey="1">
              {organizedPillbox[day].length === 0 ? (
                <AccordionItemsNoPills />
              ) : (
                <PillItems handleSetOrganizedPillbox={props.handleSetOrganizedPillbox} day={day} organizedPillbox={organizedPillbox} />
              )}
            </Accordion>
          </div>
        </div>
      )
    })

  return (
    <div className="row my-4">
      {
        organized
      }
    </div>
  );
}


export function PillboxRow(props) {
  const organizedPillbox = props.organizedPillbox
  return (
    <PillboxContent handleSetOrganizedPillbox={props.handleSetOrganizedPillbox} organizedPillbox={organizedPillbox} />
  )

}
