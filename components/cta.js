// components/CTA.js
import React from 'react';
import '../styles/globals.css';
export default function CTA() {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">Create Something Awesome</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="circle-icon">
            <i className="bi bi-pencil-fill"></i>
          </div>
          <h4>Create</h4>
        </div>
        <div className="col-md-4">
          <div className="circle-icon">
            <i className="bi bi-gear-fill"></i>
          </div>
          <h4>Awesome</h4>
        </div>
        <div className="col-md-4">
          <div className="circle-icon">
            <i className="bi bi-star-fill"></i>
          </div>
          <h4>Something</h4>
        </div>
      </div>
    </div>
  );
};
