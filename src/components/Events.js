import React from 'react';
import { Button } from 'react-bootstrap';

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="card bg-[#12e0b738] p-6 rounded-md shadow-md m-4">
      <div className="relative">
        <img src={imageSrc} alt={title} className="card-img-top h-full w-full object-cover object-center" />
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold text-gray-700">{title}</h2>
        <p className="card-text text-gray-700 mt-2">{description}</p>
        <div className="mt-4">
          <Button
            className="btn btn-primary rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4]"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Community Events</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover our upcoming community events and join us for meaningful experiences.
              </p>
            </div>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <Card
                  imageSrc="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Community Picnic"
                  description="Join us on Twitch this Sunday at 10PM, for a session on 'Getting Started with Open Source in the Web3 Domain' delivered by the CTO of DigiQuip."
                  buttonText="Register"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;
