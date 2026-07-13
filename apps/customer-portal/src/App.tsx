import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {

  return (
    <>
      <h1>Complete Frontend Dev and Deployment LifeCycle</h1>
      <Button onClick={() => {alert(formatCurrency(12345))}} />
      <p>Some new feature!</p>
      <div >something</div>
    </>
  )
}

export default App
