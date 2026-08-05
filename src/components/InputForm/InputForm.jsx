import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationSchema from './validationSchema';
import getVinData from './getData';

export const InputForm = ({ setMessage }) => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async ({ vinCode }) => {
          const data = await getVinData(vinCode);
          setMessage(data.Message);
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
