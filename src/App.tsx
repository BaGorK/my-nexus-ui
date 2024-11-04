import { FiAlignJustify } from "react-icons/fi";

import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SideMenu } from "./components";
import { Button } from "./components";
import { Account } from "./components";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen flex-col sm:flex-row">
      <section className="bg-primary hidden flex-col justify-between text-white/80 sm:flex sm:min-h-screen">
        <div className="flex-col justify-between gap-5">
          <div className="mt-2 flex justify-end px-3 py-5">
            <Button
              iconOpen={<TbMenuDeep className="size-6" />}
              iconClose={<FiAlignJustify className="size-6" />}
              onClick={handleOpen}
              isOpen={isOpen}
            />
          </div>

          <SideMenu isOpen={isOpen} />
        </div>
        <Account isOpen={isOpen} />
      </section>

      <section className="hidden flex-1 items-center justify-center font-mono text-5xl font-bold uppercase tracking-widest text-black/40 sm:flex">
        <h1 className="">Dashboard</h1>
      </section>

      <section className="flex flex-1 flex-grow flex-col justify-between font-semibold text-white/60 sm:hidden">
        <div className="flex flex-1 flex-col">
          <div className="bg-primary flex w-full items-center gap-5 self-start p-3">
            <Button
              iconOpen={<FiAlignJustify className="size-6" />}
              iconClose={<IoMdClose className="size-6" />}
              onClick={handleOpen}
              isOpen={isOpen}
            />

            <p className="text-xl tracking-wide">Dashboard</p>
          </div>
          {isOpen && <SideMenu isOpen={isOpen} />}
        </div>
        {isOpen && <Account isOpen={isOpen} />}
      </section>
    </main>
  );
}
