import React from 'react'

const App = () => {

  const relatives = ['jai Hanuman ', 'sree Ram ', 'Sita Maa', 'Lakshaman baladev', 'manasa Brahma ', 'Vishnu sarvanta', 'Shankar sarveswara' ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol id='relativeList'>
                {relatives.map((item,index)=>{

                  return  <li id={'relativeListItem'+index}>{item}</li>
                })}
               </ol>
    </div>
  )
}

export default App