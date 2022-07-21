import Link from "next/link";
import { Menu } from "@headlessui/react";
import { UserIcon, MenuIcon, LogoutIcon } from "@heroicons/react/outline";
import { headerRightItems } from "../utils/headerRight/headerRightItems";
import { useContext } from "react";
import { MenuContext } from "../context/Menu.context";
import { logout } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";




export const Header = () => {
  const { setOpen } = useContext(MenuContext);

  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
      router.push('/login');
  }
   
  



  return (
    <div className="bg-green-600 p-10 flex flex-col md:flex-row  md:space-y-0 items-center space-y-5 justify-around">
      <div className="flex space-x-3 items-center justify-center">
        <button onClick={() => setOpen(true)}>
          <MenuIcon className="h-8 w-8 text-gray-50" />
        </button>
        <Link href={"/"}>
          <a>
            <span className="text-3xl text-yellow-50">EasyRent</span>
          </a>
        </Link>
      </div>
      <div className="relative">
        <Menu>
          <Menu.Button className="flex px-10 py-2 border-gray-50 border-2 space-x-3 text-gray-50  rounded-md">
            <UserIcon className="h-5 w-5 " />
            <span>Account</span>
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute top-full bg-green-600 w-full flex space-y-2 flex-col "
          >
            {/* {headerRightItems.map(({ title, icon }, index) => (
              <Menu.Item key={index}>
                <Link href="/">
                  <a className="flex p-4 hover:bg-gray-500 text-gray-50 space-x-3">
                    <span>{icon}</span>
                    <span>{title}</span>
                  </a>
                </Link>
              </Menu.Item>
            ))} */}

            <Link href="#">
              <a className="flex p-4 hover:bg-gray-500 text-gray-50 space-x-3">
                <span><UserIcon className='h-6 w-6' /></span>
                <span>Profile</span>
              </a>
            </Link>

            
              <a 
              className="flex p-4 
              hover:bg-gray-500 
              text-gray-50 space-x-3"
              onClick={logoutHandler}
              >
                <span><LogoutIcon className='h-6 w-6' /></span>
                <span>Logout</span>
              </a>
           



          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};