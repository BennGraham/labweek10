import FormSection from "./FormSection";

export default function SubmittedData({ formData }) {
  return (
    <FormSection className="submitted-data">
      <h4>Submitted Data</h4>
      <div className="user-data-container">
        <div>
          <span>Email:</span>
          <span>Name:</span>
          <span>Address:</span>
          <span>City:</span>
          <span>Province:</span>
          <span>Postal Code:</span>
        </div>
        <div>
          <span>{formData.email}</span>
          <span>{formData.name}</span>
          <span>{`${formData.address}, ${formData.address2}`}</span>
          <span>{formData.city}</span>
          <span>{formData.province}</span>
          <span>{formData.postalCode}</span>
        </div>
      </div>
    </FormSection>
  );
}
