import { NavLink } from 'react-router-dom'

export default function App() {
  return (
    <>
      <h2>Welcome to Manuela's portfolio</h2>
      <h3>Choose your adventure</h3>
      <NavLink
        to="2d"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <button>2d</button>
      </NavLink>

      <NavLink
        to="3d"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <button>3d</button>
      </NavLink>
    </>
  )
}
