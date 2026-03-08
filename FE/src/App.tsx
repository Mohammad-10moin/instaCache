import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './icons/shareicon'
import { Plusicon } from './icons/plusicon'
import { Card } from './components/Card'
function App() {

  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button variant="primary" text="share Brain" StartIcon={<ShareIcon/>}></Button>
        <Button variant="secondary" text="add Content" StartIcon={<Plusicon/>}></Button>
      </div>
      <div className='flex gap-4'>
        <Card title="Nasheed" link='https://www.youtube.com/watch?v=21WaGYBlb9M' type='youtube'/>
        <Card title="tweet" link='https://x.com/im10Moin/status/1960411425081581991?s=20' type='twitter'/>
      </div>
    </div>
  )
}

export default App
