"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Download,
  User,
  Phone,
  CheckCircle,
  X,
  Loader2,
  ChevronDown,
  Building2,
  Mail,
} from "lucide-react";

import { jsPDF } from "jspdf";

import autoTable from "jspdf-autotable";

const QuotationGenerator = () => {
  const [items, setItems] = useState([
    {
      description: "",
      quantity: 1,
      rate: 0,
    },
  ]);

  const [clientName, setClientName] = useState("");

  const [clientMobile, setClientMobile] = useState("");

  const [clientEmail, setClientEmail] = useState("");

  const [companyName, setCompanyName] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const serviceCategories = {
    Networking: [
      {
        name: "Structured Cabling",
        rate: 850,
      },

      {
        name: "WiFi Access Point Setup",
        rate: 3500,
      },
    ],

    CCTV: [
      {
        name: "IP Camera Installation",
        rate: 1200,
      },

      {
        name: "NVR Configuration",
        rate: 15000,
      },
    ],

    Licensing: [
      {
        name: "Windows 11 Pro License",
        rate: 12500,
      },

      {
        name: "Microsoft 365 Business",
        rate: 6600,
      },
    ],
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.quantity * item.rate,
    0
  );

  const gst = subtotal * 0.18;

  const total = subtotal + gst;

  const addItem = () => {
    setItems([
      ...items,
      {
        description: "",
        quantity: 1,
        rate: 0,
      },
    ]);
  };

  const addServiceFromDropdown = (e: any) => {
    const val = JSON.parse(e.target.value);

    if (
      items.length === 1 &&
      items[0].description === "" &&
      items[0].rate === 0
    ) {
      setItems([
        {
          description: val.name,
          quantity: 1,
          rate: val.rate,
        },
      ]);
    } else {
      setItems([
        ...items,
        {
          description: val.name,
          quantity: 1,
          rate: val.rate,
        },
      ]);
    }
  };

  const handleGenerate = async () => {
    if (!clientName || !clientMobile || subtotal === 0) return;

    setIsGenerating(true);

    try {
      const doc = new jsPDF();

      const quoteNo = `QT-${new Date()
        .getFullYear()
        .toString()}-${Date.now().toString().slice(-5)}`;

      // HEADER
      doc.setFillColor(51, 204, 204);

      doc.rect(0, 0, 210, 35, "F");

      doc.setTextColor(255, 255, 255);

      doc.setFontSize(24);

      doc.setFont("helvetica", "bold");

      doc.text("SOFTLINK SOLUTIONS", 14, 18);

      doc.setFontSize(10);

      doc.text("Enterprise IT Infrastructure Solutions", 14, 25);

      // COMPANY INFO
      doc.setTextColor(60, 60, 60);

      doc.setFontSize(10);

      doc.text("Phone: +91 98765 43210", 14, 45);

      doc.text("Email: info@softlink.com", 14, 51);

      doc.text("GSTIN: 27ABCDE1234F1Z5", 14, 57);

      // QUOTE INFO
      doc.setFont("helvetica", "bold");

      doc.text("QUOTATION", 150, 45);

      doc.setFont("helvetica", "normal");

      doc.text(`Quote No: ${quoteNo}`, 150, 52);

      doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 58);

      // CLIENT INFO
      doc.setFillColor(245, 245, 245);

      doc.rect(14, 70, 182, 28, "F");

      doc.setFont("helvetica", "bold");

      doc.text("CLIENT DETAILS", 18, 78);

      doc.setFont("helvetica", "normal");

      doc.text(`Name: ${clientName}`, 18, 86);

      doc.text(`Phone: +91 ${clientMobile}`, 18, 92);

      doc.text(`Email: ${clientEmail}`, 110, 86);

      doc.text(`Company: ${companyName}`, 110, 92);

      // TABLE
      const tableData = items.map((item, index) => [
        index + 1,
        item.description,
        item.quantity,
        `₹ ${item.rate.toLocaleString()}`,
        `₹ ${(item.quantity * item.rate).toLocaleString()}`,
      ]);

      autoTable(doc, {
        startY: 108,

        head: [["Sr", "Description", "Qty", "Rate", "Amount"]],

        body: tableData,

        headStyles: {
          fillColor: [51, 204, 204],
        },

        styles: {
          fontSize: 10,
        },
      });

      const finalY = (doc as any).lastAutoTable.finalY + 15;

      // TOTALS
      doc.setFont("helvetica", "normal");

      doc.text(`Subtotal: ₹ ${subtotal.toLocaleString()}`, 140, finalY);

      doc.text(`GST (18%): ₹ ${gst.toLocaleString()}`, 140, finalY + 8);

      doc.setFont("helvetica", "bold");

      doc.setFontSize(14);

      doc.setTextColor(51, 204, 204);

      doc.text(`Grand Total: ₹ ${total.toLocaleString()}`, 140, finalY + 18);

      // TERMS
      doc.setTextColor(60, 60, 60);

      doc.setFontSize(10);

      doc.setFont("helvetica", "bold");

      doc.text("Terms & Conditions", 14, finalY + 40);

      doc.setFont("helvetica", "normal");

      doc.text("• Quotation valid for 7 days", 14, finalY + 48);

      doc.text("• 50% advance payment required", 14, finalY + 55);

      doc.text("• Delivery within 5-7 working days", 14, finalY + 62);

      doc.text("• Warranty as per manufacturer policy", 14, finalY + 69);

      // SIGNATURE
      doc.line(145, finalY + 78, 190, finalY + 78);

      doc.text("Authorized Signature", 148, finalY + 85);

      doc.save(`Quotation_${clientName}.pdf`);

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <h2 className="text-4xl font-black text-white">
                Generate <span className="text-[#33CCCC]">Quotation</span>
              </h2>

              <p className="mt-4 text-slate-400">
                Create professional quotations instantly.
              </p>

              {/* CLIENT INFO */}
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    placeholder="Client Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full h-14 rounded-2xl border border-white/10 bg-slate-900 pl-14 pr-5 text-white outline-none focus:border-[#33CCCC]"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={clientMobile}
                    onChange={(e) => setClientMobile(e.target.value)}
                    className="w-full h-14 rounded-2xl border border-white/10 bg-slate-900 pl-14 pr-5 text-white outline-none focus:border-[#33CCCC]"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full h-14 rounded-2xl border border-white/10 bg-slate-900 pl-14 pr-5 text-white outline-none focus:border-[#33CCCC]"
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full h-14 rounded-2xl border border-white/10 bg-slate-900 pl-14 pr-5 text-white outline-none focus:border-[#33CCCC]"
                  />
                </div>
              </div>
            </div>

            {/* ITEMS */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white">
                  Services & Products
                </h3>

                <div className="relative">
                  <select
                    onChange={addServiceFromDropdown}
                    className="appearance-none rounded-2xl bg-[#33CCCC] px-6 py-3 pr-12 text-sm font-semibold text-white outline-none"
                  >
                    <option value="">Quick Add Service</option>

                    {Object.entries(serviceCategories).map(([category, list]) => (
                      <optgroup key={category} label={category}>
                        {list.map((service, index) => (
                          <option
                            key={index}
                            value={JSON.stringify(service)}
                          >
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-slate-900 p-5"
                  >
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => {
                        const updated = [...items];

                        updated[index].description = e.target.value;

                        setItems(updated);
                      }}
                      className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
                    />

                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const updated = [...items];

                        updated[index].quantity = parseInt(e.target.value) || 0;

                        setItems(updated);
                      }}
                      className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
                    />

                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => {
                        const updated = [...items];

                        updated[index].rate = parseInt(e.target.value) || 0;

                        setItems(updated);
                      }}
                      className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
                    />

                    <button
                      onClick={() =>
                        setItems(items.filter((_, i) => i !== index))
                      }
                      className="rounded-2xl bg-red-500/10 text-red-500"
                    >
                      <X className="mx-auto" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={addItem}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#33CCCC] px-6 py-3 font-semibold text-white"
              >
                <Plus size={18} /> Add Item
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="sticky top-24 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-black text-white">
                Summary
              </h3>

              <div className="mt-10 space-y-5">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Subtotal</span>

                  <span>₹ {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>GST (18%)</span>

                  <span>₹ {gst.toLocaleString()}</span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-white">
                    Total
                  </span>

                  <span className="text-3xl font-black text-[#33CCCC]">
                    ₹ {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!clientName || !clientMobile || subtotal === 0}
                className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] font-semibold text-white transition hover:bg-[#2EB8B8] disabled:opacity-50"
              >
                {isGenerating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Download size={18} />
                )}

                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="w-full max-w-sm rounded-[40px] border border-white/10 bg-slate-950 p-10 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckCircle size={40} />
              </div>

              <h3 className="mt-6 text-3xl font-black text-white">
                PDF Downloaded
              </h3>

              <p className="mt-3 text-slate-400">
                Your quotation has been generated successfully.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuotationGenerator;