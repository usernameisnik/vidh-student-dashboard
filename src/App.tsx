import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentOverview } from "./screens/StudentOverview/StudentOverview";

export const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentOverview />} />
            </Routes>
        </BrowserRouter>
    );
};
