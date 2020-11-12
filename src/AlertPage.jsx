import React from 'react'
import { MDBContainer, MDBAlert } from 'mdbreact';

function AlertPage() {
    return (
        <MDBContainer>
          <MDBAlert color="danger">
            Unable to <strong>connect to server</strong> you may be seeing old records!
          </MDBAlert>
        </MDBContainer>
      );
}

export default AlertPage
