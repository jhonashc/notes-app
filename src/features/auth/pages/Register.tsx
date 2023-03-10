import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { PasswordTextField, TextField } from "../../../components";
import { registerSchema } from "../validators";

export const Register: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm place-self-center p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          navigate("/", {
            replace: true,
          });
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h5>
            <TextField
              name="email"
              type="email"
              label="Email"
              placeholder="name@company.com"
            />
            <PasswordTextField
              name="password"
              label="Password"
              placeholder="••••••••"
            />
            <PasswordTextField
              name="confirmPassword"
              label="Confirm password"
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Do you have an account?
              <Link
                to="/auth/login"
                className="text-blue-700 hover:underline dark:text-blue-500 ml-1"
              >
                Login here
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
