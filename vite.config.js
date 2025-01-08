import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Expose on all network interfaces
    port: 5173, // Ensure the correct port is specified
    https: false,
  },
  plugins: [react()],
});
