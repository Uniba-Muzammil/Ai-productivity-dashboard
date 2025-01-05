import { useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./Pages/Dashboard"
import Calendar from "./Pages/Calendar"
import Insights from "./Pages/Insights"
import Tasks from "./Pages/Tasks"
import TaskAnalytics from "./Pages/TaskAnalytics"
function App() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <Router>
      <div className="flex relative min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 flex-grow">
            <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} />} />

              <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/insights" element={<Insights tasks={tasks} />} />
              <Route path="/analytics" element={<TaskAnalytics tasks={tasks} />} /> {/* New route for analytics */}
            </Routes>
          </main>
        
          <Footer />
          </div>
        </div>
     
    </Router>
  );
}


export default App
