import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 1, 10),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 2399,
      date: new Date(2022, 9, 9),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={DUMMY_EXPENSES} />
    </div>
  );
}

export default App;
