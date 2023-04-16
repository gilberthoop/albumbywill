import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../../assets/css/nav.css';

function NavBar() {
  // Render the navigation bar with two links using the CustomLink component
  return (
    <section className="nav-container">
      <nav className="nav">
        <ul>
          <CustomLink to="/">Recently Added</CustomLink>
          <CustomLink to="/favorites">Favorited</CustomLink>
        </ul>
      </nav>
      <hr className="nav__underline" />
    </section>
  )
}

// Define the CustomLinkProps interface, which specifies the props that the CustomLink component can accept
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