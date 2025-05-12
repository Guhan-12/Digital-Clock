# Digital Clock
The Digital component is a functional React component that displays a live digital clock in 12-hour format with AM/PM. It updates every second using React’s useEffect and setInterval.

# Features:
1. Displays current time in hh:mm:ss AM/PM format.
2. Uses useState to store and update the time.
3. useEffect sets up and clears the interval to ensure performance and memory efficiency.
4. Leading zeros are added for consistent formatting.

# How it Works:
1. On initial render, the component sets up a 1-second interval to update the time.
2. When the component unmounts, the interval is cleared using the cleanup function in useEffect.
3. The formatTime function formats the time and handles conversion to 12-hour format.
4. A helper function padZero is used to pad single-digit numbers with a leading zero.
