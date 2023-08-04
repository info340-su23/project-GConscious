import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
function PillboxCardContents(props) {
  const sampleData = props.sampleData;
  console.log(sampleData.pillName);

  return (
    <div className="card my-2" style={{ width: '18rem' }}>
      <img src={require('../days/monday.png')} alt="React Image" />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{sampleData.pillName}</Accordion.Header>
          <Accordion.Body>
            <p>{"Dose: " + sampleData.dose + " per day day."}</p>
            <p>{"Quantity: " + sampleData.quantity}</p>
            <p>{"Next Refill: " + sampleData.refills + " weeks left. "}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}



export function PillboxContent(props) {
  // const [img, altText] = useState(props);

  const sampleData = props.sampleData;
  console.log(sampleData);
  return (
    //------------------------------------------------------------Eric's Work
    // <div className="image-box">
    //   <div className = "Monday">
    //     <div>
    //       <img src={img} alt={altText} />
    //     </div>
    //     <div>
    //       <p>Advil</p>
    //     </div>
    //     <p class="d-inline-flex gap-1">
    //       <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    //         Details
    //       </button>
    //     </p>
    //     <div className="collapse" id="collapseExample">
    //       <div className="card card-body">
    //         <p className='text-primary'>Description: for headaches</p>
    //         <p>Dosage: 2 times a day every 6 hours </p>
    //         <p>Number of Pills Left: 50</p>
    //         <p>Weeks until next refill: 4 weeks</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //------------------------------------------------------------Ends here
    <div className="row my-4">
      <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start">
        <div className="card my-2" style={{ width: '18rem' }}>
          <PillboxCardContents sampleData={sampleData} />
        </div>
      </div>

    </div>
  );
}
