import { hello_backend } from "../../declarations/hello_backend";

const apiUrl = "https://lite.invoicemate.net/lite/hlf/invoice/get-all";

async function fetchData() {
  try {
    // Make a GET request to the API
    const response = await fetch(apiUrl);

    // Check if the response is successful (status code 200)
    if (response.ok) {
      // Parse the response JSON
      const data = await response.json();
      // Process the data here (e.g., display it in the console)
      return data;
      // console.log(data);
    } else {
      // Handle the error if the response status is not 200
      console.error("Error fetching data:", response.status);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("An error occurred:", error);
  }
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);
  // console.log(name);
  // Interact with foo actor, calling the greet method
  const greeting = await hello_backend.QueryInvoice(name);
  // console.log(greeting);
  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});

document.getElementById("mybtn").addEventListener("click", async (e) => {
  e.preventDefault();
  // Your JavaScript code here
  const InvoiceData = await fetchData();
  console.log(InvoiceData[0]);

  // Create an instance of the Invoice record type
  const data2 = {
    ack: true,
    action: "Finance",
    client_email: "im2021@mailinator.com",
    client_first_name: "ajskajs111",
    client_last_name: "jasas22",
    client_mobile_number: "+971327362736723",
    creation_date: "2023-09-18T09:08:39.090Z",
    currency: { _id: "PKR", symbol: "PKR", code: "PKR", type: "Fiat" },
    delete_comments: "",
    draft: false,
    due_date: "2023-09-29T19:00:00.000Z",
    finance: true,
    financing_details: ["091fec9b-79db-42f9-937a-f20571642de8"],
    fund_reception: "xyzabc",
    invoice_id: "INV-4",
    lines: "aysw6j",
    mongo_id: "65081bb9e133f757ebe8a59f",
    net_amt: "87800",
    paid: false,
    invoice_type: "amg8oop",
    payment_confirmation: false,
    previous_invoice_hash:
      "969980454e1e352e067d35a2edee4d93d2296e24959da9a7a90ef3aa11b520cf",
    // received_invoice_deleted: false,
    rejected: false,
    sent_invoice_deleted: false,
    timestamp: "Mon Sep 18 2023 14:44:18 GMT+0500 (Pakistan Standard Time)",
    tracking: { subject: "", status: "", msg_id: "", to: "", api_key_id: "" },
    txn_hash:
      "f37911cd71dfbdaf0f825f8dd8e3f23ae926b03559a1564d4a33f9bb592d46e8",
    vendor_email: "im2084@mailinator.com",
    vendor_email_hash:
      "b6d26d46d621f398820b45cfa45a19a0e93df8994f62706201cb3bee3c079861",
    vendor_id: "6502b9ed466280c5a5aaa2ef",
    vendor_mobile_number: "+924564564547",
    vendor_mobile_number_hash:
      "8ae6b04cfc2b18be0353194061a42e3bc7e8afaae1184ed56719ee31b52ba534",
    vendor_name: "yaay jahskja",
    voided: false,
  };

  const data3 = {
    ack: false,
    action: "mn9fxj",
    received_invoice_deleted: true,
    finance: true,
    fund_reception: "tiz8ogh",
    invoice_id: "ysmf7zr",
    vendor_mobile_number: "cep8l8n",
    net_amt: "dgb93zb",
    paid: false,
    financing_details: ["091fec9b-79db-42f9-937a-f20571642de8"],
    sent_invoice_deleted: true,
    client_mobile_number: "6nx9yb",
    txn_hash: "zpeodix",
    invoice_type: "amg8oop",
    voided: false,
    lines: "87wxjx",
    tracking: {
      to: "17rkohr",
      status: "vzog6g",
      msg_id: "zn8neeh",
      subject: "ke926nn",
      api_key_id: "4ngvpp",
      events: "q9br1xc",
    },
    payment_confirmation: true,
    currency: "88uz72l",
    previous_invoice_hash: "uwsta8p",
    timestamp: "awbtwqn",
    delete_comments: "4grgtnd",
    rejected: true,
    due_date: "a0gsy6n",
    client_email: "ib33ui",
    client_first_name: "pittk5",
    vendor_mobile_number_hash: "06kvczk",
    vendor_name: "k7yu0ng",
    vendor_id: "faa27jo",
    draft: false,
    vendor_email: "japz26",
    vendor_email_hash: "0in9uor",
    mongo_id: "gybcyyj",
    client_last_name: "3ij0mv",
    creation_date: "wanki5",
  };

  const data4 = {
    // Ack: false,
    // Action: "Creation",
    ClientEmail: "yrbemail1911@mailinator.com",
    ClientFristName: "yaraib",
    ClientLastName: "emailll",
    ClientMobileNumber: "",
    CreationDate: "2023-09-25T11:36:08.269Z",
    Currency: { _id: "PKR", symbol: "PKR", code: "PKR", type: "Fiat" },
    DeleteComments: "",
    Draft: false,
    DueDate: "2023-09-29T07:00:00.000Z",
    // Finance: false,
    FinancingDetails: [],
    FundReception: {
      accountNumber: "+923357272392",
      accountName: "ahmad",
      type: "easyPaisa",
    },
    InvoiceId: "INV-83",
    Lines: [
      {
        additionalDetails: "",
        amount: "100",
        discount: "0",
        isDiscountPercent: true,
        isTaxPercentage: true,
        item: "silver plan",
        quantity: "1",
        quantityUnit: "Pcs",
        tax: "0",
        unitPrice: "100",
        _id: "651170c15e6b723b1b33f250",
      },
    ],
    MongoId: "651170c15e6b721ab933f24d",
    NetAmt: "100",
    Paid: false,
    PaymentConfirmation: false,
    PreviousInvoiceHash:
      "8f1e26f78fc3acb0e73a0c0f0bdc625ebd391bf49bdafdac88b040d1cf841e4b",
    ReceivedInvoiceDeleted: false,
    Rejected: false,
    SentInvoiceDeleted: false,
    TimeStamp: "Mon Sep 25 2023 16:36:36 GMT+0500 (Pakistan Standard Time)",
    Tracking: { Subject: "", Status: "", MsgId: "", To: "", ApiKeyId: "" },
    TxnHash: "75d4cc3e2a6bf7caedd8695847902dfdefda7ac0d22088637b8b2d22f309df23",
    Type: "Invoice",
    VendorEmail: "ahmadansari1122@mailinator.com",
    VendorEmailHash:
      "bc8b3d0f4b33283f6c90b2bd892a05dc25a1a8afd4f33ab65eefbff6d5e2fbae",
    VendorId: "63d8b99bf6ee8ffe038dc0dd",
    VendorMobileNumber: "+923357272392",
    VendorMobileNumberHash:
      "728cfc807a78a77064411e9383e296d40ab1d44384d3b8682467eb68eaf78f02",
    VendorName: "ahmad amir",
    Voided: false,
  };
  const data5 = {
    Ack: false,
    Action: "Creation",
    ClientEmail: "yrbemail1911@mailinator.com",
    ClientFristName: "yaraib",
    ClientLastName: "emailll",
    ClientMobileNumber: "",
    CreationDate: "2023-09-25T11:36:08.269Z",
    Currency: { _id: "PKR", symbol: "PKR", code: "PKR", type: "Fiat" },
    DeleteComments: "",
    Draft: false,
    DueDate: "2023-09-29T07:00:00.000Z",
    Finance: false,
    FinancingDetails: [],
    FundReception: {
      accountNumber: "+923357272392",
      accountName: "ahmad",
      type: "easyPaisa",
    },
    InvoiceId: "INV-83",
    Lines: [
      {
        additionalDetails: "",
        amount: "100",
        discount: "0",
        isDiscountPercent: true,
        isTaxPercentage: true,
        item: "silver plan",
        quantity: "1",
        quantityUnit: "Pcs",
        tax: "0",
        unitPrice: "100",
        _id: "651170c15e6b723b1b33f250",
      },
    ],
    MongoId: "651170c15e6b721ab933f24d",
    NetAmt: "100",
    Paid: false,
    PaymentConfirmation: false,
    PreviousInvoiceHash:
      "8f1e26f78fc3acb0e73a0c0f0bdc625ebd391bf49bdafdac88b040d1cf841e4b",
    ReceivedInvoiceDeleted: false,
    Rejected: false,
    SentInvoiceDeleted: false,
    TimeStamp: "Mon Sep 25 2023 16:36:36 GMT+0500 (Pakistan Standard Time)",
    Tracking: { Subject: "", Status: "", MsgId: "", To: "", ApiKeyId: "" },
    TxnHash: "75d4cc3e2a6bf7caedd8695847902dfdefda7ac0d22088637b8b2d22f309df23",
    Type: "Invoice",
    VendorEmail: "ahmadansari1122@mailinator.com",
    VendorEmailHash:
      "bc8b3d0f4b33283f6c90b2bd892a05dc25a1a8afd4f33ab65eefbff6d5e2fbae",
    VendorId: "63d8b99bf6ee8ffe038dc0dd",
    VendorMobileNumber: "+923357272392",
    VendorMobileNumberHash:
      "728cfc807a78a77064411e9383e296d40ab1d44384d3b8682467eb68eaf78f02",
    VendorName: "ahmad amir",
    Voided: false,
  };

  // Call the CreateInvoice function with the invoice data
  // CreateInvoice(invoice);

  for (let i = 0; i < InvoiceData.length; i++) {
    const invoice = InvoiceData[i];
    // await hello_backend.CreateInvoice(invoice);
    console.log(`Processing invoice ${i + 1}:`, invoice);
  }

  await hello_backend.CreateInvoice(data3);
});
