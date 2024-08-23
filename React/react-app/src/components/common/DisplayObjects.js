import React from 'react'

const DisplayObjects = ({dataObj = {}, title=''}) => {
    console.log(dataObj);
    
  return (
    <div>
        <h2>{title}</h2>
        {Object.keys(dataObj).map(attr=> {
            return(
                <div key={attr}>
                    <span>{attr}</span>
                    <span>{dataObj[attr]}</span>
                </div>
            )
        })}
        'hello'
      
    </div>
  )
}

export default DisplayObjects
