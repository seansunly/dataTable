import { Formik,Form,ErrorMessage,Field } from 'formik'

import React from 'react'

import * as Yup from 'yup'
import values from './../../../../node_modules/lodash-es/values';



const initialValues = {
  email: "",
  firtName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalide email").required("Email is required"),
  firtName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  password: Yup.string()
    .min(8, "password at least 8 characters")
    .required("Password is require"),
  //confirmPassword: Yup.string().oneOf([Yup.ref("password",null)],"confirmPassword must be much").required("Confirm Password is required")
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

export default function Register() {

    //handle registration
    const handleRegister = (values) => {
        console.log(values);
        // submit to server
    };
  return (
    <section className="h-screen flex flex-col justify-center items-center  mt-8 mb-8">
      <div className="bg-slate-300 shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Register
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            handleRegister(value);
            //console.log(value);
            // submit to server
          }}
        >
          <Form className="w-full">
            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* First Name Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="firtName"
              >
                First Name
              </label>
              <Field
                type="text"
                id="firtName"
                name="firtName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
              />
              <ErrorMessage
                name="firtName"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Last Name Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
