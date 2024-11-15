import React, { useState } from 'react'
import Img from '../../components/Img'
import { Button } from 'primereact/button'
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { RadioButton } from 'primereact/radiobutton'
import { useFormik } from 'formik'
import { leaseDetail } from '../../utils/variables'
import { Checkbox } from 'primereact/checkbox'

const LeaseDetail = () => {
    const [checked, setChecked] = useState(false);
    const formik = useFormik({
        initialValues: {
          merchantName: "",
          merchantBank: "",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div>
      <div className="topic-txt d-flex align-items-center gap-2 topic-con">
        <Img name="lease" className="icon-black"></Img>Enter Lease Details
      </div>
      <Button
          outlined
          label="Upload Documents"
          className="text-black gap-2 outline-btn fs-16-semibold d-flex ms-auto"
          type="button"
          icon={() => <Img name="uploaddoc" />}
        />
        <form
        action=""
        className="common-form d-flex flex-column gap-5 mt-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-section">
          <div className="form-body">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-75">
              <div
                className={`item1 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_01.id] &&
                  formik.errors[leaseDetail.field_01.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={leaseDetail.field_01.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_01.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={leaseDetail.field_01.id}>
                    {leaseDetail.field_01.label}{" "}
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched[leaseDetail.field_01.id] &&
                formik.errors[leaseDetail.field_01.id] ? (
                  <div className="error-msg">
                    {formik.errors[leaseDetail.field_01.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item2 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_02.id] &&
                  formik.errors[leaseDetail.field_02.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={leaseDetail.field_02.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_02.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor="middletName">
                    {leaseDetail.field_02.label}
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched[leaseDetail.field_02.id] &&
                formik.errors[leaseDetail.field_02.id] ? (
                  <div className="error-msg">
                    {formik.errors[leaseDetail.field_02.id]}
                  </div>
                ) : null}
              </div>
              <div className="item3 w-100-3"></div>
              <div
                className={`item4 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_03.id] &&
                  formik.errors[leaseDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={leaseDetail.field_03.id}
                    name={leaseDetail.field_03.id}
                    onChange={formik.handleChange}
                    value={formik.values[leaseDetail.field_03.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={leaseDetail.field_03.id}>
                    {leaseDetail.field_03.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item5 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_03.id] &&
                  formik.errors[leaseDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={leaseDetail.field_04.id}
                    name={leaseDetail.field_04.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_04.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={leaseDetail.field_04.id}>
                    {leaseDetail.field_04.label}
                  </label>
                </FloatLabel>
                {formik.touched[leaseDetail.field_04.id] &&
                formik.errors[leaseDetail.field_04.id] ? (
                  <div className="error-msg">
                    {formik.errors[leaseDetail.field_04.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item6 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_03.id] &&
                  formik.errors[leaseDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Dropdown
                    options={leaseDetail.field_05.options}
                    optionLabel="name"
                    placeholder={`Select a ${leaseDetail.field_05.label}`}
                    id={leaseDetail.field_05.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_05.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={leaseDetail.field_05.id}>
                    {leaseDetail.field_05.label}
                  </label>
                </FloatLabel>
                {formik.touched[leaseDetail.field_05.id] &&
                formik.errors[leaseDetail.field_05.id] ? (
                  <div className="error-msg">
                    {formik.errors[leaseDetail.field_05.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item7 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_06.id] &&
                  formik.errors[leaseDetail.field_06.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={leaseDetail.field_06.id}
                    name={leaseDetail.field_06.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_06.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={leaseDetail.field_06.id}>
                    {leaseDetail.field_06.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item8 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_07.id] &&
                  formik.errors[leaseDetail.field_07.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={leaseDetail.field_07.id}
                    name={leaseDetail.field_07.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[leaseDetail.field_07.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={leaseDetail.field_07.id}>
                    {leaseDetail.field_07.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item9 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_08.id] &&
                  formik.errors[leaseDetail.field_08.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <div className="d-flex align-items-center flex-wrap gap-4">
                  <p>{leaseDetail.field_08.label}</p>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_08.option[0].id}
                      name={leaseDetail.field_08.id}
                      value="yes"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_08.id] === "yes"
                      }
                    />
                    <label htmlFor={leaseDetail.field_08.option[0].id} className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_08.option[1].id}
                      name={leaseDetail.field_08.id}
                      value="no"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_08.id] === "no"
                      }
                    />
                    <label htmlFor={leaseDetail.field_08.option[1].id} className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`item10 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_09.id] &&
                  formik.errors[leaseDetail.field_09.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <div className="d-flex align-items-center flex-wrap gap-4">
                  <p>{leaseDetail.field_09.label}</p>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_09.option[0].id}
                      name={leaseDetail.field_09.id}
                      value="yes"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_09.id] === "yes"
                      }
                    />
                    <label htmlFor={leaseDetail.field_09.option[0].id} className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_09.option[1].id}
                      name={leaseDetail.field_09.id}
                      value="no"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_09.id] === "no"
                      }
                    />
                    <label htmlFor={leaseDetail.field_09.option[1].id} className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`item11 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_10.id] &&
                  formik.errors[leaseDetail.field_10.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  {/* <InputText
                    id={leaseDetail.field_10.id}
                    onChange={formik.handleChange}
                    value={formik.values[leaseDetail.field_10.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={leaseDetail.field_10.id}>
                    {leaseDetail.field_10.label}
                  </label> */}
                   <Calendar
                    inputId={leaseDetail.field_10.id}
                    name={leaseDetail.field_10.id}
                    onChange={formik.handleChange}
                    value={formik.values[leaseDetail.field_10.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={leaseDetail.field_10.id}>
                    {leaseDetail.field_10.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item12 w-100-3 position-relative ${
                  formik.touched[leaseDetail.field_11.id] &&
                  formik.errors[leaseDetail.field_11.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <div className="d-flex align-items-center flex-nowrap gap-4">
                  <p>{leaseDetail.field_11.label}</p>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_11.option[0].id}
                      name={leaseDetail.field_11.id}
                      value="yes"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_11.id] === "yes"
                      }
                    />
                    <label htmlFor={leaseDetail.field_11.option[0].id} className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId={leaseDetail.field_11.option[1].id}
                      name={leaseDetail.field_11.id}
                      value="no"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[leaseDetail.field_11.id] === "no"
                      }
                    />
                    <label htmlFor={leaseDetail.field_11.option[1].id} className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <Button
                text
                label="Add Lease Signed Contract Document"
                className="text-black gap-2"
                type="button"
                icon={() => <Img name="upload" />}
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
        <Checkbox inputId="accept" name="accept" onChange={e => setChecked(e.checked)} checked={checked} />
        <label htmlFor="accept" className="ml-2">By Accepting , It is Confirmed that documents are verified and lease contract is signed to create a medallion </label>
    </div>
        <Button
          label="Submit"
          severity="warning"
          className="border-radius-0 primary-btn"
        />
      </form>
    </div>
  )
}

export default LeaseDetail