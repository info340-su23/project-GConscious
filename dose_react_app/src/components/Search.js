import React from 'react';

export function Search() {
  return (
    <div className='my-5'>
      <input type="text" className="search-input mb-3" placeholder="Type here to search for medications.." />
      <ul className="searchable-drugs-ul list-unstyled">
        <li><a href="#">Coumadin</a></li>
        <li><a href="#">Ibuprofen</a></li>
        <li><a href="#">Levonogestrel</a></li>
        <li><a href="#">Atorvastatin</a></li>
        <li><a href="#">Metoprolol</a></li>
        <li><a href="#">Sertraline</a></li>
      </ul>
    </div>
  );
}