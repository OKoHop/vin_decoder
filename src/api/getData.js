import axios from 'axios';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api';

export const getVinData = async vinCode => {
  try {
    const response = await axios.get(
      `/vehicles/decodevin/${vinCode}?format=json`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getVariablesData = async () => {
  try {
    const response = await axios.get(
      '/vehicles/getvehiclevariablelist?format=json'
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getVariableData = async variabelid => {
  try {
    const response = await axios.get(
      `/vehicles/GetVehicleVariableValuesList/${variabelid}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
