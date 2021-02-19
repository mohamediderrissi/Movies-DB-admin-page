import React from 'react';
import FormComponent from '../../components/FormComponent';
import { Formik } from 'formik';
import initialValues from './formState';
import validationSchema from './validation';
import handleSubmit from './handleSubmit';

const FormContainer = ({ openForm, setOpenForm}) => {
  return (
    <div>
        <Formik
            initialValues={initialValues(setOpenForm)}
            validationSchema={validationSchema()}
            onSubmit={handleSubmit}
        >
            <FormComponent openForm={openForm} setOpenForm={setOpenForm} />
        </Formik>
    </div>
  );
}

export default FormContainer;
