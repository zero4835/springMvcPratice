import react, { useState, useEffect } from 'react';
import { Model, Button } from 'react-bootstrap';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';


const AddSignature = ({ signature, setSignature }) => {
  return (
    <>
      <Container className='d-flex justify-content-center' >
        {
          signature !== "" ?
            (<Container className='d-flex justify-content-center row' >{signature}
              <Button className='mt-3' color="primary" type="submit">modify</Button>
            </Container>) :
            (
              <Button className='d-flex justify-content-center row mt-3' color="primary" type="submit">modify</Button>
            )
        }

      </Container>
    </>
  )
}

export default AddSignature;
