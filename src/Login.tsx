import "./styles.css";
import { Formik } from "formik";
import TButton from "./components/Button";
import TTextField from "./components/TextField";
import validation from "./validation";

export default function Login() {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={validation}
      >
        {(props) => {
          const {
            values,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            resetForm,
            handleSubmit
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <TTextField
                name="email"
                type="text"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                helperText={errors.email}
              ></TTextField>
              <TTextField
                name="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                helperText={errors.password}
              ></TTextField>
              <div className="footerDiv">
                <TButton
                  type="reset"
                  LabelText="Clear"
                  onClick={resetForm}
                ></TButton>
                <TButton
                  type="submit"
                  disabled={isSubmitting}
                  LabelText="Login"
                ></TButton>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
