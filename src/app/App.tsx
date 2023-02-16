import { Dashboard } from "./pages";
import { Header } from "./pages/dashboard/Header";
import "./styles/global.css";
import "/DEV/ToDo/to-do/src/app/styles/popover.css";

export const App = () => {
  return (
    <>
      <div className="bg-back_background w-screen h-screen flex justify-center items-center">
        <div className="bg-background rounded-lg h-full w-full max-w-5xl px-6 py-12 flex flex-col gap-16">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  );
};