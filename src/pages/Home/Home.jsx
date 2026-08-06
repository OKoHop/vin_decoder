import { useState } from 'react';
import { InputForm } from '../../components/InputForm/InputForm';
import { Message } from '../../components/Message/Message';
import { ListOfLastResults } from '../../components/ListOfLastResults/ListOfLastResults';
import { ListOfChatacters } from '../../components/ListOfCharecters/ListOfChatacters';
import { StyledH2, StyledH3 } from './Home.styled';

export const Home = () => {
  const [message, setMessage] = useState('');
  const [lastResult, setLastResult] = useState([]);
  const [result, setResult] = useState([]);

  const updateResult = vinCode => {
    setLastResult(prevstate => [vinCode, ...prevstate].slice(0, 3));
  };

  const returnThreeItems = lastResult.slice(0, 3);

  const addItem = vinCode => {
    setLastResult(prev => {
      const filtered = prev.filter(item => item !== vinCode);

      return [vinCode, ...filtered];
    });
  };

  return (
    <main>
      <div className="container">
        <StyledH2>Check your VIN Code</StyledH2>
        <InputForm
          setMessage={setMessage}
          addVinCode={addItem}
          setResult={setResult}
        />
        <Message message={message} lastResult={lastResult} />

        {lastResult.length > 0 && <StyledH3>List of last queries</StyledH3>}
        <ListOfLastResults
          lastResult={returnThreeItems}
          updateResult={updateResult}
        />
        {result.length > 0 && <StyledH3>List of charecters by VIN</StyledH3>}
        <ListOfChatacters transList={result} />
      </div>
    </main>
  );
};
