import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Link } from 'react-router-dom';

// Define the type for menu items
type MenuItem = {
  title: string;
  link: string;
};

// Create the array of menu items
const menuItems: MenuItem[] = [
  { title: 'Login', link: '/login' },
  { title: 'Reset Password', link: '/reset-password' },
  { title: 'Confirm Password', link: '/confirm-password' },
  { title: 'Two Factor', link: '/two-factor' },
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Tool Inspection', link: '/tool-inspection' },
];

export function TopMenu() {
  return (
    <Menubar>
      {menuItems.map((item) => (
        <MenubarMenu key={item.title}>
          <MenubarTrigger asChild>
            <Link to={item.link}>{item.title}</Link>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
