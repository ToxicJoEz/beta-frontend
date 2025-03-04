export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure React files are included
      "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Add Flowbite components
    ],
    theme: {
      extend: {},
    },
    plugins: [require("flowbite/plugin")], // Add Flowbite plugin
  };
  