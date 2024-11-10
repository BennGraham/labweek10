const userFields = [
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter email address",
    required: true,
  },
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
];

const addressFields = [
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
    required: true,
  },
  {
    name: "address2",
    label: "Address line 2",
    type: "text",
    placeholder: "Apartment or Suite",
    required: false,
  },
];

const addressGroupFields = [
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "City name",
    required: true,
  },
  {
    name: "province",
    label: "Provide",
    type: "select",
    required: true,
    options: [
      { value: "AB", label: "Alberta" },
      { value: "BC", label: "British Columbia" },
      { value: "MB", label: "Manitoba" },
      { value: "NB", label: "New Brunswick" },
      { value: "NL", label: "Newfoundland and Labrador" },
      { value: "NT", label: "Northwest Territories" },
      { value: "NS", label: "Nova Scotia" },
      { value: "NU", label: "Nunavut" },
      { value: "ON", label: "Ontario" },
      { value: "PE", label: "Prince Edward Island" },
      { value: "QC", label: "Quebec" },
      { value: "SK", label: "Saskatchewan" },
      { value: "YT", label: "Yukon" },
    ],
  },
  {
    name: "postalCode",
    label: "Postal Code",
    type: "text",
    placeholder: "A1B 2C3",
    required: true,
  },
];

const formFields = {
  userFields: userFields,
  addressFields: addressFields,
  addressGroupFields: addressGroupFields,
};
export default formFields;
