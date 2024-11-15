import { FloatLabel } from "primereact/floatlabel";
import Img from "../../components/Img";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { chooseMedallionOwner } from "../../utils/variables";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
// import { splitFileName } from "../../utils/splitFileName";

const ChooseMedallion = () => {
  const formik = useFormik({
    initialValues: {
      merchantName: "",
      merchantBank: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [selectedProducts, setSelectedProducts] = useState(null);

  const data = [
    {
      id: "1000",
      managementName: "Royalty Agreement Individual.pdf",
      ssn: "10/25/2027",
      ownerName: "2MB",
      comments: "Lease Agreement is signed by Richard ",
    },
  ];

  const deleteTemplete = () => {
    return <Button text
    icon={() => (
      <Img name="delete"></Img>
    )}
  />;
  };

  // const documentName=(data) => {
  //    const [,extension] = splitFileName(data.documentName);
  //    const img=extension=="pdf"?"pdf":"img"
  //    return <div className="d-flex align-items-center gap-2 doc-img"><Img name={img}></Img><p>{data.documentName}</p></div>
  // }
  return (
    <div>
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
          </div>
          <div className="form-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-wrap form-grid-1 w-75">
              <div className={`item1 w-100-3 position-relative`}>
                <FloatLabel>
                  <InputText
                    id={chooseMedallionOwner.field_01.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[chooseMedallionOwner.field_01.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={chooseMedallionOwner.field_01.id}>
                    {chooseMedallionOwner.field_01.label}
                  </label>
                </FloatLabel>
              </div>
              <div className="item2 w-100-3 position-relative">
                <FloatLabel>
                  <InputText
                    id={chooseMedallionOwner.field_02.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[chooseMedallionOwner.field_02.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={chooseMedallionOwner.field_02.id}>
                    {chooseMedallionOwner.field_02.label}{" "}
                  </label>
                </FloatLabel>
              </div>
              <div className={`item3 w-100-3 position-relative`} >
                <FloatLabel>
                  <InputText
                    id={chooseMedallionOwner.field_03.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[chooseMedallionOwner.field_03.id]}
                    className={`rounded-0 border-0 ps-0 bg-transparent text-field w-100`}
                  />
                  <label htmlFor={chooseMedallionOwner.field_03.id}>
                    {chooseMedallionOwner.field_03.label}{" "}
                  </label>
                </FloatLabel>
              </div>
            </div>
            <Button
          label="Search"
          severity="warning"
          className="border-radius-0 primary-btn"
        />
            <Button
          text
          icon={()=>{
            return <Img name="upload" className="rotate-45"></Img>
          }}
        />
          </div>
        </div>
      </form>
      <DataTable
        value={data}
        className="primary-table"
        selectionMode={ "checkbox" }
        selection={selectedProducts}
        showGridlines={true}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="managementName" header="Management Name" ></Column>
        <Column field="ssn" header="SSN/EIN"></Column>
        <Column field="ownerName" header="Owner Name"></Column>
        <Column field="contact" header="Contact"></Column>
        <Column field="status" header="Status" body={deleteTemplete}></Column>
      </DataTable>
    </div>
  );
};

export default ChooseMedallion;
