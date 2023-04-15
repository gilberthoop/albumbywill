import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../../assets/css/nav.css';

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <CustomLink to="/">Recently Added</CustomLink>
          <CustomLink to="/favorites">Favorited</CustomLink>
        </ul>
      </nav>
      <hr className="nav__underline" />
    </div>
  )
}

interface CustomLinkProps {
  to: string
  children: React.ReactNode
  [key: string]: unknown
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar;