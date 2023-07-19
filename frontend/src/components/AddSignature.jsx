import React, { useEffect, useState } from 'react';
import { Button, Container, Input } from 'reactstrap';

const AddSignature = ({ signature, setSignature, token, user }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedSignature, setUpdatedSignature] = useState(signature.signature);

  const handleUpdateSignature = () => {
    const updatedData = { ...signature, signature: updatedSignature };
    setSignature(updatedData);
    const fetchInformation = {
      method: updatedData.signature ? 'put' : 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: updatedData.id, signature: updatedData.signature, member: user })
    };
    
    fetch(`/api/signature/${user.mid}`, fetchInformation)
      .then(response => {
        if (!response.ok) {
          throw new Error('網路回應不正確 error code: ' + response.status);
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
        setSignature({ id: response.id, signature: response.signature });
      })
      .catch(error => {
        console.log('錯誤：', error);
        // 適當地處理錯誤，例如向使用者顯示錯誤訊息。
      });
    setIsEditing(false);
  };
  


  useEffect(() => {

  }, [signature, token])

  return (
    <Container className='d-flex justify-content-center'>
      {signature.signature !== "" ? (
        <Container className='d-flex justify-content-center row'>
          {isEditing ? (
            <Input
              type='text'
              value={updatedSignature}
              onChange={(e) => setUpdatedSignature(e.target.value)}
            />
          ) : (
            <div className='d-flex justify-content-center' >{signature.signature}</div>
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
