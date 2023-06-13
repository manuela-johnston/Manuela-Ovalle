import { NavLink } from 'react-router-dom'

export default function App() {
  return (
    <>
      <section className="home-page">
        <div className="home-page-container">
          <h1 className="home-pg-header">
            Welcome to <br /> Manuela's portfolio
          </h1>
          <h3 className="tagline">Choose your adventure</h3>
          <NavLink
            to="2d"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <button className="home-pg-button">2d</button>
          </NavLink>

          <NavLink
            to="3d"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <button className="home-pg-button">3d</button>
          </NavLink>
        </div>
      </section>
    </>
  )
}
