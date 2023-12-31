import React from 'react';

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="bg-[#12e0b738] p-6 rounded-md shadow-md m-4">
      <div className="relative">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover object-center" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="mt-4">
          <button
            className="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="relative">
      <div className="bg-opacity-75 bg-[#80eaff] absolute inset-0 z-[-1]"></div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Community Events</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our upcoming community events and join us for meaningful experiences.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

        <Card
          imageSrc="https://images.unsplash.com/photo-1599595344070-c456bea6ee98?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
          title="Open Source Contribution Day"
          description="Join our Open Source Contribution Day and collaborate on exciting projects. Contribute to the community and enhance your programming skills!"
        buttonText="Join Now"
        />

        <Card
          imageSrc="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Blockchain Workshop"
          description="Learn the fundamentals of blockchain technology and its applications. Join our workshop to gain hands-on experience and insights into the decentralized world."
          buttonText="Register Now"
        />

        <Card
          imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="AI Innovation Summit"
          description="Join us at the AI Innovation Summit to explore the latest trends in artificial intelligence. Engage with experts, attend workshops, and discover groundbreaking AI applications."
          buttonText="Get Tickets"
        />
        </div>
      </div>
    </div>
  );
};

export default Events;
