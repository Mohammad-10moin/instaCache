import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './icons/shareicon'
import { Plusicon } from './icons/plusicon'
import { Card } from './components/Card'
function App() {

  return (
    <div>
      <Button variant="primary" text="share Brain" StartIcon={<ShareIcon/>}></Button>
      <Button variant="secondary" text="add Content" StartIcon={<Plusicon/>}></Button>
      <Card/>
    </div>
  )
}

export default App
