import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationSchema from './validationSchema';
import getVinData from './getData';

export const InputForm = ({ setMessage, addVinCode }) => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async ({ vinCode }, actions) => {
          addVinCode(vinCode);
          const data = await getVinData(vinCode);
          setMessage(data.Message);
          actions.resetForm();
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
