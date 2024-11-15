import { Button } from "primereact/button";
import Img from "../../components/Img";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { splitFileName } from "../../utils/splitFileName";

const CreatePacket = () => {
  const [selectedProducts, setSelectedProducts] = useState(null);

  const data = [
    {
      id: "1000",
      documentName: "Royalty Agreement Individual.pdf",
      documentDate: "10/25/2027",
      fileSize: "2MB",
      comments: "Lease Agreement is signed by Richard ",
    },
    {
      id: "1001",
      documentName: "SSN.png",
      documentDate: "10/25/2027",
      fileSize: "1MB",
      comments: "SSN image could be in better clarity",
    },
  ];

  const deleteTemplete = () => {
    return <Button text
    icon={() => (
      <Img name="delete"></Img>
    )}
  />;
  };

  const documentName=(data) => {
     const [,extension] = splitFileName(data.documentName);
     const img=extension=="pdf"?"pdf":"img"
     return <div className="d-flex align-items-center gap-2 doc-img"><Img name={img}></Img><p>{data.documentName}</p></div>
  }

  return (
    <div>
        <Button
          outlined
          label="Upload Documents"
          className="text-black gap-2 outline-btn fs-16-semibold d-flex ms-auto"
          type="button"
          icon={() => <Img name="uploaddoc" />}
        />
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
        <Column field="documentName" header="Document Name" body={documentName}></Column>
        <Column field="documentDate" header="Document Date"></Column>
        <Column field="fileSize" header="File Size"></Column>
        <Column field="comments" header="Comments"></Column>
        <Column field="" header="" body={deleteTemplete}></Column>
      </DataTable>

      <Button label="Submit" severity="warning" className='border-radius-0 primary-btn mt-5' />
    </div>
  );
};

export default CreatePacket;