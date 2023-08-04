import React, { useState } from 'react';

export function PillboxContent(props) {
    const [img, altText] = useState(props);
    return (
      <div className="image-box">
        <div className = "Monday">
          <div>
            <img src={img} alt={altText} />
          </div>
          <div>
            <p>Advil</p>
          </div>
          <p class="d-inline-flex gap-1">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Details
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <p className='text-primary'>Description: for headaches</p>
              <p>Dosage: 2 times a day every 6 hours </p>
              <p>Number of Pills Left: 50</p>
              <p>Weeks until next refill: 4 weeks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
