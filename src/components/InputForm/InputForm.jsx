import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationSchema from './validationSchema';
import getVinData from './getData';

export const InputForm = () => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={({ vinCode }) => {
          getVinData(JSON.stringify(vinCode));
          console.log(getVinData(JSON.stringify(vinCode)));
        }}
      >
        <Form>
          <Field id="vinCode" name="vinCode" placeholder="Enter VIN code" />
          <ErrorMessage name="vinCode" />
          <button type="submit">Check VIN</button>
        </Form>
      </Formik>
    </>
  );
};
