export const createIndividualOwner={
   field_01:{
    id:"firstName",
    label:"First Name"
   },
}

export const medallionDetail={
    field_01:{
        id:"medallionNumber",
        label:"Medallion Number"
    },
    field_02:{
        id:"medallionType",
        label:"Medallion Type",
        options:[
            { name: 'WAV', code: 'WAV' },
            { name: 'Regular', code: 'regular' },
        ]
    },
    field_03:{
        id:"lastRenewalDate",
        label:"Last Renewal Date"
    },
    field_04:{
        id:"validFrom ",
        label:"Valid From "
    },
    field_05:{
        id:"validTo ",
        label:"Valid To "
    },
    field_06:{
        id:"renewalReceipt",
        label:"Renewal Receipt"
    },
    field_07:{
        id:"storage",
        label:"Storage",
    },
    field_08:{
        id:"FS6Status",
        label:"FS6 Status",
    },
    field_09:{
        id:"FS6UpdateDate",
        label:"FS6 Update Date",
    },
    field_10:{
        id:"FS6Document",
        label:"FS6 Document",
    },
    field_11:{
        id:"agentName",
        label:"Agent Name",
    },
    field_12:{
        id:"agentNumber",
        label:"Agent Number",
    },
    field_13:{
        id:"firstSignedDate",
        label:"First Signed Date",
    },
    field_14:{
        id:"amount",
        label:"Amount",
    },
}
export const leaseDetail={
    field_01:{
        id:"merchantName",
        label:"Merchant Name"
    },
    field_02:{
        id:"Merchant Bank",
        label:"Merchant Bank",
    },
    field_03:{
        id:"contractStartDate",
        label:"Contract Start Date"
    },
    field_04:{
        id:"contractEndDate",
        label:"Contract End Date"
    },
    field_05:{
        id:"contract ",
        label:"Contract",
        options:[
            { name: 'WAV', code: 'WAV' },
            { name: 'Regular', code: 'regular' },
        ]
    },
    field_06:{
        id:"Mail Sent Date",
        label:"Mail Sent Date"
    },
    field_07:{
        id:"Mail Received Date",
        label:"Mail Received Date",
    },
    field_08:{
        id:"in-House",
        label:"In-House",
        option:[
            {id:"inHouseYes",label:"Yes"},
            {id:"inHouseNo",label:"No"}
        ]
    },
    field_09:{
        id:"leaseSigned",
        label:"Lease Signed",
        option:[
            {id:"leaseSignedYes",label:"Yes"},
            {id:"leaseSignedNo",label:"No"}
        ]
    },
    field_10:{
        id:"leaseSignedDate",
        label:"Lease Signed Date",
    },
    field_11:{
        id:"medallionActiveExemption",
        label:"Medallion Active Exemption",
        option:[
            {id:"medallionActiveExemptionYes",label:"Yes"},
            {id:"medallionActiveExemptionNo",label:"No"}
        ]
    }
}

export const chooseMedallionOwner={
    field_01:{
        id:"medallionOwnerName",
        label:"Medallion Owner Name"
    },
    field_02:{
        id:"SSN",
        label:"SSN"
    },
    field_03:{
        id:"EIN",
        label:"EIN"
    },
}