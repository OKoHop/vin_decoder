import { useState } from 'react';
import { InputForm } from '../../components/InputForm/InputForm';
import { Message } from '../../components/Message/Message';
import { ListOfLastResults } from '../../components/ListOfLastResults/ListOfLastResults';
import { getVinData } from '../../components/InputForm/getData';
import { ListOfChatacters } from '../../components/ListOfCharecters/ListOfChatacters';
import { StyledH2 } from './Home.styled';

export const Home = () => {
  const [message, setMessage] = useState('');
  const [lastResult, setLastResult] = useState([]);
  const [result, setResult] = useState([]);

  const addVinCode = newVinCode => {
    setLastResult(prevstate => [newVinCode, ...prevstate]);
  };

  const updateResult = async vinCode => {
    const data = await getVinData(vinCode);
    console.log(data);
    setLastResult(prevstate => [vinCode, ...prevstate]);
  };

  const returnThreeItems = lastResult.slice(0, 3);

  return (
    <main>
      <div className="container">
        <StyledH2>Check your VIN Code</StyledH2>
        <InputForm
          setMessage={setMessage}
          addVinCode={addVinCode}
          setResult={setResult}
        />
        <Message message={message} lastResult={lastResult} />
        <h3>List of last queries</h3>
        <ListOfLastResults
          lastResult={returnThreeItems}
          updateResult={updateResult}
        />
        <h3>List of charecters by VIN</h3>
        <ListOfChatacters transList={result} />
      </div>
    </main>
  );
};
