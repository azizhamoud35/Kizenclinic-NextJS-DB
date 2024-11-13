import './index.css';
import React, { useState } from 'react';
import { ChevronDown, Printer, Search, MessageCircle, Calculator, DollarSign, Share2, Clock, Calendar, X, Plus, Tag, User, Globe, Lock, Settings, ShoppingBag, BarChart2, FileText, Building2, Heart, Users, Hourglass, Eye, Layers, MessageSquare, Save, Send, PenTool, Image, File, CreditCard, MoreVertical } from 'lucide-react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

const CustomIcon = ({ d, size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none">
    <path d={d} />
  </svg>
);

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <span className="cursor-pointer">{title}</span>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg z-10">
          {items.map((item, index) => (
            <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TopMenuBar = () => {
  const menuItems = {
    basicData: ["Clinics data", "Doctors", "Users and roles", "VAT management", "Set patient consultation", "Works and services", "Offers and discounts", "Categories expenses", "Update Ready Notes", "Design Custom Report", "Design Clinics Forms", "Basic data"],
    medicalFile: ["Patients statistics", "Patient balances and totals", "Medicine tree", "Patients visits", "External customers files", "Occupational Exam", "Agents And Drivers Exam", "Employment examination", "Custom Reports", "Medical Reports", "Prescriptions", "Patients in clinics", "Documents management", "Blocked files", "Patients notes"],
    accounting: ["مركز التقارير والاحصائيات", "Invoices services and Wroks", "Invoices", "Receipts", "Receipts chart", "Expenses", "Quotations / Temp Invoices", "Bank transactions", "Returns report", "VAT report for payment receipts", "Dental laboratories department", "Medical insurance", "Center revenue"],
    repositorys: ["Supplier information", "Repositorys List", "Repositorys items list", "New purchase invoices", "Open and edit purchase invoices", "Purchase invoices statistics", "Suppliers account statistics", "Repositorys transactions", "Repository assets", "Items has expiry dates", "Transport requests from the main repository"],
    administration: ["News bar texts", "Sequence forms", "Employees data", "Licensing data", "Dates nearing expiration", "Daily monitoring the movements of staff"],
    control: ["Set chat and notification", "Set current computer", "Set Kizen updater", "Set server connection settings", "Set date", "Set appointments", "Set sequence", "Set VAT", "Offers and discounts", "Set accounting", "Set EInvoice", "Set medical insurance system", "Set store", "Set administrative and employee settings", "Set printing paper", "Set patient's file", "Set medical file", "Set laboratory settings", "Set archives", "Set pharmacy settings", "Set company info", "Set other settings", "Backup"],
    sms: ["SMS policy", "Set SMS", "Set open file SMS", "Set appointment SMS", "Set analysis result SMS", "Set invoice payments SMS", "Set user notes SMS", "Set documents expired date SMS", "Set owner inform SMS", "ضبط رسالة التنبيه بانتهاء الرصيد", "Sms archive", "Sms report", "Sms ready texts", "Send Sms", "Send owner inform SMS", "Send message for all patients", "Send message patients by filters", "Balance Inquiry", "Charge SMS"],
    about: ["My Account", "Kizen programs policy of use", "About the system and license information", "Send Kizen purchase Request", "Kizen program tutorials", "Contact Technical Support", "Run the AnyDesk utility", "Run the TeamViewer utility", "Search for updates", "Updates logs"]
  };

  return (
    <div className="bg-gray-200 p-2 flex justify-between items-center">
      <div className="flex space-x-4">
        <DropdownMenu title="Basic data" items={menuItems.basicData} />
        <DropdownMenu title="Medical File" items={menuItems.medicalFile} />
        <DropdownMenu title="Accounting" items={menuItems.accounting} />
        <DropdownMenu title="Repositorys" items={menuItems.repositorys} />
        <DropdownMenu title="Administration" items={menuItems.administration} />
        <DropdownMenu title="Control" items={menuItems.control} />
        <DropdownMenu title="SMS" items={menuItems.sms} />
        <DropdownMenu title="About" items={menuItems.about} />
      </div>
      <div className="flex space-x-2">
        <Tooltip text="Language"><Globe size={16} /></Tooltip>
        <Tooltip text="Security"><Lock size={16} /></Tooltip>
        <Tooltip text="Settings"><Settings size={16} /></Tooltip>
      </div>
    </div>
  );
};

// SalesBillForm Component
const SalesBillForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0 0.25rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    background: '#f0f0f0',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  const inputStyle = {
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    width: '100%',
    fontSize: '0.875rem'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    paddingRight: '1.5rem',
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%23333\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E") no-repeat right 0.5rem center/0.75rem'
  };

  const iconButtonStyle = {
    ...buttonStyle,
    padding: '0.25rem',
    width: '2rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  const [tableRows, setTableRows] = useState([{ id: 0 }]);

  const addTableRow = () => {
    const newId = Math.max(...tableRows.map(row => row.id), 0) + 1;
    setTableRows([...tableRows, { id: newId }]);
  };

  const deleteTableRow = (idToDelete) => {
    setTableRows(tableRows.filter(row => row.id !== idToDelete));
  };

  // Define column widths as percentages
  const columnWidths = [
    '3%',    // Del.
    '6%',    // Code
    '6%',    // Source B.
    '18%',   // Service / Item (3x wider)
    '6%',    // Price
    '6%',    // Count
    '6%',    // Total
    '6%',    // Discount #
    '6%',    // Discount %
    '6%',    // Total Di...
    '7%',    // Net B. VAT
    '6%',    // VAT %
    '6%',    // VAT #
    '6%',    // Exemp...
    '6%',    // Net
    '2%'     // Plus icon column
  ];

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[1295px] h-[680px] overflow-auto relative">
        <div className="absolute top-2 right-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>A new sale Bill</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', flexGrow: 1 }}>
              {['Save - Print', 'Save - No print', 'Custom save', 'Discounts', 'Favorite', 'Offers'].map((text, index) => (
                <button key={index} style={buttonStyle}>{text}</button>
              ))}
            </div>
            <select style={{...selectStyle, width: 'auto', marginLeft: '0.5rem'}}>
              <option>المستودع الرئيسي</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input style={inputStyle} placeholder="Patient name" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="out" style={{ marginRight: '0.25rem' }} />
              <label htmlFor="out" style={{ fontSize: '0.875rem' }}>(out)</label>
            </div>
            <input style={inputStyle} placeholder="File No." />
            <select style={selectStyle}>
              <option>Doctor name</option>
            </select>
            <select style={selectStyle}>
              <option>Clinic</option>
            </select>
            <select style={selectStyle} defaultValue="admin">
              <option>admin</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
            <input style={inputStyle} type="datetime-local" defaultValue="2024-10-06T11:35" />
            <input style={inputStyle} placeholder="Note" />
            <input style={inputStyle} placeholder="Invoice No." defaultValue="-1" />
            <input style={inputStyle} placeholder="ID Number" />
            <select style={selectStyle}>
              <option>Nationality</option>
            </select>
            <select style={selectStyle}>
              <option>Source</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="checkbox" id="isInsurance" style={{ marginRight: '0.25rem' }} />
              <label htmlFor="isInsurance" style={{ fontSize: '0.875rem' }}>Is Insurance</label>
            </div>
            <input style={{...inputStyle, flex: 1, marginRight: '0.5rem', marginBottom: '0.5rem', minWidth: '150px'}} placeholder="Main company" />
            <select style={{...selectStyle, flex: 1, marginRight: '0.5rem', marginBottom: '0.5rem', minWidth: '150px'}}>
              <option>Sub company</option>
            </select>
            {['Policy number', 'Class', 'Membership No', 'Endurance %', 'Max amount', 'Visit limit', 'Approval no.', 'Eligref No.'].map((placeholder, index) => (
              <input key={index} style={{...inputStyle, flex: 1, marginRight: '0.5rem', marginBottom: '0.5rem', minWidth: '150px'}} placeholder={placeholder} />
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  {['Del.', 'Code', 'Source B.', 'Service / Item', 'Price', 'Count', 'Total', 'Discount #', 'Discount %', 'Total Di...', 'Net B. VAT', 'VAT %', 'VAT #', 'Exemp...', 'Net', ''].map((header, index) => (
                    <th key={index} style={{ 
                      border: '1px solid #ccc', 
                      padding: '0.5rem', 
                      fontSize: '0.875rem', 
                      textAlign: 'left',
                      width: columnWidths[index]
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: '1px solid #ccc', padding: '0.5rem', width: columnWidths[0] }}>
                      <button 
                        onClick={() => deleteTableRow(row.id)} 
                        style={{...buttonStyle, padding: '0.25rem 0.5rem', width: '100%'}}
                      >
                        X
                      </button>
                    </td>
                    {columnWidths.slice(1, -1).map((width, cellIndex) => (
                      <td key={cellIndex} style={{ 
                        border: '1px solid #ccc', 
                        padding: '0.5rem',
                        width: width
                      }}>
                        <input style={{...inputStyle, padding: '0.25rem', width: '100%'}} />
                      </td>
                    ))}
                    <td style={{ border: '1px solid #ccc', padding: '0.5rem', width: columnWidths[columnWidths.length - 1] }}>
                      {row.id === Math.max(...tableRows.map(r => r.id)) && (
                        <button onClick={addTableRow} style={{...iconButtonStyle, width: '100%'}}>+</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <input type="checkbox" id="setAsFavorite" style={{ marginRight: '0.25rem' }} />
              <label htmlFor="setAsFavorite" style={{ fontSize: '0.875rem' }}>Set As Favorite</label>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {[...Array(6)].map((_, index) => (
                <input key={index} style={{...inputStyle, width: '4rem', marginLeft: '0.5rem', marginBottom: '0.5rem'}} defaultValue="0" />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

const PatientForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[1295px] h-[680px] overflow-auto relative">
        {/* Top Bar Menu with Icons */}
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <div className="flex space-x-2">
            <ActionButton label="Save" icon={Save} primary />
            <ActionButton label="Send to doctor" icon={Send} />
            <ActionButton label="SMS" icon={MessageCircle} />
            <ActionButton label="Invoice" icon={FileText} />
            <ActionButton label="E-signature" icon={PenTool} />
            <ActionButton label="Images" icon={Image} />
            <ActionButton label="Documents" icon={File} />
            <ActionButton label="Card" icon={CreditCard} />
            <ActionButton label="Other actions" icon={MoreVertical} />
          </div>
        </div>

        {/* Close button */}
        <div className="absolute top-2 right-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-[0.9fr_0.9fr_1.2fr] gap-4">
          {/* Left Column */}
          <div className="border-r pr-4">
            <FormField label="Arabic Name :" required />
            <FormField label="English name :" required />
            <FormField label="Age :" required type="number" />
            <FormField label="Doctor name :" required type="select" />
            <FormField label="Gender :" required type="select" />
            <FormField label="Nationality :" required type="select" />
            <FormField label="Job :" type="select" />
            <FormField label="Social status :" type="select" />
            <FormField label="City :" type="select" />
            <FormField label="Address :" required type="select" />
            <FormField label="Identity type :" required type="select" />
            <FormField label="ID Number :" required />
            <FormField label="Mobile 1 :" required />
            <FormField label="Mobile 2 :" />
            <FormField label="Phone 1 :" />
            <FormField label="Phone 2 :" />
            <FormField label="Job Source :" type="select" />
            <FormField label="VAT No. :" />
          </div>

          {/* Middle Column */}
          <div className="border-r px-4">
            <FormField label="Customer Level :" type="select" />
            <FormField label="Patient source :" required type="select" />
            <FormField label="Source details :" />
            <FormField label="Shared Doctors :" type="select" />
            <FormField label="Xtra file no. :" />
            <FormField label="No. of Children :" type="number" />
            <FormField label="Qualification :" type="select" />
            <FormField label="Email 1 :" type="email" />
            <FormField label="Email 2 :" type="email" />
            <FormField label="Watt's up :" />
            <FormField label="Facebook :" />
            <FormField label="Website :" />
            <FormField label="Default discount % :" type="number" />
            <div className="flex flex-col mt-2">
              <label>Note :</label>
              <textarea className="border p-1 h-20 text-sm" />
            </div>
          </div>

          {/* Right Column */}
          <div className="pl-4">
            <FormField label="Insurance company :" type="select" />
            <FormField label="Policy number :" />
            <div className="flex space-x-2">
              <FormField label="Policy name :" className="w-2/3" />
              <FormField label="Class :" type="select" className="w-1/3" />
            </div>
            <div className="flex space-x-2">
              <FormField label="Membership Number :" className="w-2/3" />
              <FormField label="Relationship :" type="select" className="w-1/3" />
            </div>

            {/* Discount card expiry and Delete insurance data aligned */}
            <div className="flex items-center space-x-4">
              <FormField label="Discount card expiry :" type="date" className="w-1/2" />
              <button className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Delete insurance data</button>
            </div>

            <div className="flex space-x-2">
              <FormField label="File type :" type="select" className="w-2/3" />
              <FormField label="Sequence :" className="w-1/3" />
            </div>
            <FormField label="Surety passport :" />
            <FormField label="Father Identity :" />
            <FormField label="Mother Identity :" />
            <div className="flex space-x-2">
              <FormField label="Blood group :" type="select" className="w-1/2" />
              <FormField label="Other Identity :" className="w-1/2" />
            </div>
            <FormField label="Surety name :" />
            <FormField label="Surety details :" />
            <FormField label="Surety number :" />
            <div className="flex space-x-2">
              <FormField label="Relative name :" className="w-2/3" />
              <FormField label="Phone :" className="w-1/3" />
            </div>
            <FormField label="GLN No. :" />
            <div className="flex space-x-2">
              <FormField label="Weight (kg) :" type="number" className="w-1/2" />
              <FormField label="Baldi Order No. :" className="w-1/2" />
            </div>

            {/* Compact Checkbox Section */}
            <div className="mt-2 grid grid-cols-[1fr_1fr_1.2fr] gap-2">
              <div className="flex items-center space-x-1 justify-start">
                <input type="checkbox" id="block-sms" className="ml-0" />
                <label htmlFor="block-sms" className="text-xs whitespace-nowrap">Block SMS</label>
              </div>
              <div className="flex items-center space-x-1 justify-start">
                <input type="checkbox" id="block-appointments" className="ml-0" />
                <label htmlFor="block-appointments" className="text-xs whitespace-nowrap">Block Appointments</label>
              </div>
              <div className="flex items-center space-x-1 justify-start">
                <input type="checkbox" id="block-invoices" className="ml-0" />
                <label htmlFor="block-invoices" className="text-xs whitespace-nowrap">Block Invoices</label>
              </div>
              <div className="flex items-center space-x-1 justify-start">
                <input type="checkbox" id="block-file" className="ml-0" />
                <label htmlFor="block-file" className="text-xs whitespace-nowrap">Block File</label>
              </div>
              <div className="flex items-center space-x-1 justify-start">
                <input type="checkbox" id="electronic-signature" className="ml-0" />
                <label htmlFor="electronic-signature" className="text-xs whitespace-nowrap">Electronic Signature</label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-between text-xs text-gray-600 border-t pt-2">
          <div className="flex space-x-4">
            <div>User: admin</div>
            <div>Edit</div>
            <div>File No.: -1</div>
          </div>
          <div>
            File Date: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ label, primary, icon: Icon }) => (
  <button className={`flex items-center px-2 py-1 rounded text-xs ${primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
    {Icon && <Icon size={16} className="mr-1" />}
    {label}
  </button>
);

const FormField = ({ label, required, type = "text", className = "" }) => (
  <div className={`flex items-center space-x-2 mb-1 ${className}`}>
    <label className={`text-xs ${required ? "text-red-500" : ""} w-1/3`}>{label}</label>
    {type === "select" ? (
      <select className="border p-1 text-xs w-2/3">
        <option>Select...</option>
      </select>
    ) : type === "checkbox" ? (
      <input type="checkbox" className="ml-2" />
    ) : (
      <input type={type} className="border p-1 text-xs w-2/3" />
    )}
  </div>
);

const UpperToolbar = () => {
  const [isPatientFormOpen, setIsPatientFormOpen] = useState(false);
  const [isSalesBillFormOpen, setIsSalesBillFormOpen] = useState(false); // State for Sales Bill Form

  return (
    <div className="bg-white p-2 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <Tooltip text="Add New Patient">
          <Plus size={20} onClick={() => setIsPatientFormOpen(true)} className="cursor-pointer" />
        </Tooltip>
        <Tooltip text="Tags">
          <Tag size={20} onClick={() => setIsSalesBillFormOpen(true)} className="cursor-pointer" /> {/* Open Sales Bill Form */}
        </Tooltip>
        <Tooltip text="User"><User size={20} /></Tooltip>
        <div className="flex items-center justify-between border rounded px-2 w-64">
          <span className="text-gray-400">Select patient</span>
          <Tooltip text="Open Dropdown"><ChevronDown size={16} /></Tooltip>
        </div>
        <Tooltip text="Print"><Printer size={20} /></Tooltip>
      </div>
      <div className="flex items-center space-x-2">
        <Tooltip text="Shopping Bag"><ShoppingBag size={20} /></Tooltip>
        <Tooltip text="Charts"><BarChart2 size={20} /></Tooltip>
        <Tooltip text="File Text"><FileText size={20} /></Tooltip>
        <Tooltip text="Dollar"><DollarSign size={20} /></Tooltip>
        <Tooltip text="Calculator"><Calculator size={20} /></Tooltip>
        <Tooltip text="Custom Icon">
          <CustomIcon d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" size={20} />
        </Tooltip>
        <Tooltip text="Clock"><Clock size={20} /></Tooltip>
        <Tooltip text="Calendar"><Calendar size={20} /></Tooltip>
        <Tooltip text="Close"><X size={20} /></Tooltip>
      </div>
      <PatientForm isOpen={isPatientFormOpen} onClose={() => setIsPatientFormOpen(false)} />
      <SalesBillForm isOpen={isSalesBillFormOpen} onClose={() => setIsSalesBillFormOpen(false)} /> {/* Render Sales Bill Form */}
    </div>
  );
};

const LowerToolbar = () => (
  <div className="bg-white p-2 flex justify-between items-center border-b border-gray-300">
    <div className="flex space-x-2 items-center">
      <Tooltip text="Timer"><CustomIcon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" size={20} /></Tooltip>
      <Tooltip text="Message"><MessageCircle size={20} /></Tooltip>
      <Tooltip text="Calculator"><Calculator size={20} /></Tooltip>
      <Tooltip text="Currency"><CustomIcon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" size={20} /></Tooltip>
      <Tooltip text="Dollar"><DollarSign size={20} /></Tooltip>
      <Tooltip text="Hourglass"><Hourglass size={20} /></Tooltip>
      <Tooltip text="Share"><Share2 size={20} /></Tooltip>
      <Tooltip text="Search"><Search size={20} /></Tooltip>
      <Tooltip text="ATM"><CustomIcon d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" size={20} /></Tooltip>
    </div>
    <div className="flex space-x-2 items-center">
      <Tooltip text="Building"><Building2 size={20} /></Tooltip>
      <Tooltip text="Magnifier"><CustomIcon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" size={20} /></Tooltip>
      <Tooltip text="Heart"><Heart size={20} /></Tooltip>
      <Tooltip text="Globe"><CustomIcon d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" size={20} /></Tooltip>
      <Tooltip text="Users"><Users size={20} /></Tooltip>
      <Tooltip text="File Text"><FileText size={20} /></Tooltip>
      <Tooltip text="Chart"><CustomIcon d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" size={20} /></Tooltip>
    </div>
  </div>
);

const MainContent = () => (
  <div className="h-full bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden p-4 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-8xl font-bold text-white mb-2">KizenCloud</h1>
      <p className="text-xl text-white" style={{ direction: 'rtl' }}>لإدارة وتشغيل المجمعات الطبية</p>
    </div>
    {/* Add your main content here */}
  </div>
);

const BottomStatusBar = () => (
  <div className="bg-gray-200 p-2 flex justify-between items-center">
    <div>Notes</div>
    <div className="flex items-center space-x-4">
      <span>SMS Balance query</span>
      <span>9:59:11 AM</span>
      <span>admin</span>
      <span>01/10/2024</span>
      <Tooltip text="Layers"><Layers size={20} /></Tooltip>
      <Tooltip text="Globe"><Globe size={20} /></Tooltip>
      <Tooltip text="Message Square"><MessageSquare size={20} /></Tooltip>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopMenuBar />
      <UpperToolbar />
      <LowerToolbar />
      <div className="flex-grow overflow-hidden">
        <MainContent />
      </div>
      <BottomStatusBar />
    </div>
  );
};

export default App;
