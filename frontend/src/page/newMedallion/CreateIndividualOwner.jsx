import { useFormik } from "formik";
import Img from "../../components/Img";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import { createIndividualOwner } from "../../utils/variables";

const CreateIndividualOwner = () => {
  const [addJointOwner, setAddJointOwner] = useState(false);
  const [secondaryAdd, setSecondaryAdd]=useState(false);

  const formik = useFormik({
    initialValues: {
      [createIndividualOwner.field_01.id]: "",
      middletName: "",
      lastName: "",
      ssn: "",
      dob: "",
      passportExpiry: "",
      jointOwnerFirstName: "",
      jointOwnerMiddletName: "",
      jointOwnerLastName: "",
      jointOwnerssn: "",
      jointOwnerdob: "",
      jointOwnerPassportExpiry: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      latitude: "",
      longitude: "",
      secAddressLine1:"",
      secAddressLine2:"",
      secCity:"",
      secState:"",
      secZip:"",
      secLatitude:"",
      secLongitude:"",
      bankName: "",
      bankAccountNumber: "",
      bankAddressLine1: "",
      bankAddressLine2: "",
      bankCity: "",
      bankState: "",
      bankZip: "",
      primaryContactNumber: "",
      additionPhoneNo1: "",
      additionPhoneNo2: "",
      primaryEmailAddress: "",
    },
    validateOnChange: true,
    validate: (values) => {
      const errors = {};
      if (!values[createIndividualOwner.field_01.id]) {
        errors[createIndividualOwner.field_01.id] = `${createIndividualOwner.field_01.label} is required`;
      } else if (values[createIndividualOwner.field_01.id].length < 3) {
        errors[createIndividualOwner.field_01.id] = `${createIndividualOwner.field_01.label} must be at least 3 characters`;
      } else if (values[createIndividualOwner.field_01.id].length > 25) {
        errors[createIndividualOwner.field_01.id] = `${createIndividualOwner.field_01.label} cannot exceed 25 characters`;
      }

      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      } else if (values.lastName.length < 3) {
        errors.lastName = "Last name must be at least 3 characters";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Last name cannot exceed 20 characters";
      }

      if (!values.ssn) {
        errors.ssn = "SSN is required";
      }

      if (!values.dob) {
        errors.dob = "Date of Birth is required";
      } else if (values.dob >= new Date()) {
        errors.dob = "Date of Birth must be in the past";
      }

      if (!values.passportExpiry) {
        errors.passportExpiry = "Passport Expiry Date is required";
      }

      if(addJointOwner){
        if (!values.jointOwnerFirstName) {
          errors.jointOwnerFirstName = "First Name is required";
        } else if (values.jointOwnerFirstName.length < 3) {
          errors.jointOwnerFirstName = "First name must be at least 3 characters";
        } else if (values.jointOwnerFirstName.length > 25) {
          errors.jointOwnerFirstName = "First name cannot exceed 25 characters";
        }
  
        if (!values.jointOwnerLastName) {
          errors.jointOwnerLastName = "Last Name is required";
        } else if (values.jointOwnerLastName.length < 3) {
          errors.jointOwnerLastName = "Last name must be at least 3 characters";
        } else if (values.jointOwnerLastName.length > 20) {
          errors.jointOwnerLastName = "Last name cannot exceed 20 characters";
        }
  
        if (!values.jointOwnerssn) {
          errors.jointOwnerssn = "SSN is required";
        }
  
        if (!values.jointOwnerdob) {
          errors.jointOwnerdob = "Date of Birth is required";
        } else if (values.jointOwnerdob >= new Date()) {
          errors.jointOwnerdob = "Date of Birth must be in the past";
        }
  
        if (!values.jointOwnerPassportExpiry) {
          errors.jointOwnerPassportExpiry = "Passport Expiry Date is required";
        }
      }

      if (!values.addressLine1) {
        errors.addressLine1 = "Address Line 1 Date is required";
      }

      if (!values.city) {
        errors.city = "City is required";
      }

      if (!values.state) {
        errors.state = "State is required";
      }

      if (!values.zip) {
        errors.zip = "zip is required";
      }

      if (!values.latitude) {
        errors.latitude = "Latitude is required";
      }

      if (!values.longitude) {
        errors.longitude = "Longitude is required";
      }

      if(!secondaryAdd){
        if (!values.secAddressLine1) {
          errors.secAddressLine1 = "Address Line 1 Date is required";
        }
  
        if (!values.secCity) {
          errors.secCity = "City is required";
        }
  
        if (!values.secState) {
          errors.secState = "State is required";
        }
  
        if (!values.secZip) {
          errors.secZip = "zip is required";
        }
  
        if (!values.secLatitude) {
          errors.secLatitude = "Latitude is required";
        }
  
        if (!values.secLongitude) {
          errors.secLongitude = "Longitude is required";
        }  
      }

      if (!values.bankName) {
        errors.bankName = "Bank Name is required";
      }

      if (!values.bankCity) {
        errors.bankCity = "City is required";
      }

      if (!values.bankState) {
        errors.bankState = "State is required";
      }

      if (!values.bankZip) {
        errors.bankZip = "ZIP is required";
      }

      if (!values.primaryContactNumber) {
        errors.primaryContactNumber = "Primary Contact Number is required";
      }

      if (!values.primaryEmailAddress) {
        errors.primaryEmailAddress = "Primary Email Address is required";
      }

      return errors;
    },
    onSubmit: (values, { setErrors }) => {
      console.log("values:", values)
      // setErrors({
      //   ...{
      //     firstName: "Backend validation error for First Name",
      //     lastName: "Backend validation error for Last Name",
      //   },
      // });
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    const firstErrorField = Object.keys(formik.errors)[0];
    if (firstErrorField) {
      const field = document.getElementById(firstErrorField);
      console.log("field:", field)
      if (field) {
        field.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [formik.errors]);

  console.log(formik.errors);

  return (
    <div>
      <p className="sec-topic">Create Individual Owner</p>
      <form
        className="common-form d-flex flex-column gap-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="personal"></Img> Personal Details
            </div>
            <p className="text-require ">
              (Required fields are marked with <span>*</span>)
            </p>
          </div>
          <div className="form-body">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-75">
              <div
                className={`item1 w-100-3 position-relative ${
                  formik.touched[createIndividualOwner.field_01.id] && formik.errors[createIndividualOwner.field_01.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={createIndividualOwner.field_01.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[createIndividualOwner.field_01.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={createIndividualOwner.field_01.id}>
                    {createIndividualOwner.field_01.label} <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched[createIndividualOwner.field_01.id] && formik.errors[createIndividualOwner.field_01.id] ? (
                  <div className="error-msg">{formik.errors[createIndividualOwner.field_01.id]}</div>
                ) : null}
              </div>
              <div className="item2 w-100-3 position-relative">
                <FloatLabel>
                  <InputText
                    id="middletName"
                    onChange={formik.handleChange}
                    value={formik.values.middletName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="middletName">Middle Name</label>
                </FloatLabel>
              </div>
              <div
                className={`item3 w-100-3 position-relative ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor="lastName">
                    Last Name <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-msg">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <div
                className={`item4 w-100-3 position-relative ${
                  formik.touched.ssn && formik.errors.ssn
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="ssn"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ssn}
                    icon={() => <Img name="calendar" />}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor="ssn">
                    SSN <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.ssn && formik.errors.ssn ? (
                  <div className="error-msg">{formik.errors.ssn}</div>
                ) : null}
              </div>
              <div
                className={`item5 w-100-3 position-relative ${
                  formik.touched.dob && formik.errors.dob
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId="dob"
                    name="dob"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dob}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor="dob">
                    D.O.B <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="error-msg">{formik.errors.dob}</div>
                ) : null}
              </div>
              <div
                className={`item6 w-100-3 position-relative ${
                  formik.touched.passportExpiry && formik.errors.passportExpiry
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId="passportExpiry"
                    name="passportExpiry"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passportExpiry}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor="passportExpiry">
                    Passport Expiry Date <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.passportExpiry &&
                formik.errors.passportExpiry ? (
                  <div className="error-msg">
                    {formik.errors.passportExpiry}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Button
                text
                label="Upload Documents"
                className="text-black gap-2"
                type="button"
                icon={() => <Img name="upload" />}
              />
              {!addJointOwner && (
                <Button
                  text
                  label="Add joint Owner"
                  className="text-black gap-2"
                  type="button"
                  onClick={() =>{ 
                    setAddJointOwner(true);
                  }}
                  icon={() => <Img name="add" />}
                />
              )}
            </div>
          </div>
        </div>
        {addJointOwner && (
          <div className="form-section">
            <div className="form-sec-header">
              <div className="topic">
                <Img name="personal"></Img> Joint Owner
              </div>
            </div>
            <div className="form-body">
              <div className="d-flex align-items-center flex-wrap form-grid-1 w-75">
                <div
                  className={`item1 w-100-3 position-relative ${
                    formik.touched.jointOwnerFirstName &&
                    formik.errors.jointOwnerFirstName
                      ? "text-danger-con"
                      : ""
                  }`}
                >
                  <FloatLabel>
                    <InputText
                      id="jointOwnerFirstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jointOwnerFirstName}
                      className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                    />
                    <label htmlFor="jointOwnerFirstName">
                      First Name <span className="require-star">*</span>
                    </label>
                  </FloatLabel>
                  {formik.touched.jointOwnerFirstName &&
                  formik.errors.jointOwnerFirstName ? (
                    <div className="error-msg">
                      {formik.errors.jointOwnerFirstName}
                    </div>
                  ) : null}
                </div>
                <div className="item2 w-100-3 position-relative">
                  <FloatLabel>
                    <InputText
                      id="jointOwnerMiddletName"
                      onChange={formik.handleChange}
                      value={formik.values.jointOwnerMiddletName}
                      className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                    />
                    <label htmlFor="jointOwnerMiddletName">Middle Name</label>
                  </FloatLabel>
                </div>
                <div
                  className={`item3 w-100-3 position-relative ${
                    formik.touched.jointOwnerLastName &&
                    formik.errors.jointOwnerLastName
                      ? "text-danger-con"
                      : ""
                  }`}
                >
                  <FloatLabel>
                    <InputText
                      id="jointOwnerLastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jointOwnerLastName}
                      className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                    />
                    <label htmlFor="jointOwnerLastName">
                      Last Name <span className="require-star">*</span>
                    </label>
                  </FloatLabel>
                  {formik.touched.jointOwnerLastName &&
                  formik.errors.jointOwnerLastName ? (
                    <div className="error-msg">
                      {formik.errors.jointOwnerLastName}
                    </div>
                  ) : null}
                </div>
                <div
                  className={`item4 w-100-3 position-relative ${
                    formik.touched.jointOwnerssn && formik.errors.jointOwnerssn
                      ? "text-danger-con"
                      : ""
                  }`}
                >
                  <FloatLabel>
                    <InputText
                      id="jointOwnerssn"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jointOwnerssn}
                      icon={() => <Img name="calendar" />}
                      className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                    />
                    <label htmlFor="jointOwnerssn">
                      SSN <span className="require-star">*</span>
                    </label>
                  </FloatLabel>
                  {formik.touched.jointOwnerssn &&
                  formik.errors.jointOwnerssn ? (
                    <div className="error-msg">
                      {formik.errors.jointOwnerssn}
                    </div>
                  ) : null}
                </div>
                <div
                  className={`item5 w-100-3 position-relative ${
                    formik.touched.jointOwnerdob && formik.errors.jointOwnerdob
                      ? "text-danger-con"
                      : ""
                  }`}
                >
                  <FloatLabel>
                    <Calendar
                      inputId="jointOwnerdob"
                      name="jointOwnerdob"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jointOwnerdob}
                      className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                      showIcon
                      showButtonBar
                      readOnlyInput
                      icon={() => <Img name="calendar" />}
                    />
                    <label htmlFor="jointOwnerdob">
                      D.O.B <span className="require-star">*</span>
                    </label>
                  </FloatLabel>
                  {formik.touched.jointOwnerdob &&
                  formik.errors.jointOwnerdob ? (
                    <div className="error-msg">
                      {formik.errors.jointOwnerdob}
                    </div>
                  ) : null}
                </div>
                <div
                  className={`item6 w-100-3 position-relative ${
                    formik.touched.jointOwnerPassportExpiry &&
                    formik.errors.jointOwnerPassportExpiry
                      ? "text-danger-con"
                      : ""
                  }`}
                >
                  <FloatLabel>
                    <Calendar
                      inputId="jointOwnerPassportExpiry"
                      name="jointOwnerPassportExpiry"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.jointOwnerPassportExpiry}
                      className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                      showIcon
                      icon={() => <Img name="calendar" />}
                    />
                    <label htmlFor="jointOwnerPassportExpiry">
                      Passport Expiry Date{" "}
                      <span className="require-star">*</span>
                    </label>
                  </FloatLabel>
                  {formik.touched.jointOwnerPassportExpiry &&
                  formik.errors.jointOwnerPassportExpiry ? (
                    <div className="error-msg">
                      {formik.errors.jointOwnerPassportExpiry}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button
                  text
                  label="Upload Documents"
                  className="text-black gap-2"
                  type="button"
                  icon={() => <Img name="upload" />}
                />
                <Button
                  text
                  label="Cancel"
                  className="text-black gap-2"
                  type="button"
                  onClick={() => {setAddJointOwner(false);
                    formik.setFieldValue('jointOwnerFirstName', '',false);
                    formik.setFieldValue('jointOwnerMiddletName', '',false);
                    formik.setFieldValue('jointOwnerLastName', '',false);
                    formik.setFieldValue('jointOwnerssn', '',false);
                    formik.setFieldValue('jointOwnerdob', '',false);
                    formik.setFieldValue('jointOwnerPassportExpiry', '',false);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="primary-address"></Img> Primary Address
            </div>
          </div>
          <div className="form-body ">
            <div className="d-flex flex-column common-gap">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-90">
              <div
                className={`item1 w-100-2 position-relative ${
                  formik.touched.addressLine1 && formik.errors.addressLine1
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="addressLine1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.addressLine1}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100 `}
                  />
                  <label htmlFor="addressLine1">
                    Address Line 1 <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
                  <div className="error-msg">{formik.errors.addressLine1}</div>
                ) : null}
              </div>
              <div className="item2 w-100-2">
                <FloatLabel>
                  <InputText
                    id="addressLine2"
                    onChange={formik.handleChange}
                    value={formik.values.addressLine2}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="addressLine2">Address Line 2 </label>
                </FloatLabel>
              </div>
            </div>
            <div className="w-75 d-flex align-items-center flex-wrap form-grid-1">
              <div
                className={`item3 w-100-3 position-relative ${
                  formik.touched.city && formik.errors.city
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="city">
                    City <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.city && formik.errors.city ? (
                  <div className="error-msg">{formik.errors.city}</div>
                ) : null}
              </div>
              <div
                className={`item4 w-100-3  position-relative ${
                  formik.touched.state && formik.errors.state
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="state">
                    State <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.state && formik.errors.state ? (
                  <div className="error-msg">{formik.errors.state}</div>
                ) : null}
              </div>
              <div
                className={`item5 w-100-3  position-relative ${
                  formik.touched.zip && formik.errors.zip
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="zip"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zip}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="zip">
                    ZIP <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.zip && formik.errors.zip ? (
                  <div className="error-msg">{formik.errors.zip}</div>
                ) : null}
              </div>
              <div
                className={`item6 w-100-3  position-relative ${
                  formik.touched.latitude && formik.errors.latitude
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="latitude"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.latitude}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="latitude">
                    Latitude<span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.latitude && formik.errors.latitude ? (
                  <div className="error-msg">{formik.errors.latitude}</div>
                ) : null}
              </div>
              <div
                className={`item7 w-100-3  position-relative ${
                  formik.touched.longitude && formik.errors.longitude
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="longitude"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.longitude}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="longitude">
                    Longitude<span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.longitude && formik.errors.longitude ? (
                  <div className="error-msg">{formik.errors.longitude}</div>
                ) : null}
              </div>
            </div>
            </div>
            {!secondaryAdd&&<div className="d-flex align-items-center justify-content-end mt-3">
              <Button
                text
                label="Add Secondary Address"
                type="button"
                className="text-black gap-2"
                onClick={() =>{ 
                  setSecondaryAdd(true);
                    formik.setFieldValue('secAddressLine1', '',false);
                    formik.setFieldValue('secAddressLine2', '',false);
                    formik.setFieldValue('secCity', '',false);
                    formik.setFieldValue('secState', '',false);
                    formik.setFieldValue('secZip', '',false);
                    formik.setFieldValue('secLatitude', '',false);
                    formik.setFieldValue('secLongitude', '',false);
                }
                }
                icon={() => <Img name="add" />}
              />
            </div>}
          </div>
        </div>
        {
          secondaryAdd&&<div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="primary-address"></Img> Secondary Address
            </div>
          </div>
          <div className="form-body ">
            <div className="d-flex flex-column common-gap">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-90">
              <div
                className={`item1 w-100-2 position-relative ${
                  formik.touched.secAddressLine1 && formik.errors.secAddressLine1
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secAddressLine1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secAddressLine1}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100 `}
                  />
                  <label htmlFor="secAddressLine1">
                    Address Line 1 <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secAddressLine1 && formik.errors.secAddressLine1 ? (
                  <div className="error-msg">{formik.errors.secAddressLine1}</div>
                ) : null}
              </div>
              <div className="item2 w-100-2">
                <FloatLabel>
                  <InputText
                    id="secAddressLine2"
                    onChange={formik.handleChange}
                    value={formik.values.secAddressLine2}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secAddressLine2">Address Line 2 </label>
                </FloatLabel>
              </div>
            </div>
            <div className="w-75 d-flex align-items-center flex-wrap form-grid-1">
              <div
                className={`item3 w-100-3 position-relative ${
                  formik.touched.secCity && formik.errors.secCity
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secCity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secCity}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secCity">
                    City <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secCity && formik.errors.secCity ? (
                  <div className="error-msg">{formik.errors.secCity}</div>
                ) : null}
              </div>
              <div
                className={`item4 w-100-3  position-relative ${
                  formik.touched.secState && formik.errors.secState
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secState"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secState}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secState">
                    State <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secState && formik.errors.secState ? (
                  <div className="error-msg">{formik.errors.secState}</div>
                ) : null}
              </div>
              <div
                className={`item5 w-100-3  position-relative ${
                  formik.touched.secZip && formik.errors.secZip
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secZip"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secZip}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secZip">
                    ZIP <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secZip && formik.errors.secZip ? (
                  <div className="error-msg">{formik.errors.secZip}</div>
                ) : null}
              </div>
              <div
                className={`item6 w-100-3  position-relative ${
                  formik.touched.secLatitude && formik.errors.secLatitude
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secLatitude"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secLatitude}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secLatitude">
                    Latitude<span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secLatitude && formik.errors.secLatitude ? (
                  <div className="error-msg">{formik.errors.secLatitude}</div>
                ) : null}
              </div>
              <div
                className={`item7 w-100-3  position-relative ${
                  formik.touched.secLongitude && formik.errors.secLongitude
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="secLongitude"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secLongitude}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="secLongitude">
                    Longitude<span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.secLongitude && formik.errors.secLongitude ? (
                  <div className="error-msg">{formik.errors.secLongitude}</div>
                ) : null}
              </div>
            </div>
            </div>
            <div className="d-flex align-items-center justify-content-end mt-3">
              {/* <Button
                text
                label="Cancel"
                className="text-black gap-2"
                type="button"
                onClick={() =>{ 
                  setSecondaryAdd(false);
                  // formik.resetForm({values:{...formik.values, jointOwnerFirstName: "",
                  //   jointOwnerMiddletName: "",
                  //   jointOwnerLastName: "",
                  //   jointOwnerssn: "",
                  //   jointOwnerdob: "",
                  //   jointOwnerPassportExpiry: ""}})
                }
                }
              /> */}
              <Button
                text
                label="Cancel"
                type="button"
                className="text-black gap-2"
                onClick={() =>{ 
                  setSecondaryAdd(false);
                    formik.setFieldValue('secAddressLine1', '',false);
                    formik.setFieldValue('secAddressLine2', '',false);
                    formik.setFieldValue('secCity', '',false);
                    formik.setFieldValue('secState', '',false);
                    formik.setFieldValue('secZip', '',false);
                    formik.setFieldValue('secLatitude', '',false);
                    formik.setFieldValue('secLongitude', '',false);
                }
                }
              />
            </div>
          </div>
        </div>
        }
        <div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="bank"></Img> Bank Details
            </div>
          </div>
          <div className="form-body d-flex flex-column common-gap">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-50">
              <div
                className={`item1 w-100-2  position-relative ${
                  formik.touched.bankName && formik.errors.bankName
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="bankName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankName">
                    Bank Name <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.bankName && formik.errors.bankName ? (
                  <div className="error-msg">{formik.errors.bankName}</div>
                ) : null}
              </div>
              <div className="item2 w-100-2">
                <FloatLabel>
                  <InputText
                    id="bankAccountNumber"
                    onChange={formik.handleChange}
                    value={formik.values.bankAccountNumber}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankAccountNumber">
                    Bank Account Number{" "}
                  </label>
                </FloatLabel>
              </div>
            </div>
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-100">
              <div className="item1 w-100-2">
                <FloatLabel>
                  <InputText
                    id="bankAddressLine1"
                    onChange={formik.handleChange}
                    value={formik.values.bankAddressLine1}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankAddressLine1">Address Line 1 </label>
                </FloatLabel>
              </div>
              <div className="item2 w-100-2">
                <FloatLabel>
                  <InputText
                    id="bankAddressLine2"
                    onChange={formik.handleChange}
                    value={formik.values.bankAddressLine2}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankAddressLine2">Address Line 2 </label>
                </FloatLabel>
              </div>
            </div>
            <div className="w-75 d-flex align-items-center flex-wrap form-grid-1">
              <div
                className={`item3 w-100-3  position-relative ${
                  formik.touched.bankCity && formik.errors.bankCity
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="bankCity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankCity}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankCity">
                    City <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.bankCity && formik.errors.bankCity ? (
                  <div className="error-msg">{formik.errors.bankCity}</div>
                ) : null}
              </div>
              <div
                className={`item4 w-100-3  position-relative ${
                  formik.touched.bankState && formik.errors.bankState
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="bankState"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankState}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankState">
                    State <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.bankState && formik.errors.bankState ? (
                  <div className="error-msg">{formik.errors.bankState}</div>
                ) : null}
              </div>
              <div
                className={`item5 w-100-3  position-relative ${
                  formik.touched.bankZip && formik.errors.bankZip
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="bankZip"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankZip}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="bankZip">
                    ZIP <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.bankZip && formik.errors.bankZip ? (
                  <div className="error-msg">{formik.errors.bankZip}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="mail"></Img> Contact Details
            </div>
          </div>
          <div className="form-body d-flex flex-column common-gap">
            <div className="w-75 d-flex align-items-center flex-wrap form-grid-1">
              <div
                className={`w-100-3  position-relative ${
                  formik.touched.primaryContactNumber &&
                  formik.errors.primaryContactNumber
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="primaryContactNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.primaryContactNumber}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="primaryContactNumber">
                    Primary Contact Number
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.primaryContactNumber &&
                formik.errors.primaryContactNumber ? (
                  <div className="error-msg">
                    {formik.errors.primaryContactNumber}
                  </div>
                ) : null}
              </div>
              <div className="w-100-3">
                <FloatLabel>
                  <InputText
                    id="additionPhoneNo1"
                    onChange={formik.handleChange}
                    value={formik.values.additionPhoneNo1}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="additionPhoneNo1">Addition Phone No 1 </label>
                </FloatLabel>
              </div>
              <div className="w-100-3">
                <FloatLabel>
                  <InputText
                    id="additionPhoneNo2"
                    onChange={formik.handleChange}
                    value={formik.values.additionPhoneNo2}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="additionPhoneNo2">Addition Phone No 2 </label>
                </FloatLabel>
              </div>
              <div
                className={`w-100-3  position-relative ${
                  formik.touched.primaryEmailAddress &&
                  formik.errors.primaryEmailAddress
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id="primaryEmailAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.primaryEmailAddress}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="primaryEmailAddress">
                    Primary Email Address{" "}
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched.primaryEmailAddress &&
                formik.errors.primaryEmailAddress ? (
                  <div className="error-msg">
                    {formik.errors.primaryEmailAddress}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Button
          label="Submit"
          type="button"
          onClick={() => {
            formik.handleSubmit();
          }}
          severity="warning"
          className="border-radius-0 primary-btn"
        />
      </form>
    </div>
  );
};

export default CreateIndividualOwner;
