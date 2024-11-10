import SelectInput from "./SelectInput.jsx";

export default function FormInput({ fieldData }) {
  const renderInput = () => {
    switch (fieldData.type) {
      case "select":
        return <SelectInput fieldData={fieldData} />;
      case "text":
      default:
        return <input {...fieldData} />;
    }
  };

  return (
    <div className="form-input">
      <div className="form-label">{fieldData.label}</div>
      {renderInput()}
    </div>
  );
}
