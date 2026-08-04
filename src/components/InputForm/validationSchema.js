import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  vinCode: Yup.string()
    .min(17, 'Too Short')
    .max(17, 'Too Long')
    .required('Required')
    .matches(/^[^<>{}[\]|\\/~]+$/, 'Forbidden symbol'),
});

export default ValidationSchema;
