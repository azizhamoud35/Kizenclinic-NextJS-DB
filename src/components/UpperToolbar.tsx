'use client'

import { useState } from 'react';
import { Plus, Tag, User, ChevronDown, Printer, ShoppingBag, BarChart2, FileText, DollarSign, Calculator, Clock, Calendar, X } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { CustomIcon } from './CustomIcon';
import { PatientForm } from './forms/PatientForm';
import { SalesBillForm } from './forms/SalesBillForm';

export function UpperToolbar() {
  const [isPatientFormOpen, setIsPatientFormOpen] = useState(false);
  const [isSalesBillFormOpen, setIsSalesBillFormOpen] = useState(false);

  return (
    <div className="bg-white p-2 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <Tooltip text="Add New Patient">
          <Plus size={20} onClick={() => setIsPatientFormOpen(true)} className="cursor-pointer" />
        </Tooltip>
        <Tooltip text="Tags">
          <Tag size={20} onClick={() => setIsSalesBillFormOpen(true)} className="cursor-pointer" />
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
          <CustomIcon d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </Tooltip>
        <Tooltip text="Clock"><Clock size={20} /></Tooltip>
        <Tooltip text="Calendar"><Calendar size={20} /></Tooltip>
        <Tooltip text="Close"><X size={20} /></Tooltip>
      </div>
      <PatientForm isOpen={isPatientFormOpen} onClose={() => setIsPatientFormOpen(false)} />
      <SalesBillForm isOpen={isSalesBillFormOpen} onClose={() => setIsSalesBillFormOpen(false)} />
    </div>
  );
}