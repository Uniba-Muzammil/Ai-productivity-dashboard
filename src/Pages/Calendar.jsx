import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Function to add a new event
  const addEvent = () => {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      const newEvent = { date: selectedDate.toISOString().split('T')[0], title: eventTitle };
      setEvents([...events, newEvent]);
    }
  };

  // Filter events for the selected date
  const filteredEvents = events.filter((event) => event.date === selectedDate.toISOString().split('T')[0]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">📅 Calendar App</h2>

        {/* Calendar */}
        <div className="mb-6">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="border rounded-lg shadow-sm"
          />
        </div>

        {/* Selected Date Info */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Selected Date: <span className="text-blue-500">{selectedDate.toDateString()}</span>
          </h3>
          <button
            onClick={addEvent}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Add Event
          </button>
        </div>

        {/* Event List */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Events for Selected Date:</h3>
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500 text-center">No events for this date. Add an event above!</p>
          ) : (
            <ul className="space-y-4">
              {filteredEvents.map((event, index) => (
                <li
                  key={index}
                  className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md flex justify-between items-center"
                >
                  <span className="text-blue-700 font-medium">{event.title}</span>
                  <button
                    onClick={() => {
                      setEvents(events.filter((e) => e !== event));
                    }}
                    className="text-red-500 hover:text-red-700"
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



