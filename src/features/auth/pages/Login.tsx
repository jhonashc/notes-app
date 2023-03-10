import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import {
  CheckboxField,
  PasswordTextField,
  TextField,
} from "../../../components";
import { loginSchema } from "../validators";

export const Login: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm place-self-center p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          navigate("/", {
            replace: true,
          });
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
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
            <div className="flex items-start">
              <CheckboxField
                name="remember"
                type="checkbox"
                label="Remember me"
              />
              <Link
                to="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <Link
                to="/auth/register"
                className="text-blue-700 hover:underline dark:text-blue-500 ml-1"
              >
                Create account
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
