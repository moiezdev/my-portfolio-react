import { useNavigate } from 'react-router-dom';

const SectionTitle = ({ title, buttonText, link, hash }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* component title */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl">
          <span className="text-primary">{hash || '#'}</span>
          {title}
        </h2>
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
