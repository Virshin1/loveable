import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';

interface ServiceOption {
  id: string;
  title: string;
  icon: string;
  category: string;
}

interface AddServiceDropdownProps {
  onServiceAdd: (service: ServiceOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const AddServiceDropdown: React.FC<AddServiceDropdownProps> = ({
  onServiceAdd,
  isOpen,
  onToggle
}) => {
  const serviceOptions: ServiceOption[] = [
    // Payments
    { 
      id: 'ppi-wallet-gold', 
      title: 'PPI Wallet Gold', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgcng9IjIiIGZpbGw9IiNENEFGMzciLz4KPHJlY3QgeD0iNCIgeT0iOSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIHJ4PSIxIiBmaWxsPSIjRkZGIi8+CjxyZWN0IHg9IjciIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzM4OEUzQyIvPgo8L3N2Zz4=', 
      category: 'Payments' 
    },
    { 
      id: 'dmt', 
      title: 'DMT', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiA4Yy0zLjMzMyAwLTUgMS4zMzMtNSA0czEuNjY3IDQgNSA0TTEyIDhoLjAxIi8+CjxwYXRoIGQ9Ik0xMiAxNmguMDEiLz4KPHBhdGggZD0iTTE1IDEyaC0zIi8+CjxwYXRoIGQ9Ik0xMiAxMlY4TTEyIDEydjQiLz4KPHBhdGggZD0iTTggMTJoMW01IDBoMW0tNi0zaC4wMU0xNCA5aC4wMU0xMCAxNWguMDFNMTQgMTVoLjAxIiBzdHJva2U9IiMxOTc2RDIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==', 
      category: 'Payments' 
    },
    { 
      id: 'aeps', 
      title: 'AEPS', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzYTkgOSAwIDAwLTkgOSA5IDkgMCAwMDkgOSA4IDggMCAwMDgtOCA5IDkgMCAwMC05LTl6IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMiAxMmgtNCIgc3Ryb2tlPSIjRkY1NzIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiAxMmg0IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAydjQiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyIDIydi00IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==', 
      category: 'Payments' 
    },
    { 
      id: 'upi-pay', 
      title: 'UPI Pay', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzM5YzNlOCI+CjxwYXRoIGQ9Ik00IDRoNnY2SDR6TTQgMTRoNnY2SDR6TTE0IDRoNnY2aC02ek0xNCAxNGg2djZoLTZ6Ii8+Cjwvc3ZnPg==', 
      category: 'Payments' 
    },
    { 
      id: 'ppi-wallet', 
      title: 'PPI Wallet', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgcng9IjIiIGZpbGw9IiM2Yzc1N2QiLz4KPHJlY3QgeD0iNCIgeT0iOSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIHJ4PSIxIiBmaWxsPSIjRkZGIi8+CjxyZWN0IHg9IjciIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzZjNzU3ZCIvPgo8L3N2Zz4=', 
      category: 'Payments' 
    },
    
    // Recharge
    { 
      id: 'recharge', 
      title: 'Recharge', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgcng9IjIiIGZpbGw9IiMyOUI2RjYiLz4KPHJlY3QgeD0iNCIgeT0iOSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjYiIHJ4PSIxIiBmaWxsPSIjQTVENkE3Ii8+CjxyZWN0IHg9IjciIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzgxRDRGQSIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjE3IiByPSIxIiBmaWxsPSIjMDI4OEQxIi8+Cjwvc3ZnPg==', 
      category: 'Recharge' 
    },
    
    // Wallet Transfer
    { 
      id: 'fintech-wallet-transfer', 
      title: 'Fintech Wallet to Bank Transfer', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjMiIHk9IjciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMCIgcng9IjMiIGZpbGw9IiNGRkIzMDAiLz4KPHJlY3QgeD0iNSIgeT0iOSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjYiIHJ4PSIyIiBmaWxsPSIjRkZFMDgyIi8+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iI0Y1N0MwMCIvPgo8L3N2Zz4=', 
      category: 'Wallet Transfer' 
    },
    
    // Bill Payments
    { 
      id: 'bill-payment-offline', 
      title: 'Bill Payment Offline', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIGZpbGw9IiM5MENBRjkiLz4KPHJlY3QgeD0iNiIgeT0iNyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjMTk3NkQyIi8+CjxyZWN0IHg9IjYiIHk9IjExIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiMxOTc2RDIiLz4KPHJlY3QgeD0iNiIgeT0iMTUiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjMTk3NkQyIi8+Cjwvc3ZnPg==', 
      category: 'Bill Payments' 
    },
    { 
      id: 'bill-payment-online', 
      title: 'Bill Payment Online', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIGZpbGw9IiM5MENBRjkiLz4KPHJlY3QgeD0iNiIgeT0iNyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjMTk3NkQyIi8+CjxyZWN0IHg9IjYiIHk9IjExIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiMxOTc2RDIiLz4KPHJlY3QgeD0iNiIgeT0iMTUiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjMTk3NkQyIi8+CjxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjMiIGZpbGw9IiMwMEJDRDQiLz4KPC9zdmc+', 
      category: 'Bill Payments' 
    },
    { 
      id: 'igl-commercial-bill', 
      title: 'IGL Commercial Bill', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMy40MyAzLjMyYTMuNSAzLjUgMCAwMC00Ljg2IDQuODZMMy4zMiAxMy40M2EzLjUgMy41IDAgMDA0Ljg2IDQuODZsNS4yNS01LjI1YTMuNSAzLjUgMCAwMDQuODYtNC44NmwtNS4yNS01LjI1eiIgc3Ryb2tlPSIjRkY1NzIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjIgNnMtMiA2LTYgNiIgc3Ryb2tlPSIjRkY1NzIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4=', 
      category: 'Bill Payments' 
    },
    
    // Credit Card
    { 
      id: 'credit-card-bill', 
      title: 'Credit Card Bill', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjMiIHk9IjYiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiMxOTc2RDIiLz4KPHJlY3QgeD0iNSIgeT0iMTAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzY0QjVGNiIvPgo8cmVjdCB4PSI3IiB5PSIxNCIgd2lkdGg9IjQiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiMxNTY1QzAiLz4KPC9zdmc+', 
      category: 'Credit Card' 
    },
    
    // Travel
    { 
      id: 'airline', 
      title: 'Airline', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjIiIHk9IjYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMiIgcng9IjQiIGZpbGw9IiM4MUM3ODQiLz4KPGNpcmNsZSBjeD0iOCIgY3k9IjEyIiByPSIyIiBmaWxsPSIjRkZENjAwIi8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjIiIGZpbGw9IiNFNTM5MzUiLz4KPHJlY3QgeD0iMTIiIHk9IjE0IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzQzQTA0NyIvPgo8L3N2Zz4=', 
      category: 'Travel' 
    },
    { 
      id: 'bus', 
      title: 'Bus', 
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHg9IjMiIHk9IjExIiB3aWR0aD0iMTgiIGhlaWdodD0iMTAiIHJ4PSIyIiByeT0iMiIgc3Ryb2tlPSIjNzk1NTQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8bGluZSB4MT0iNyIgeTE9IjExIiB4Mj0iNyIgeTI9IjMiIHN0cm9rZT0iIzc5NTU0OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjE3IiB5MT0iMTEiIHgyPSIxNyIgeTI9IjMiIHN0cm9rZT0iIzc5NTU0OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjMiIHkxPSIxNiIgeDI9IjIxIiB5Mj0iMTYiIHN0cm9rZT0iIzc5NTU0OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iNyIgY3k9IjIwIiByPSIxIiBzdHJva2U9IiM3OTU1NDgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjE3IiBjeT0iMjAiIHI9IjEiIHN0cm9rZT0iIzc5NTU0OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+', 
      category: 'Travel' 
    }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    onServiceAdd(service);
    onToggle(); // Close the dropdown after selection
  };

  const groupedServices = serviceOptions.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceOption[]>);

  return (
    <DropdownMenu open={isOpen} onOpenChange={onToggle}>
      <DropdownMenuTrigger asChild>
        <button 
          className="absolute -top-2 -right-2 bg-white text-[rgba(51,102,153,1)] w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
          aria-label="Add service"
        >
          {isOpen ? <X size={16} className="stroke-2" /> : <Plus size={16} className="stroke-2" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-72 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-xl z-50 rounded-lg"
        align="end"
        side="bottom"
        sideOffset={8}
      >
        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category}>
            <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 bg-gray-50">
              {category}
            </DropdownMenuLabel>
            {services.map((service) => (
              <DropdownMenuItem
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg flex-shrink-0">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 truncate flex-1">
                  {service.title}
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-1" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};