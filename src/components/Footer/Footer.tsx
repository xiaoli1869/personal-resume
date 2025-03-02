import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center">
      <p className="text-sm dark:text-light/70">
        Copyright &copy; {new Date().getFullYear()}.Leon Li All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
