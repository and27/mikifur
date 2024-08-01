const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 mt-[4rem] items-center justify-center py-8 ">
      <p className="text-2xl font-bold">Mikifur</p>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/mikifur/">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/mikifur/">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/mikifur/">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
      </div>
      <p>© 2021 Mikifur. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
