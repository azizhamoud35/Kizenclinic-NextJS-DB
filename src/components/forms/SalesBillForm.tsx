'use client'

import { useState } from 'react';
import { X } from 'lucide-react';

interface TableRow {
  id: number;
}

interface SalesBillFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SalesBillForm({ isOpen, onClose }: SalesBillFormProps) {
  if (!isOpen) return null;

  const [tableRows, setTableRows] = useState<TableRow[]>([{ id: 0 }]);

  const buttonStyle = "px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm";
  const inputStyle = "w-full px-2 py-1 border border-gray-300 rounded text-sm";
  const selectStyle = "w-full px-2 py-1 border border-gray-300 rounded text-sm appearance-none bg-white";

  const addTableRow = () => {
    const newId = Math.max(...tableRows.map(row => row.id), 0) + 1;
    setTableRows([...tableRows, { id: newId }]);
  };

  const deleteTableRow = (idToDelete: number) => {
    setTableRows(tableRows.filter(row => row.id !== idToDelete));
  };

  const columnWidths = [
    '3%',    // Del.
    '6%',    // Code
    '6%',    // Source B.
    '18%',   // Service / Item
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

        <h2 className="text-2xl font-bold mb-4">A new sale Bill</h2>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {['Save - Print', 'Save - No print', 'Custom save', 'Discounts', 'Favorite', 'Offers'].map((text) => (
              <button key={text} className={buttonStyle}>{text}</button>
            ))}
          </div>
          <select className={selectStyle}>
            <option>المستودع الرئيسي</option>
          </select>
        </div>

        <div className="grid grid-cols-6 gap-2 mb-2">
          <input className={inputStyle} placeholder="Patient name" />
          <div className="flex items-center">
            <input type="checkbox" id="out" className="mr-1" />
            <label htmlFor="out" className="text-sm">(out)</label>
          </div>
          <input className={inputStyle} placeholder="File No." />
          <select className={selectStyle}>
            <option>Doctor name</option>
          </select>
          <select className={selectStyle}>
            <option>Clinic</option>
          </select>
          <select className={selectStyle} defaultValue="admin">
            <option>admin</option>
          </select>
        </div>

        <div className="grid grid-cols-6 gap-2 mb-4">
          <input className={inputStyle} type="datetime-local" defaultValue="2024-10-06T11:35" />
          <input className={inputStyle} placeholder="Note" />
          <input className={inputStyle} placeholder="Invoice No." defaultValue="-1" />
          <input className={inputStyle} placeholder="ID Number" />
          <select className={selectStyle}>
            <option>Nationality</option>
          </select>
          <select className={selectStyle}>
            <option>Source</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="isInsurance" className="mr-1" />
            <label htmlFor="isInsurance" className="text-sm">Is Insurance</label>
          </div>
          {[
            'Main company',
            'Sub company',
            'Policy number',
            'Class',
            'Membership No',
            'Endurance %',
            'Max amount',
            'Visit limit',
            'Approval no.',
            'Eligref No.'
          ].map((placeholder) => (
            <input
              key={placeholder}
              className={`${inputStyle} flex-1 min-w-[150px]`}
              placeholder={placeholder}
            />
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-100">
                {[
                  'Del.',
                  'Code',
                  'Source B.',
                  'Service / Item',
                  'Price',
                  'Count',
                  'Total',
                  'Discount #',
                  'Discount %',
                  'Total Di...',
                  'Net B. VAT',
                  'VAT %',
                  'VAT #',
                  'Exemp...',
                  'Net',
                  ''
                ].map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 p-2 text-sm text-left"
                    style={{ width: columnWidths[index] }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => deleteTableRow(row.id)}
                      className="w-full px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                    >
                      X
                    </button>
                  </td>
                  {Array(14).fill(null).map((_, index) => (
                    <td key={index} className="border border-gray-300 p-2">
                      <input className={`${inputStyle} p-1`} />
                    </td>
                  ))}
                  <td className="border border-gray-300 p-2">
                    {row.id === Math.max(...tableRows.map(r => r.id)) && (
                      <button
                        onClick={addTableRow}
                        className="w-full px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                      >
                        +
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" id="setAsFavorite" className="mr-1" />
            <label htmlFor="setAsFavorite" className="text-sm">Set As Favorite</label>
          </div>
          <div className="flex gap-2">
            {Array(6).fill(null).map((_, index) => (
              <input
                key={index}
                className={`${inputStyle} w-16`}
                defaultValue="0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}