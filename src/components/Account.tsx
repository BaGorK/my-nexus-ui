import { FaRegCircleUser } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

interface AccountProps {
  isOpen: boolean;
}
export default function Account({ isOpen }: AccountProps) {
  return (
    <div className="bg-primary pb-5">
      <div className="bg-secondary flex items-center">
        {isOpen && (
          <div className="bg-secondary flex items-center gap-3 p-5">
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
        <div className="p-5">
          <BiLogOut className="size-6" />
        </div>
      </div>
    </div>
  );
}
