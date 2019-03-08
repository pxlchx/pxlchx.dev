import { Link } from 'gatsby';
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from "./image";

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgb(34, 79, 118)',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ maxWidth: '100px', width: '100px' }}>
        <Image path="pxlchx_icon_transparent.png" />
      </div>
      <h1 style={{ margin: 0, marginLeft: '30px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ marginLeft: '50px' }}>
        <a
          href="https://github.com/pxlchx/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <FaGithub size="3em" />
        </a>
      </div>
    </div>
  </div>
)

Header.defaultProps = {
  siteTitle: ''
}

export default Header
