import React, { useState } from 'react';
import { Button, Container, Input } from 'reactstrap';

const AddSignature = ({ signature, setSignature }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedSignature, setUpdatedSignature] = useState(signature);

  const handleUpdateSignature = () => {
    setSignature(updatedSignature);
    setIsEditing(false);
  };

  return (
    <Container className='d-flex justify-content-center'>
      {signature !== '' ? (
        <Container className='d-flex justify-content-center row'>
          {isEditing ? (
            <Input
              type='text'
              value={updatedSignature}
              onChange={(e) => setUpdatedSignature(e.target.value)}
            />
          ) : (
            <div>{signature}</div>
          )}
          <Button
            className='mt-3'
            color='primary'
            type='submit'
            onClick={() => {
              if (isEditing) {
                handleUpdateSignature();
              } else {
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? 'Save' : 'Modify'}
          </Button>
        </Container>
      ) : (
        <div>
          {isEditing ? (
            <div>
              <Input
                type='text'
                value={updatedSignature}
                onChange={(e) => setUpdatedSignature(e.target.value)}
              />
              <Button
                className='mt-3'
                color='primary'
                type='submit'
                onClick={handleUpdateSignature}
              >
                Save
              </Button>
            </div>
          ) : (
            <Button
              className='mt-3'
              color='primary'
              type='submit'
              onClick={() => setIsEditing(true)}
            >
              Add Signature
            </Button>
          )}
        </div>
      )}
    </Container>
  );
};

export default AddSignature;
