'use client'

import { useState } from 'react'
import { ChevronDown, Database } from 'lucide-react'
import { Tooltip } from './Tooltip'
import { DatabaseConfigForm } from './forms/DatabaseConfigForm'

const DropdownMenu = ({ title, items }: { title: string; items: string[] }) => {
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

export function TopMenuBar() {
  const [isDbConfigOpen, setIsDbConfigOpen] = useState(false);
  
  const menuItems = {
    basicData: ["Clinics data", "Doctors", "Users and roles", "VAT management", "Set patient consultation"],
    medicalFile: ["Patients statistics", "Patient balances and totals", "Medicine tree", "Patients visits"],
    accounting: ["مركز التقارير والاحصائيات", "Invoices services and Wroks", "Invoices", "Receipts"],
    repositorys: ["Supplier information", "Repositorys List", "Repositorys items list"],
    administration: ["News bar texts", "Sequence forms", "Employees data"],
    control: ["Set chat and notification", "Set current computer", "Set Kizen updater"],
    sms: ["SMS policy", "Set SMS", "Set open file SMS"],
    about: ["My Account", "Kizen programs policy of use", "About the system"]
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
      <div className="flex items-center space-x-2">
        <Tooltip text="Database Configuration">
          <Database size={20} className="cursor-pointer" onClick={() => setIsDbConfigOpen(true)} />
        </Tooltip>
      </div>
      <DatabaseConfigForm isOpen={isDbConfigOpen} onClose={() => setIsDbConfigOpen(false)} />
    </div>
  );
}