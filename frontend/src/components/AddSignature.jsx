import React, { useEffect, useState } from 'react';
import { Button, Container, Input } from 'reactstrap';

const AddSignature = ({ signature, setSignature }) => {
  const [ismodify, setIsModify] = useState(false);

  const handleUpdateSignature = () => {
    setIsModify(false);
  };

  useEffect(() => {

  }, [signature, ismodify, setIsModify])

  return (
    <Container className='d-flex justify-content-center'>
      {signature !== "" ? (
        <Container className='d-flex justify-content-center row'>
          {ismodify ? (
            <Input
              type='text'
              Value={signature}
              onChange={(e) => {
                setSignature(e.target.value);
                if (signature === "")
                  setIsModify(true)
              }}
            />
          ) : (
            signature
          )}
          <Button
            className='mt-3'
            color='primary'
            type='submit'
            onClick={(e) => {
              if (ismodify) {
                handleUpdateSignature(e);
              } else {
                setIsModify(true);
              }
            }}
          >
            {ismodify ? 'Save' : 'Modify'}
          </Button>
        </Container>
      ) : (
        <Button
          className='mt-3'
          color='primary'
          type='submit'
          onClick={() => {
            setIsModify(!ismodify);
          }}
        >
          Add Signature
        </Button>
      )}
    </Container>
  );
};

export default AddSignature;
