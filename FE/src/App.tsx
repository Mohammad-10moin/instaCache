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
      <div className='flex'>
        <Card title="Nasheed" link='https://www.youtube.com/watch?v=21WaGYBlb9M' type='youtube'/>
        <Card title="tweet" link='https://x.com/im10Moin/status/1960411425081581991?s=20' type='twitter'/>
      </div>
    </div>
  )
}

export default App
