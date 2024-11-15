import { Button } from "primereact/button";
import Img from "../../components/Img";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import { medallionDetail } from "../../utils/variables";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";

const MedallionDetail = () => {
  const ownerDetail = [
    {
      label: "Medallion Owner Name",
      value: "jose Smith",
    },
    {
      label: "SSN",
      value: "XXX-XX-5678",
    },
    {
      label: "MVL",
      value: "MVL2024.img",
    },
    {
      label: "Passport",
      value: "A12345678",
    },
    {
      label: "Contact",
      value: "(212) 695-0601 | john@outlook.com ",
    },
  ];
  const formik = useFormik({
    initialValues: {
      [medallionDetail.field_01.id]: "",
      [medallionDetail.field_02.id]: "",
      [medallionDetail.field_03.id]: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="topic-txt d-flex align-items-center gap-2">
        <Img name="medallion" className="icon-black"></Img>Enter Medallion Details
      </div>
      <div className="d-flex align-items-center gap-5 py-4 ps-4">
        {ownerDetail.map(({ label, value }, idx) => {
          return (
            <div key={idx}>
              <p className="text-grey mb-0">{label}</p>
              <p className="regular-semibold-text">{value}</p>
            </div>
          );
        })}
      </div>
      <p className="text-require d-flex ms-auto w-max-content">
        {" "}
        (Required fields are marked with <span className="require-star">*</span>
        ){" "}
      </p>
      <form
        action=""
        className="common-form d-flex flex-column gap-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-section">
          <div className="form-body">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-75">
              <div
                className={`item1 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_01.id] &&
                  formik.errors[medallionDetail.field_01.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_01.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[medallionDetail.field_01.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_01.id}>
                    {medallionDetail.field_01.label}{" "}
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched[medallionDetail.field_01.id] &&
                formik.errors[medallionDetail.field_01.id] ? (
                  <div className="error-msg">
                    {formik.errors[medallionDetail.field_01.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item2 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_02.id] &&
                  formik.errors[medallionDetail.field_02.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Dropdown
                    options={medallionDetail.field_02.options}
                    optionLabel="name"
                    placeholder={`Select a ${medallionDetail.field_02.label}`}
                    id={medallionDetail.field_02.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[medallionDetail.field_02.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor="middletName">
                    {medallionDetail.field_02.label}
                    <span className="require-star">*</span>
                  </label>
                </FloatLabel>
                {formik.touched[medallionDetail.field_02.id] &&
                formik.errors[medallionDetail.field_02.id] ? (
                  <div className="error-msg">
                    {formik.errors[medallionDetail.field_02.id]}
                  </div>
                ) : null}
              </div>
              <div className="item3 w-100-3"></div>
              <div
                className={`item4 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_03.id] &&
                  formik.errors[medallionDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={medallionDetail.field_03.id}
                    name={medallionDetail.field_03.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_03.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={medallionDetail.field_03.id}>
                    {medallionDetail.field_03.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item5 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_03.id] &&
                  formik.errors[medallionDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={medallionDetail.field_04.id}
                    name={medallionDetail.field_04.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[medallionDetail.field_04.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={medallionDetail.field_04.id}>
                    {medallionDetail.field_04.label}
                  </label>
                </FloatLabel>
                {formik.touched[medallionDetail.field_04.id] &&
                formik.errors[medallionDetail.field_04.id] ? (
                  <div className="error-msg">
                    {formik.errors[medallionDetail.field_04.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item6 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_03.id] &&
                  formik.errors[medallionDetail.field_03.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={medallionDetail.field_05.id}
                    name={medallionDetail.field_05.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[medallionDetail.field_05.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={medallionDetail.field_05.id}>
                    {medallionDetail.field_05.label}
                  </label>
                </FloatLabel>
                {formik.touched[medallionDetail.field_05.id] &&
                formik.errors[medallionDetail.field_05.id] ? (
                  <div className="error-msg">
                    {formik.errors[medallionDetail.field_05.id]}
                  </div>
                ) : null}
              </div>
              <div
                className={`item7 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_06.id] &&
                  formik.errors[medallionDetail.field_06.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_06.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_06.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_06.id}>
                    {medallionDetail.field_06.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item8 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_07.id] &&
                  formik.errors[medallionDetail.field_07.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <div className="d-flex align-items-center flex-wrap gap-4">
                  <p>Storage</p>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId="ingredient1"
                      name={medallionDetail.field_07.id}
                      value="yes"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[medallionDetail.field_07.id] === "yes"
                      }
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <RadioButton
                      inputId="ingredient2"
                      name={medallionDetail.field_07.id}
                      value="no"
                      onChange={formik.handleChange}
                      checked={
                        formik.values[medallionDetail.field_07.id] === "no"
                      }
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={`item9 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_08.id] &&
                  formik.errors[medallionDetail.field_08.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_08.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_08.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_08.id}>
                    {medallionDetail.field_08.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item10 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_09.id] &&
                  formik.errors[medallionDetail.field_09.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={medallionDetail.field_09.id}
                    name={medallionDetail.field_09.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_09.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={medallionDetail.field_09.id}>
                    {medallionDetail.field_09.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item11 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_10.id] &&
                  formik.errors[medallionDetail.field_10.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_10.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_10.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_10.id}>
                    {medallionDetail.field_10.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item12 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_11.id] &&
                  formik.errors[medallionDetail.field_11.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_11.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_11.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_11.id}>
                    {medallionDetail.field_11.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item13 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_12.id] &&
                  formik.errors[medallionDetail.field_12.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_12.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_12.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_12.id}>
                    {medallionDetail.field_12.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item14 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_13.id] &&
                  formik.errors[medallionDetail.field_13.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <Calendar
                    inputId={medallionDetail.field_13.id}
                    name={medallionDetail.field_13.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_13.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent calendar-field w-100`}
                    showIcon
                    showButtonBar
                    readOnlyInput
                    icon={() => <Img name="calendar" />}
                  />
                  <label htmlFor={medallionDetail.field_13.id}>
                    {medallionDetail.field_13.label}
                  </label>
                </FloatLabel>
              </div>
              <div
                className={`item14 w-100-3 position-relative ${
                  formik.touched[medallionDetail.field_14.id] &&
                  formik.errors[medallionDetail.field_14.id]
                    ? "text-danger-con"
                    : ""
                }`}
              >
                <FloatLabel>
                  <InputText
                    id={medallionDetail.field_14.id}
                    onChange={formik.handleChange}
                    value={formik.values[medallionDetail.field_14.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={medallionDetail.field_14.id}>
                    {medallionDetail.field_14.label}
                  </label>
                </FloatLabel>
              </div>
            </div>
          </div>
        </div>
        <Button
          label="Submit"
          severity="warning"
          className="border-radius-0 primary-btn"
        />
      </form>
    </div>
  );
};

export default MedallionDetail;
