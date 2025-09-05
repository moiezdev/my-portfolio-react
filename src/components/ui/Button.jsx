const Button = ({ children, onClick, className, primary }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border cursor-pointer ${
        primary
          ? 'border-primary text-white hover:bg-primary/20'
          : 'border-gray-a text-gray-a hover:bg-gray-a/20'
      } transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
