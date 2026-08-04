import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationSchema from './validationSchema';
import getVinData from './getData';

export const InputForm = () => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={values => {
          getVinData(JSON.stringify(values.vinCode));
          console.log(getVinData(JSON.stringify(values.vinCode)));
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
