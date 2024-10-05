import { TopMenu } from '../home/TopMenu';

export function Header() {
  return (
    <header className="w-full bg-orange-100 p-4">
      <div className="container mx-auto">
        {/* <img
          src="/itape-logo.png"
          alt="itape logo"
          width={100}
          height={40}
          className="h-10 w-auto"
        /> */}
        <div className="flex justify-between items-center">
          <p>itage</p>
          <TopMenu />
        </div>
      </div>
    </header>
  );
}
