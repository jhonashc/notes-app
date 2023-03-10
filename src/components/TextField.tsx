import { useField } from "formik";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState, FormEvent } from "react";

type TextFieldProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};

type PasswordTextFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export const PasswordTextField: React.FC<PasswordTextFieldProps> = ({
  label,
  ...props
}): JSX.Element => {
  const [field, meta] = useField(props);
  const [visible, setVisible] = useState(false);

  const handleClick = (): void => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {meta.touched && meta.error ? (
        <div className="error">
          <label className="block text-sm font-medium text-red-700 dark:text-red-500">
            {label}
          </label>
          <div className="relative">
            <input
              type={`${visible ? "text" : "password"}`}
              {...field}
              {...props}
              className="mt-3 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            />
            <button
              type="button"
              className="absolute top-3 right-2 translate-y-2/3"
              onClick={handleClick}
            >
              {visible ? (
                <BsFillEyeFill className="text-lg text-gray-400" />
              ) : (
                <BsFillEyeSlashFill className="text-lg top-0 text-gray-400" />
              )}
            </button>
          </div>
          <p className="mt-3 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{meta.error}</span>
          </p>
        </div>
      ) : (
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {label}
          <div className="relative">
            <input
              type={`${visible ? "text" : "password"}`}
              {...field}
              {...props}
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <button
              type="button"
              className="absolute top-0 right-2 translate-y-2/3"
              onClick={handleClick}
            >
              {visible ? (
                <BsFillEyeFill className="text-lg text-gray-400" />
              ) : (
                <BsFillEyeSlashFill className="text-lg top-0 text-gray-400" />
              )}
            </button>
          </div>
        </label>
      )}
    </>
  );
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  ...props
}): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <div className="error">
          <label className="block text-sm font-medium text-red-700 dark:text-red-500">
            {label}
          </label>
          <input
            {...field}
            {...props}
            className="mt-3 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          />
          <p className="mt-3 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{meta.error}</span>
          </p>
        </div>
      ) : (
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {label}
          <input
            {...field}
            {...props}
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </label>
      )}
    </>
  );
};
