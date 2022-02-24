import "./App.css";
import Header from "./App/Components/Header";
import MemberTeam from "./App/Components/MemberTeam";
import TableTeams from "./App/Components/TableTeams";
import DateProvider from "./App/Providers/Date";
import TeamProvider from "./App/Providers/Team";

function App() {
  return (
    <DateProvider>
      <TeamProvider>
        <Header />
        <MemberTeam />
        <TableTeams />
      </TeamProvider>
    </DateProvider>
  );
}

export default App;
