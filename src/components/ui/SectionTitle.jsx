import { useNavigate } from 'react-router-dom';

const SectionTitle = ({ title, buttonText, link, hash, line }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* component title */}
      <div className="mb-8 flex justify-between items-center bg-gray-b">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl">
            <span className="text-primary">{hash || '#'}</span>
            {title}
          </h2>
          <span
            className={`hidden md:inline-block border-b border-primary w-[${line || '250px'}]`}
            style={{ width: line || '250px' }}
          ></span>
        </div>
        {link && buttonText && (
          <a className="cursor-pointer" onClick={() => navigate(link)}>
            {buttonText} ~~{'>'}
          </a>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
