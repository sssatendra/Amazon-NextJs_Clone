import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex bg-yellow-400 items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500">
          <input
            className="p-2 h-full width-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Satendra</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-7  h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full hover:bg-yellow-500">
              2
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm ">Cart</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-2 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
          <MenuIcon className="h-4 mr-1 cursor-pointer" />
          All
        </p>
        <p className="link ">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-block">Food & Grocery</p>
        <p className="link hidden lg:inline-block">Prime</p>
        <p className="link hidden lg:inline-block">Electronics</p>
        <p className="link hidden lg:inline-block">Buy Again</p>
        <p className="link hidden lg:inline-block">Shopper Toolkit</p>
        <p className="link hidden lg:inline-block">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
