import * as Yup from 'yup';

const validationSchema = () => {
  const Schema = Yup.object({
    "title": Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
    "year": Yup.number().min(1800,'Must be more than 1800').max(2022,'Must be less than 2022').required('Required'),
    "genres": Yup.array().defined().required('Required'),
    "contentRating": Yup.number().min(1,'Must be between 1 and 10').max(10,'Must be between 1 and 10').required('Required'),
    "releaseDate":  Yup.date().required('Required'),
    "originalTitle": Yup.string().required('Required'),
    "storyline": Yup.string().min(100, 'Must be 100 characters at least').required('Required'),
  });
  return Schema;
};
export default validationSchema;
