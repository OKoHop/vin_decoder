import axios from 'axios';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api';

const getVinData = async vinCode => {
  try {
    console.log(vinCode);
    const response = await axios.get(
      `/vehicles/decodevin/${vinCode}?format=json`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getVinData;
