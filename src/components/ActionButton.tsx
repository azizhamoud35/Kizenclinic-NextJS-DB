'use client'

import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  primary?: boolean;
  icon?: LucideIcon;
  onClick?: () => void;
}

export function ActionButton({ label, primary, icon: Icon, onClick }: ActionButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center px-2 py-1 rounded text-xs ${
        primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {Icon && <Icon size={16} className="mr-1" />}
      {label}
    </button>
  );
}