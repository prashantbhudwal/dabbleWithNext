import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="rounded bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
