import React from 'react';
import { Button, Card as BootstrapCard, Badge } from 'react-bootstrap';

const CustomCard = ({ imageSrc, title, description, buttonText, date, time, location }) => {
  return (
    <BootstrapCard className="m-4">
      <BootstrapCard.Img variant="top" src={imageSrc} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title className="text-2xl font-bold">{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <Badge bg="primary">{date}</Badge>
            <Badge bg="info">{time}</Badge>
          </div>
          <p className="mt-2 text-gray-600">{location}</p>
        </div>
        <Button
          variant="primary"
          className="mt-4"
          onClick={() => {
            alert(`${buttonText} clicked`);
          }}
        >
          {buttonText}
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

const Events = () => {
  return (
    <div className="relative text-center align-center">
      <div className="bg-opacity-75 bg-primary absolute inset-0 z-[-1]"></div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Event Gallery</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Explore our upcoming community events and join us for meaningful experiences.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <CustomCard
            imageSrc="https://images.unsplash.com/photo-1599595344070-c456bea6ee98?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
            title="Open Source Contribution Day"
            description="Join our Open Source Contribution Day and collaborate on exciting projects. Contribute to the community and enhance your programming skills!"
            buttonText="Join Now"
            date="January 15, 2023"
            time="3:00 PM"
            location="Virtual Event"
          />
          <CustomCard
            imageSrc="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Blockchain Workshop"
            description="Learn the fundamentals of blockchain technology and its applications. Join our workshop to gain hands-on experience and insights into the decentralized world."
            buttonText="Register Now"
            date="February 10, 2023"
            time="2:30 PM"
            location="Tech Hub, City Center"
          />
          <CustomCard
            imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="AI Innovation Summit"
            description="Join us at the AI Innovation Summit to explore the latest trends in artificial intelligence. Engage with experts, attend workshops, and discover groundbreaking AI applications."
            buttonText="Get Tickets"
            date="March 5, 2023"
            time="4:00 PM"
            location="Convention Center"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
