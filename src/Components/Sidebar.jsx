import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen w-56 bg-gradient-to-b from-gray-800 to-gray-900 text-white  flex flex-col shadow-lg">
      {/* Logo */}
     

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto">
        <ul className="space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold hover:text-blue-300'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold hover:text-blue-300'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold hover:text-blue-300'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold hover:text-blue-300'
                  : 'flex items-center space-x-3 text-gray-300 hover:text-blue-400'
              }
            >
              <span className="material-icons"></span>
              <span>Insights</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center space-x-3 text-blue-400 font-semibold hover:text-blue-300'
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
