import React, { useState, useEffect } from 'react';
import data from './listitems';
import "./homepage.css"
function List(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [listVisible, setListVisible] = useState(true);

  useEffect(() => {
    // Filter the data based on user input
    const newData = data.filter((el) => {
      // If no input is provided, return true to include all items
      if (props.input === '') {
        return true;
      }
      // Otherwise, filter based on the input text
      else {
        return el.text && el.text.toLowerCase().includes(props.input.toLowerCase());
      }
    });

    // Update the filtered data state
    setFilteredData(newData);
  }, [props.input]);

  const handleLinkClick = () => {
    setListVisible(false); // Hide the ListGroup when a link is clicked
  };

  return (
    <>
      {listVisible && (
        <div className="list-group">
          {filteredData.map((item) => (
            <a href={item.link} key={item.id} className="list-group-item list-group-item-action" onClick={handleLinkClick}>
              {/* Render Link dynamically */}
              {item.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default List;