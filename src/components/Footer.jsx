const Footer = () => {
  return (
    <footer className="w-full border-t border-t-gray-300/20  px-4 py-6 mt-12">
      <div className="app-container mx-auto text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <div>
            <p>
              <span className="text-white mr-5">Moiz</span>
              <a className="cursor-pointer hover:text-primary" href="mailto:moiezdev@gmail.com">
                moiezdev@gmail.com
              </a>
            </p>
            <p>FullStack Developer | Frontend Specialist</p>
          </div>
          <div>
            <h1 className="text-xlarge">Media</h1>
            <div></div>
          </div>
        </div>
        <div className=" text-center ">
          &copy; {new Date().getFullYear()} Moizdev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
