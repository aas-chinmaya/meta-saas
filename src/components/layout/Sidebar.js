'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronRight,ChevronLeft,
  LayoutDashboard, 
  Bell, 
  Megaphone,
  Users, 
  LifeBuoy, 
  ShoppingCart, 
  Zap, 
  FileText, 
  Key, 
  Settings,UsersRound , 
  TabletSmartphone 
} from 'lucide-react';

const menuItems = [
  // Core Navigation
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Megaphone, label: 'Promotions', href: '/promotions' },

  // User & Management

  { icon: UsersRound , label: 'Customers', href: '/customer' },
  { icon: LifeBuoy, label: 'Support', href: '/support' },
  { icon: ShoppingCart, label: 'Commerce', href: '/commerce' },
  { icon: Zap, label: 'Automations', href: '/automations' },
  
  { icon: Users, label: 'Users', href: '/users' },
  // Templates & Configuration
  { icon: FileText, label: 'Templates', href: '/templates' },
  { icon: Key, label: 'Configuration', href: '/configurations' },

  // Settings & Test
  // { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: TabletSmartphone, label: 'Test', href: '/test' },
];


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`bg-white dark:bg-gray-900 h-screen shadow-lg transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        {!collapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className=" cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 my-1 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
