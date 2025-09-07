export default function Error({ height = 'h-screen', message = 'Something went wrong!' }) {
  return (
    <div className={`flex items-center justify-center w-full bg-gray-b/80 ${height}`}>
      <div className="flex flex-col items-center gap-4">
        {/* Error Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-primary to-gray-a">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
            <line
              x1="8"
              y1="8"
              x2="16"
              y2="16"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="8"
              x2="8"
              y2="16"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Message */}
        <p className="font-medium text-white text-lg">{message}</p>
      </div>
    </div>
  );
}
