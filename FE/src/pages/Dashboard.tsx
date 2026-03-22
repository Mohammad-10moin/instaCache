import { Button } from '../components/Button'
import { ShareIcon } from '../icons/shareicon'
import { Plusicon } from '../icons/plusicon'
import { Card } from '../components/Card'
import { CreateContent } from '../components/Add'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard(){
  const [addContent, setContent]=useState(false);
  const contents= useContent();
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-brainly-grey'>
        <div className='flex justify-end gap-4'>
          <Button variant="primary" text="share Brain" StartIcon={<ShareIcon/>}></Button>
          <Button onClick={()=>{setContent(true)}} variant="secondary" text="add Content" StartIcon={<Plusicon/>}></Button>
        </div>
        <div className='flex gap-4'>
          {contents?.map((items:any)=>
            <Card key={items.link} title={items.title} link={items.link} type={items.type}/>
          )}
        </div>
        <CreateContent open={addContent} onclose={()=>{setContent(false)}}/>
      </div>   
    </div>
  )
}

export default Dashboard