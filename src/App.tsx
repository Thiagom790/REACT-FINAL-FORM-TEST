import { Field, Form, FormSpy } from "react-final-form";
import "./App.css";
import RenderCount from "./components/RenderCount";
import createDecorator from "final-form-focus";

function App() {
  const handleSubmit = (value: any) => {
    console.log(value);
  };

  const focusOnError = createDecorator();
  const required = (value: any) => (value ? undefined : "required");

  return (
    <Form
      onSubmit={handleSubmit}
      decorators={[focusOnError]}
      subscription={{
        submitting: true,
      }}
    >
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ meta, input, placeholder }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                  {meta.active && " Field is active"}
                </div>
              )}
            </Field>
          </div>
          <Field
            name="lastName"
            component="input"
            placeholder="First Name"
            validate={required}
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true,
            }}
          >
            {({ meta, input, placeholder }) => (
              <div>
                <RenderCount />
                <label>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
                {meta.active && " Field is active"}
              </div>
            )}
          </Field>
          <div>
            <label htmlFor="name">Email</label>
            <Field
              name="email"
              component="input"
              placeholder="Email"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            />
          </div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>{JSON.stringify(values)}</pre>}
          </FormSpy>
        </form>
      )}
    </Form>
  );
}

export default App;
