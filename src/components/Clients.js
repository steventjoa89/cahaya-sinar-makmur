import React from "react";
import { CLIENTS } from "../data/info";

function Clients() {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          {CLIENTS.map((client, i) => (
            <div
              key={i}
              className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            >
              <img src={client.image} className="img-fluid" alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
