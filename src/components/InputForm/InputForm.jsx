import { Formik, Field, Form } from 'formik';
import ValidationSchema from './validationSchema';

export const InputForm = () => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={values => {
          console.log(JSON.stringify(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field id="vinCode" name="vinCode" placeholder="Enter VIN code" />
            {errors.vinCode && touched.vinCode ? (
              <div>{errors.vinCode}</div>
            ) : null}
            <button type="submit">Check VIN</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
