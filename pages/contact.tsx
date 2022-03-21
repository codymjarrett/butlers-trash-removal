import React from 'react';
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
  Stack,
  Textarea,
  useMediaQuery,
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
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Layout>
      <Container maxW="container.md" mt={5}>
        <Heading textAlign="center">Contact Us</Heading>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={validateForm}
          onSubmit={async (
            values: Values,
            { setSubmitting, resetForm }: FormikHelpers<Values>
          ) => {
            setSubmitting(true);
            const data = await fetch(`/api/contact/`, {
              method: 'POST',
              body: JSON.stringify(values),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            });

            if (data) {
              resetForm();
            }
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
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={8}
                mt={6}
              >
                <Field id="name" name="name">
                  {({ field, form }: { field: typeof Field; form: any }) => (
                    <Box width={isLargerThan768 ? 'half' : 'full'}>
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel htmlFor="name" fontSize="lg">
                          Name
                        </FormLabel>
                        <Input
                          {...field}
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          variant="filled"
                        />
                        {form.errors.name ? (
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        ) : (
                          <FormHelperText fontSize="lg">
                            Enter your name
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  )}
                </Field>
                <Field id="email" name="email">
                  {({ field, form }: { field: typeof Field; form: any }) => (
                    <Box mt={5} width={isLargerThan768 ? 'half' : 'full'}>
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email" fontSize="lg">
                          Email
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          variant="filled"
                        />
                        {form.errors.email ? (
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        ) : (
                          <FormHelperText fontSize="lg">
                            Enter your email
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  )}
                </Field>
              </Stack>
              <Field id="message" name="message">
                {({ field, form }: { field: typeof Field; form: any }) => (
                  <Box mt={5}>
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                    >
                      <FormLabel htmlFor="message" fontSize="lg">
                        Message
                      </FormLabel>
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
                        <FormHelperText fontSize="lg">
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
                  isLoading={isSubmitting}
                  isDisabled={JSON.stringify(errors) !== '{}'}
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
