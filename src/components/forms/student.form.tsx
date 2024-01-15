import { FC, useMemo } from 'react';
import * as Yup from 'yup';
import { Student } from '../../domain/student';
import { ErrorMessage, Form, Formik } from 'formik';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Country, CountryList } from '../../utils/country';

interface StudentFormProps {
  student?: Student;
}

export const StudentForm: FC<StudentFormProps> = ({
  student = {} as Student,
}) => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required('Field is required'),
      lastName: Yup.string().required('Field is required'),
      age: Yup.number().required('Field is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Field is required'),
      phone: Yup.string()
        .matches(
          /^\+3816\d{8}$/,
          'Invalid phone number. Phone number has to start with +3816 and then 8 digits'
        )
        .required('Field is required'),
    });
  }, []);

  const initialValues = useMemo(() => {
    return {
      name: student?.name || '',
      lastName: student?.lastName || '',
      age: student?.age || '',
      email: student?.email || '',
      phone: student?.phone || '',
      address: student?.address || '',
      city: student?.city || '',
      zip: student?.zip || '',
      country: student?.country || null,
    };
  }, [student]);

  return (
    <Container maxWidth={'sm'}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (
            !values ||
            !values.name ||
            !values.lastName ||
            !values.age ||
            !values.email ||
            !values.phone
          ) {
            return;
          }
          console.log(values);
        }}
      >
        {({
          errors,
          handleChange,
          handleBlur,
          touched,
          dirty,
          isValid,
          setFieldValue,
        }) => {
          return (
            <Form>
              <Stack spacing={2}>
                <Box>
                  <TextField
                    label={'Name'}
                    variant='outlined'
                    type={'text'}
                    name={'name'}
                    placeholder={'Fill in the name'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    required
                    fullWidth
                  />
                  <ErrorMessage name={'name'}>
                    {(msg) => (
                      <Typography variant='caption' color={'error'} mt={0}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
                <Box>
                  <TextField
                    label={'Last Name'}
                    variant='outlined'
                    type={'text'}
                    name={'lastName'}
                    placeholder={'Fill in the last name'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    required
                    fullWidth
                  />
                  <ErrorMessage name={'lastName'}>
                    {(msg) => (
                      <Typography variant='caption' color={'error'} mt={0}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
                <Box>
                  <TextField
                    label={'Age'}
                    variant='outlined'
                    type={'number'}
                    name={'age'}
                    placeholder={'Fill in the age'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.age && Boolean(errors.age)}
                    required
                    fullWidth
                  />
                  <ErrorMessage name={'age'}>
                    {(msg) => (
                      <Typography variant='caption' color={'error'} mt={0}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
                <Box>
                  <TextField
                    label={'Email'}
                    variant='outlined'
                    type={'email'}
                    name={'email'}
                    placeholder={'Fill in the email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    required
                    fullWidth
                  />
                  <ErrorMessage name={'email'}>
                    {(msg) => (
                      <Typography variant='caption' color={'error'} mt={0}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
                <Box>
                  <TextField
                    label={'Phone number'}
                    variant='outlined'
                    type={'phone'}
                    name={'phone'}
                    placeholder={'Fill in the phone number'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    required
                    fullWidth
                  />
                  <ErrorMessage name={'phone'}>
                    {(msg) => (
                      <Typography variant='caption' color={'error'} mt={0}>
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
                <Box>
                  <Autocomplete
                    options={CountryList}
                    getOptionLabel={(option: Country): string => {
                      return `${option.emoji} ${option.name}`;
                    }}
                    onChange={(event: any, country: Country | null) => {
                      setFieldValue('country', country);
                    }}
                    isOptionEqualToValue={(option: Country, value: Country) =>
                      option.name === value.name
                    }
                    renderInput={(params) => (
                      <Box>
                        <TextField
                          {...params}
                          name={'country'}
                          label={'Country'}
                          placeholder={'Select country'}
                          onBlur={handleBlur}
                          error={touched.country && Boolean(errors.country)}
                          required
                        />
                        <ErrorMessage name={'country'}>
                          {(msg) => (
                            <Typography
                              variant='caption'
                              color={'error'}
                              mt={0}
                            >
                              {msg}
                            </Typography>
                          )}
                        </ErrorMessage>
                      </Box>
                    )}
                  />
                </Box>
                <Box textAlign={'right'}>
                  <Button
                    variant={'outlined'}
                    type='submit'
                    disabled={!dirty || !isValid}
                  >
                    {'Save'}
                  </Button>
                </Box>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
