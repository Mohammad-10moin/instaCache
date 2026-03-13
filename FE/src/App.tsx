import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './icons/shareicon'
import { Plusicon } from './icons/plusicon'
import { Card } from './components/Card'
import { CreateContent } from './components/Add'
import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
function App() {
  const [addContent, setContent]=useState(false);
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-brainly-grey'>
        <div className='flex justify-end gap-4'>
          <Button variant="primary" text="share Brain" StartIcon={<ShareIcon/>}></Button>
          <Button onClick={()=>{setContent(true)}} variant="secondary" text="add Content" StartIcon={<Plusicon/>}></Button>
        </div>
        <div className='flex gap-4'>
          <Card title="Youtube" link='https://www.youtube.com/watch?v=21WaGYBlb9M' type='youtube'/>
          <Card title="tweet" link='https://x.com/im10Moin/status/1960411425081581991?s=20' type='twitter'/>
        </div>
        <CreateContent open={addContent} onclose={()=>{setContent(false)}}/>
      </div>   
    </div>
  )
}

export default App
