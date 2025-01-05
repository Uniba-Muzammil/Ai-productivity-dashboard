import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState(''); // State to store the input title

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    if (events.length) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  // Function to add a new event
  const addEvent = () => {
    if (eventTitle.trim()) {
      const newEvent = { date: selectedDate.toISOString().split('T')[0], title: eventTitle };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setEventTitle(''); // Reset input field after adding event
    }
  };

  // Function to remove an event
  const removeEvent = (eventToRemove) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event !== eventToRemove));
  };

  // Filter events for the selected date
  const filteredEvents = events.filter((event) => event.date === selectedDate.toISOString().split('T')[0]);

  return (
    <div className="min-h-screen bg-transparent py-8 px-4 sm:px-8">
      <div className="w-full  mx-auto bg-gradient-to-r from-purple-100 to-blue-200 rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">📅 Calendar</h2>

        {/* Calendar */}
        <div className="mb-6 flex justify-center">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="border-2 border-gray-300 rounded-xl shadow-lg transition-all hover:ring-2 hover:ring-blue-400"
          />
        </div>

        {/* Selected Date Info */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Selected Date: <span className="text-blue-500">{selectedDate.toDateString()}</span>
          </h3>
          
          {/* Input Field for Event Title */}
          <div className="mt-4 flex justify-center items-center space-x-4">
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-3 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter event title"
            />
            <button
              onClick={addEvent}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
            >
              Add Event
            </button>
          </div>
        </div>

        {/* Event List */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Events for Selected Date:</h3>
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500 text-center">No events for this date. Add an event above!</p>
          ) : (
            <ul className="space-y-4">
              {filteredEvents.map((event, index) => (
                <li
                  key={index}
                  className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md flex justify-between items-center transition-all hover:bg-blue-100"
                >
                  <span className="text-blue-700 font-medium">{event.title}</span>
                  <button
                    onClick={() => removeEvent(event)}
                    className="text-red-500 hover:text-red-700 transition-all"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;






