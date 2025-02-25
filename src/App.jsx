import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './store/todo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function App() {
  const dispatch = useDispatch()
  const select = useSelector(state => state)
  console.log(select)

  const gsp=()=>{
    useGSAP(()=>{
      gsap.from('.gsap',{
        x:-100,
        delay:0.4,
        opacity:0
      })
    })
  }
  
  
  if (select.todo.isLoading){
    return <div className='w-full text-center h-screen flex items-center justify-center  bg-red-800'>
      <h1 className='text-4xl font-semibold text-white'>Loading...</h1>
    </div>
    
  }
  

  return (

    <div className=' bg-red-800 min-h-screen text-white flex flex-col items-center'>
    <h1 className=' text-4xl pt-6 pb-7'>Api calling using Redux Async Thunk</h1>
    <h2 className='text-xl'>Click on button for Api Calling</h2>
    <button className='bg-slate-50 text-red-900 my-5 py-2 px-4 text-2xl font-semibold uppercase' onClick={()=>dispatch(fetchTodos())}>click here</button>
    {
      select.todo.data && select.todo.data.map((e)=>(
        <div key={e.id} className={`gsap p-3 flex items-center gap-3`}>
          <input className='w-4 h-4' type="checkbox" checked={e.completed} readOnly/>
          <li className={`list-none ${e.completed && "line-through"}`}>{e.title}</li>
        </div>       
      ))
    }
    </div>
  )
}

export default App
