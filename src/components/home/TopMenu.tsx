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
  { title: 'Two Factor', link: '/two-factor' },
  { title: 'Confirm Password', link: '/confirm-password' },
  { title: 'Reset Password', link: '/reset-password' },
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
