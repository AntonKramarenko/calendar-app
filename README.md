# Start project

1)npm i
2)npm start

# About project

App - Calendar of events.
New user of the application

1. Go to the application page and see a page that consists of:

- Form opening button.
- Filter by date. By default, the current month is selected.
- Calendar grid of the selected month in the filter. It consists of days (cells).
  The cell includes:
- Number of the day of the month (1, 2, 3)
- Weekday
- List of events
- The cell corresponding to the current day is visually highlighted.

2. Filter by date

- buttons "<" and ">" change the month cyclically
- the calendar button opens the date picker with the ability to select the year and
  moon

Create an event

- click on the event creation button
- an unfilled form will open. The form consists of 3 fields:
- Title (required)
- Description
- Date (required)
- The "Save" button saves and closes the form

4. Editing/deleting events

- Clicking the event opens the completed form in editing mode. It is on the form
  created at/ updated at
- the "save" button updates the event and closes the form
- the "save" button updates the event and closes the form

Requirements:

1. The application saves the state of filters after reloading the page
2. The application uses localstorage as data storage. A replacement is planned
   implementation of storage
