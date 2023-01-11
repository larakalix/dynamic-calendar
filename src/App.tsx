import { Header, MonthGrid, Sidebar } from "./components";
import { calendarStore } from "./store/CalendarStore";

function App() {
    // const { currentMonth } = calendarStore((state) => state);

    return (
        <div className="w-full h-screen flex flex-col">
            <Header />

            <div className="flex flex-1">
                <Sidebar />

                <div className="flex-1 h-full bg-green-400 p-4">
                    <MonthGrid />
                </div>
            </div>
        </div>
    );
}

export default App;
