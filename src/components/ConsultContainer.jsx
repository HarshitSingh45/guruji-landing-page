import React,{useState} from 'react'
import RowContainer from './RowContainer'
import {consultMethods, scenario} from '../utils/data'


export default function ConsultContainer() {
    const [sce, setSce] = useState(false);
    const [data, setData] = useState(consultMethods);

  return (
    <section className='w-full my-6'>

        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-black relative
          m-auto'>
            All the problem you can consult and get answer
          </p>

        </div>
        <div className='flex items-center justify-center gap-4 mt-10'>
        <button 
          type='button'
          style={sce ? {backgroundColor: 'black'} : {backgroundColor: 'grey'}}
          className=' bg-black text-white  px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'
          onClick={()=>{setSce(!sce); setData(scenario)}}
          >
            Scenario
          </button>
          <button 
          type='button'
          style={!sce ? {backgroundColor: 'black'} : {backgroundColor: 'grey'}}
          onClick={()=>{setSce(!sce); setData(consultMethods)}}
          className='bg-black text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'>
            Consult Methods
          </button>
        </div>
        
        <RowContainer 
          flag={true}
          data= {data}
          />
      </section>
  )
}
