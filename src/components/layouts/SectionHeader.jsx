import React from 'react'

const SectionHeader = ({subHeader, mainHeader}) => {
  return (
    <div>
        <h3 className="uppercase text-gray-500 font-semibold">{subHeader}</h3>
        <h2 className="text-primary  text-4xl mb-4  font-bold">{mainHeader}</h2>
     
    </div>
  )
}

export default SectionHeader