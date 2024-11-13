'use client'

import { useState } from 'react';
import { X } from 'lucide-react';
import { ActionButton } from '../ActionButton';
import { FormField } from '../FormField';
import { DbConfig } from '@/lib/db';

interface DatabaseConfigFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DatabaseConfigForm({ isOpen, onClose }: DatabaseConfigFormProps) {
  const [config, setConfig] = useState<DbConfig>({
    server: '',
    database: '',
    user: '',
    password: '',
    port: 1433,
    trustServerCertificate: true
  });
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/database/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      
      const data = await response.json();
      
      setStatus({
        message: data.message,
        type: data.success ? 'success' : 'error'
      });

      if (data.success) {
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      setStatus({
        message: 'Failed to connect to database',
        type: 'error'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
        <div className="absolute top-2 right-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">Database Configuration</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Server:"
            required
            value={config.server}
            onChange={(e) => setConfig({ ...config, server: e.target.value })}
          />
          <FormField
            label="Database:"
            required
            value={config.database}
            onChange={(e) => setConfig({ ...config, database: e.target.value })}
          />
          <FormField
            label="Username:"
            required
            value={config.user}
            onChange={(e) => setConfig({ ...config, user: e.target.value })}
          />
          <FormField
            label="Password:"
            type="password"
            required
            value={config.password}
            onChange={(e) => setConfig({ ...config, password: e.target.value })}
          />
          <FormField
            label="Port:"
            type="number"
            required
            value={config.port.toString()}
            onChange={(e) => setConfig({ ...config, port: parseInt(e.target.value) })}
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="trustCert"
              checked={config.trustServerCertificate}
              onChange={(e) => setConfig({ ...config, trustServerCertificate: e.target.checked })}
            />
            <label htmlFor="trustCert" className="text-sm">Trust Server Certificate</label>
          </div>

          {status.message && (
            <div className={`p-2 rounded ${
              status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {status.message}
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <ActionButton label="Cancel" onClick={onClose} />
            <ActionButton label="Connect" primary type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}