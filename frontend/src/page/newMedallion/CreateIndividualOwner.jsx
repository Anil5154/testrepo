import { useFormik } from "formik";
import Img from "../../components/Img";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const CreateIndividualOwner = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <p className="sec-topic">Create Individual Owner</p>
      <form action="" className="common-form d-flex flex-column gap-5" onSubmit={formik.handleSubmit}>
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
            <div className="form-grid-1 w-75">
              <div className="item1">
                <FloatLabel>
                  <InputText
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="firstName">First Name <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item2">
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
              <div className="item3">
                <FloatLabel>
                  <InputText
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="lastName">Last Name <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item4">
                <FloatLabel>
                  <InputText
                    id="ssn"
                    onChange={formik.handleChange}
                    value={formik.values.ssn}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="ssn">SSN <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item5">
                <FloatLabel>
                  <InputText
                    id="dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="dob">D.O.B <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item6">
                <FloatLabel>
                  <InputText
                    id="passportExpiry"
                    onChange={formik.handleChange}
                    value={formik.values.passportExpiry}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="passportExpiry">Passport Expiry Date <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
            <Button
            text
            label="Upload Documents"
            className="text-black gap-2"
            icon={(options) => (
              <Img name="upload"/>
            )}
          />
            <Button
            text
            label="Add joint Owner"
            className="text-black gap-2"
            icon={(options) => (
              <Img name="upload"/>
            )}
          />
            </div>
          </div>
        </div>
        <div className="form-section">
          <div
            className="d-flex align-items-center
                 justify-content-between form-sec-header"
          >
            <div className="topic">
              <Img name="personal"></Img> Primary Address
            </div>
          </div>
          <div className="form-body">
            <div className="form-grid-1 w-75">
              <div className="item1">
                <FloatLabel>
                  <InputText
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="firstName">First Name <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item2">
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
              <div className="item3">
                <FloatLabel>
                  <InputText
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="lastName">Last Name <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item4">
                <FloatLabel>
                  <InputText
                    id="ssn"
                    onChange={formik.handleChange}
                    value={formik.values.ssn}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="ssn">SSN <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item5">
                <FloatLabel>
                  <InputText
                    id="dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="dob">D.O.B <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
              <div className="item6">
                <FloatLabel>
                  <InputText
                    id="passportExpiry"
                    onChange={formik.handleChange}
                    value={formik.values.passportExpiry}
                    className="rounded-0 border-0 ps-0 bg-transparent text-field w-100"
                  />
                  <label htmlFor="passportExpiry">Passport Expiry Date <span className="require-star">*</span></label>
                </FloatLabel>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
            <Button
            text
            label="Upload Documents"
            className="text-black gap-2"
            icon={(options) => (
              <Img name="upload"/>
            )}
          />
            <Button
            text
            label="Add joint Owner"
            className="text-black gap-2"
            icon={(options) => (
              <Img name="upload"/>
            )}
          />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


export default CreateIndividualOwner;
