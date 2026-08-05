import { useState } from 'react';
import { InputForm } from '../../components/InputForm/InputForm';
import { Message } from '../../components/Message/Message';
import { ListOfLastResults } from '../../components/ListOfLastResults/ListOfLastResults';
import getVinData from '../../components/InputForm/getData';

export const Home = () => {
  const [message, setMessage] = useState('');
  const [lastResult, setLastResult] = useState([]);

  const addVinCode = newVinCode => {
    setLastResult(prevstate => [newVinCode, ...prevstate]);
  };

  const updateResult = vinCode => {
    getVinData(vinCode);
    setLastResult(prevstate => [vinCode, ...prevstate]);
  };

  const returnThreeItems = lastResult.slice(0, 3);

  return (
    <>
      <h2>Enter VIN Code</h2>
      <InputForm setMessage={setMessage} addVinCode={addVinCode} />
      <Message message={message} lastResult={lastResult} />
      <ListOfLastResults
        lastResult={returnThreeItems}
        updateResult={updateResult}
      />
    </>
  );
};
