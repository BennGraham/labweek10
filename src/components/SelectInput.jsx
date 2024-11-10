export default function SelectInput({ fieldData }) {
  return (
    <select {...fieldData} style={{ width: "100%" }}>
      {fieldData.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
