interface ButtonProps {
  iconOpen: JSX.Element;
  iconClose: JSX.Element;
  onClick: () => void;
  isOpen: boolean;
}

export default function Button({ iconOpen, iconClose, onClick, isOpen }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary inline-block rounded-sm p-2"
    >
      {isOpen ? iconOpen : iconClose}
    </button>
  );
}
