const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    invoiceNo: {
      type: String,
      required: true,
    },
    InvoiceDate: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    deliveryType: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    checqueDetails: {
      type: String,
    },
    cashamount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const sales = new mongoose.model("sales", salesSchema);

module.exports = sales;
