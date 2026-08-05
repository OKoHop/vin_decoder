import { useState } from 'react';
import { InputForm } from '../../components/InputForm/InputForm';
import { Message } from '../../components/Message/Message';

export const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <>
      <h2>Enter VIN Code</h2>
      <InputForm setMessage={setMessage} />
      <Message message={message} />
    </>
  );
};
