import React from 'react';

interface TemperatureConverterState {
  celsius: string;
  fahrenheit: string;
}

class TemperatureConverter extends React.Component<
  {},
  TemperatureConverterState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }

  /**
   * Handles the change event for the Celsius input field.
   * Converts the Celsius value to Fahrenheit and updates the component's state.
   * If the input is empty, it resets both Celsius and Fahrenheit values in the state.
   */
  handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = e.target.value;
    if (celsius === '') {
      this.setState({ celsius, fahrenheit: '' });
    } else {
      const fahrenheit = ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2);
      this.setState({ celsius, fahrenheit });
    }
  };

  /**
   * Handles the change event for the Fahrenheit input field.
   * Converts the Fahrenheit value to Celsius and updates the state.
   */
  handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = e.target.value;
    if (fahrenheit === '') {
      this.setState({ celsius: '', fahrenheit });
    } else {
      const celsius = (((parseFloat(fahrenheit) - 32) * 5) / 9).toFixed(2);
      this.setState({ celsius, fahrenheit });
    }
  };

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <div className="p-4 max-w-md mx-auto h-screen flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Temperature Converter
        </h1>
        <div className="mb-4">
          <label htmlFor="celsius" className="block mb-2 text-xl font-semibold">
            Celsius:
          </label>
          <input
            id="celsius"
            type="number"
            value={celsius}
            onChange={this.handleCelsiusChange}
            className="w-full p-2 border rounded"
            placeholder="Enter temperature in Celsius"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fahrenheit"
            className="block mb-2 text-xl font-semibold">
            Fahrenheit:
          </label>
          <input
            id="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={this.handleFahrenheitChange}
            className="w-full p-2 border rounded"
            placeholder="Enter temperature in Fahrenheit"
          />
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
