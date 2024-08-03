
# React Background Color Changer

A simple React application that allows users to change the background color of a container by clicking on buttons with different colors. This project demonstrates the use of React components, state management, and event handling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project consists of a main `App` component and a reusable `Btn` component. The `App` component manages the background color of a container and passes color values to the `Btn` component. Each button, when clicked, changes the background color of the container to the color specified.

## Features

- Clickable buttons to change the background color of the container.
- Simple and clean React components.
- Responsive and styled with inline CSS.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-background-color-changer.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-background-color-changer
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. You should see a series of buttons. Clicking each button will change the background color of the container.

### Code Structure

- `src/App.js`: Main component that manages state and renders buttons.
- `src/component/button.js`: Reusable button component that triggers color changes.

## Example

Here is a brief overview of how the `App` and `Btn` components work together:

### App Component

Manages the background color state and passes color values to the `Btn` component.

```jsx
import React, { useState } from 'react';
import Btn from './component/button';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white'); // Default color

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        height: '100vh',
        width: '100vw',
        padding: '20px',
      }}
    >
      <Btn name='Red' color='red' onClick={handleColorChange} />
      <Btn name='Blue' color='blue' onClick={handleColorChange} />
      {/* More buttons */}
    </div>
  );
}

export default App;
```

### Btn Component

Receives `color` and `onClick` props and triggers the color change when clicked.

```jsx
import React from 'react';

function Btn({ name, color, onClick }) {
  return (
    <button
      onClick={() => onClick(color)}
      style={{ backgroundColor: color, boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
    >
      {name}
    </button>
  );
}

export default Btn;
```

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request. Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

### Notes

- Replace `https://github.com/your-username/react-background-color-changer.git` with the actual URL of your repository.
- Add additional sections if needed, such as documentation for more complex features or guidelines for contributing.
- If you use a different license, update the `License` section accordingly.

This `README.md` will help users understand your project, how to set it up, and how to use it effectively.
