import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './ConverterForm.module.css';
import { Icon } from '../Icon';

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
            <div className={styles.wrapper}>
              <Field
                type="email"
                name="email"
                placeholder="1.00"
                className={styles.input}
              />
              <Field as="select" name="color" className={styles.select}>
                <option value="red">USD</option>
                <option value="green">EUR</option>
                <option value="blue">UAH</option>
              </Field>
              <button className={styles.button}>
                <Icon name="usa" color="white" size="20" />
              </button>
              <Field
                type="email"
                name="email"
                placeholder="0.00"
                className={styles.input}
              />
              <Field as="select" name="color" className={styles.select}>
                <option value="red">USD</option>
                <option value="green">EUR</option>
                <option value="blue">UAH</option>
              </Field>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
    // <div className={styles.container}>
    //   <form onSubmit={formik.handleSubmit} className={styles.form}>
  );
};
