import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormSection from "./FormSection";
import formFields from "../data/FormFields";
import FormInput from "./FormInput";
import FormGroup from "./FormGroup";
import SubmittedData from "./SubmittedData";

export default function DataForm() {
  const [userData, setUserData] = useState(null);
  const defaultValues = {};
  [
    ...formFields.userFields,
    ...formFields.addressFields,
    ...formFields.addressGroupFields,
  ].forEach((field) => {
    defaultValues[field.name] = field.type === "select" ? {} : "";
  });

  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <FormSection title="User Information">
            <FormGroup columns={2}>
              {formFields.userFields.map((fieldData) => {
                return (
                  <Controller
                    key={fieldData.name}
                    name={fieldData.name}
                    control={control}
                    rules={{ required: fieldData.required }}
                    render={({ field }) => (
                      <FormInput fieldData={{ ...fieldData, ...field }} />
                    )}
                  />
                );
              })}
            </FormGroup>
          </FormSection>
          <FormSection title="Address Information">
            <FormGroup columns={1}>
              {formFields.addressFields.map((fieldData) => {
                return (
                  <Controller
                    key={fieldData.name}
                    name={fieldData.name}
                    control={control}
                    rules={{ required: fieldData.required }}
                    render={({ field }) => (
                      <FormInput fieldData={{ ...fieldData, ...field }} />
                    )}
                  />
                );
              })}
            </FormGroup>
            <FormGroup columns={3}>
              {formFields.addressGroupFields.map((fieldData) => {
                return (
                  <Controller
                    key={fieldData.name}
                    name={fieldData.name}
                    control={control}
                    rules={{ required: fieldData.required }}
                    render={({ field }) => (
                      <FormInput fieldData={{ ...fieldData, ...field }} />
                    )}
                  />
                );
              })}
            </FormGroup>
          </FormSection>
        </div>
        <button type="submit">Submit</button>
      </form>
      {userData && <SubmittedData formData={userData} />}
    </div>
  );
}
