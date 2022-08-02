import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './ConverterForm.module.css';

export const ConverterForm = () => {
  return (
    <main>
      <div className={styles.container}>
        <Formik
          initialValues={{ email: '', color: 'USD' }}
          // onSubmit={(values, actions) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     actions.setSubmitting(false);
          //   }, 1000);
          // }}
        >
          <Form className={styles.form}>
            <h1 className={styles.title}>Currency converter</h1>
            <Field type="email" name="email" placeholder="Email" />
            <Field as="select" name="color">
              <option value="red">USD</option>
              <option value="green">EUR</option>
              <option value="blue">UAH</option>
            </Field>
            <button>Convert</button>
            <Field type="email" name="email" placeholder="Email" />
            <Field as="select" name="color">
              <option value="red">USD</option>
              <option value="green">EUR</option>
              <option value="blue">UAH</option>
            </Field>
          </Form>
        </Formik>
      </div>
    </main>
    // <div className={styles.container}>
    //   <form onSubmit={formik.handleSubmit} className={styles.form}>
  );
};
