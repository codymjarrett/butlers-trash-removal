import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Formik, Field, Form, FormikHelpers, FormikErrors } from 'formik';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

interface Values {
  name: string;
  email: string;
  message: string;
}

const validateForm = (values: Values) => {
  const errors: FormikErrors<Values> = {};
  if (!values.name) {
    errors.name = 'Name is required!';
  }

  if (!values.message) {
    errors.message = 'Message is required!';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const Contact: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.md" mt={6}>
        <Heading textAlign="center">Contact Us</Heading>
      </Container>
      <Container maxW="container.md" mt={5}>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={validateForm}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field id="name" name="name">
                {({ field, form }: { field: typeof Field; form: any }) => (
                  <Box>
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        {...field}
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        variant="filled"
                      />
                      {form.errors.name ? (
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      ) : (
                        <FormHelperText>Enter your name</FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                )}
              </Field>
              <Field id="email" name="email">
                {({ field, form }: { field: typeof Field; form: any }) => (
                  <Box mt={5}>
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        variant="filled"
                      />
                      {form.errors.email ? (
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      ) : (
                        <FormHelperText>Enter your email</FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                )}
              </Field>
              <Field id="message" name="message">
                {({ field, form }: { field: typeof Field; form: any }) => (
                  <Box mt={5}>
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <Textarea
                        {...field}
                        id="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        variant="filled"
                      />
                      {form.errors.message ? (
                        <FormErrorMessage>
                          {form.errors.message}
                        </FormErrorMessage>
                      ) : (
                        <FormHelperText>
                          Please provide a message
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                )}
              </Field>
              <Box mt={6}>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isDisabled={isSubmitting || JSON.stringify(errors) !== '{}'}
                >
                  Send
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default Contact;
