import { FiAlignJustify } from "react-icons/fi";
// import { FiAlignRight } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard className="size-6" />,
  },
  {
    label: "View Logs",
    icon: <GrDocumentText className="size-6" />,
  },
  {
    label: "Report Problem",
    icon: <IoDocumentTextOutline className="size-6" />,
  },
  {
    label: "User Profile",
    icon: <FaUser className="size-6" />,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* side bar */}
      <section className="bg-primary hidden flex-col justify-between text-white/80 md:flex md:min-h-screen">
        <div className="flex-col justify-between gap-5 first-letter:flex">
          {/* TOGGLE BUTTON */}
          <div className="mt-2 flex justify-end p-5">
            <button
              onClick={handleOpen}
              className="bg-secondary inline-block rounded-sm p-2"
            >
              {isOpen ? (
                <TbMenuDeep className="size-6" />
              ) : (
                <FiAlignJustify className="size-6" />
              )}
            </button>
          </div>

          {/* SIDE MENU */}
          <SideMenu isOpen={isOpen} />
        </div>
        {/* ACCOUNT */}
        <Account isOpen={isOpen} />
      </section>
      {/* dashboard */}
      <section className="hidden flex-1 items-center justify-center font-mono text-5xl font-bold uppercase tracking-widest text-black/40 md:flex">
        <h1 className="">Dashboard</h1>
      </section>

      {/* MOBILE VIEW */}
      <section className="flex min-h-screen flex-col justify-between font-semibold text-white/60 md:hidden">
        <div className="flex flex-col justify-center">
          <div className="bg-primary flex items-center gap-5 p-3">
            <button
              onClick={handleOpen}
              className="bg-secondary inline-block rounded-sm p-2"
            >
              {isOpen ? (
                <FiAlignJustify className="size-6" />
              ) : (
                <IoMdClose className="size-6" />
              )}
            </button>

            <p className="text-xl tracking-wide">Dashboard</p>
          </div>
          {isOpen && <SideMenu isOpen={isOpen} />}
        </div>
        {isOpen && <Account isOpen={isOpen} />}
      </section>
    </div>
  );
}

interface SideMenuProps {
  isOpen: boolean;
}
export function SideMenu({ isOpen }: SideMenuProps) {
  return (
    <div className="flex-1 bg-red-500">
      <ul className="bg-primary transition-all duration-300">
        {links.map((link, i) => (
          <li key={i} className="hover:bg-secondary">
            <a href="#" className="flex items-center gap-4 p-5 font-semibold">
              {link.icon}
              {isOpen && <span>{link.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface AccountProps {
  isOpen: boolean;
}
export function Account({ isOpen }: AccountProps) {
  return (
    <div className="bg-secondary flex items-center p-5">
      {isOpen && (
        <div className="flex items-center gap-3">
          <div>
            <FaRegCircleUser className="size-6" />
          </div>
          <div>
            <p className="uppercase">Edmealem Kasshun</p>
            {/* TODO:  convert to Date.now*/}
            <p className="text-xs text-white/50">
              Last Logined Oct 22, 2023 1:31 PM
            </p>
          </div>
        </div>
      )}
      <div className="md:ml-2">
        <BiLogOut className="size-6" />
      </div>
    </div>
  );
}
