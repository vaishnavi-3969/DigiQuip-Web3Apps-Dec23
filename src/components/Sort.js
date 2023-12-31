import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Sort = () => {
  return (
    <div className="sort bg-gradient-to-r from-[#12e0b7] via-[#a6c0fe] to-[#fbcfe8] p-6 rounded-md shadow-md">
      <Dropdown className="sort__select">
        <Dropdown.Toggle variant="light" id="categoryDropdown">
          Select Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#music">Music</Dropdown.Item>
          <Dropdown.Item href="#tech">Sports</Dropdown.Item>
          <Dropdown.Item href="#sports">Tech</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="sort__select mt-4">
        <Dropdown.Toggle variant="light" id="datesDropdown">
          Select Your Dates
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">01/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">02/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">03/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">04/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">05/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">06/01/2024</Dropdown.Item>
          <Dropdown.Item href="/">07/01/2024</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="sort__select mt-4">
        <Dropdown.Toggle variant="light" id="distanceDropdown">
          Select Your Distance
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Upto 5 kms</Dropdown.Item>
          <Dropdown.Item href="/">Upto 30 kms</Dropdown.Item>
          <Dropdown.Item href="/">Upto 50 kms</Dropdown.Item>
          <Dropdown.Item href="/">Greater than 50 kms</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sort;
