'use client'

import React from "react";
import {Formik, Form, Field, FormikHelpers} from 'formik';
import axios from 'axios';

interface FormValues {
    email: string;
}

axios.defaults.baseURL = 'https://about-cv-backend.onrender.com';

const Waitlist: React.FC = () => {
    const submitJoinWaitlist = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            await axios.post('/users/add-to-waitlist', values);
            console.log("Email sent successfully");
            actions.resetForm();
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className="md:fixed md:bottom-0 w-full">
            <Formik
                initialValues={{email: ''}}
                onSubmit={submitJoinWaitlist}
            >
                <Form className="flex flex-col md:flex-row gap-2 w-full p-4 items-center justify-center">
                    <Field
                        name="email"
                        type="text"
                        placeholder="Enter your email address"
                        className="w-full text-sm rounded-xl text-zinc-500 focus:outline-none p-2 md:w-1/2 bg-zinc-200"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto p-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-orange-400 to-fuchsia-500 hover:animate-pulse motion-reduce:hover:animate-pulse"
                    >
                        Join the waitlist
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Waitlist;
