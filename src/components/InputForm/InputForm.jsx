import { Formik, Field, Form } from 'formik';

export const InputForm = () => {
  return (
    <>
      <Formik initialValues={{ vinCode: '' }}>
        <Form>
          <Field name="vinCode" placeholder="Enter VIN code" />
          <button type="submit">Check VIN</button>
        </Form>
      </Formik>
    </>
  );
};
