import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return(
    <React.Fragment>
      <Header />
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;