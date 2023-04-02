interface ButtonPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ children, ...props }) => {
  return (
    <div className="flex space-x-2" {...props}>
      {children}
    </div>
  );
};

export default ButtonPanel;
