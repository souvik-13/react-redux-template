import { ThemeProvider } from "@/components/theme-provider";
import Counter from "@/features/counter/Counter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
        <Counter />
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;
