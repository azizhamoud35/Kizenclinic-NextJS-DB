'use client'

import { MessageCircle, Calculator, DollarSign, Hourglass, Share2, Search, Building2, Heart, Users, FileText } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { CustomIcon } from './CustomIcon';

export function LowerToolbar() {
  return (
    <div className="bg-white p-2 flex justify-between items-center border-b border-gray-300">
      <div className="flex space-x-2 items-center">
        <Tooltip text="Timer">
          <CustomIcon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </Tooltip>
        <Tooltip text="Message"><MessageCircle size={20} /></Tooltip>
        <Tooltip text="Calculator"><Calculator size={20} /></Tooltip>
        <Tooltip text="Currency">
          <CustomIcon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </Tooltip>
        <Tooltip text="Dollar"><DollarSign size={20} /></Tooltip>
        <Tooltip text="Hourglass"><Hourglass size={20} /></Tooltip>
        <Tooltip text="Share"><Share2 size={20} /></Tooltip>
        <Tooltip text="Search"><Search size={20} /></Tooltip>
        <Tooltip text="ATM">
          <CustomIcon d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </Tooltip>
      </div>
      <div className="flex space-x-2 items-center">
        <Tooltip text="Building"><Building2 size={20} /></Tooltip>
        <Tooltip text="Heart"><Heart size={20} /></Tooltip>
        <Tooltip text="Users"><Users size={20} /></Tooltip>
        <Tooltip text="File Text"><FileText size={20} /></Tooltip>
      </div>
    </div>
  );
}