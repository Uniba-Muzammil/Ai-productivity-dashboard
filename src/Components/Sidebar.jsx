import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-56 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col shadow-lg">
      {/* Logo Section */}
      <div className="p-4 text-center font-bold text-xl tracking-wide text-blue-400 border-b border-gray-700">
        MyApp
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow overflow-y-auto">
        <ul className="space-y-4 p-4">
          {/* Dashboard */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Dashboard</span>
            </NavLink>
          </li>

          {/* Tasks */}
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Tasks</span>
            </NavLink>
          </li>

          {/* Calendar */}
          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Calendar</span>
            </NavLink>
          </li>

          {/* Insights */}
          <li>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Insights</span>
            </NavLink>
          </li>

          {/* Analytics */}
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Analytics</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      
    </aside>
  );
};

export default Sidebar;
