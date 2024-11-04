import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";

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

interface SideMenuProps {
  isOpen: boolean;
}
export default function SideMenu({ isOpen }: SideMenuProps) {
  return (
    <div className="bg-primary flex-1">
      <ul className="transition-all duration-300">
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
