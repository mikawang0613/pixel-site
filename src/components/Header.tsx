import React from "react";
import { Link } from "gatsby";

const headingStyles: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};

export const Header: React.FC = () => {
  return (
    <header>
      <meta name="facebook-domain-verification" content="lmloheohibd4nhuodxq266i6lqrse2" />
      <title>Altmeta.org Pixel Test</title>
      <Link to="/">
        <h1 style={headingStyles}>Altmeta.org Pixel Test</h1>
      </Link>
    </header>
  );
};
