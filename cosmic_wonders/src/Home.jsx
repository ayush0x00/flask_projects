import React from 'react';

const Home=(props)=>{
    const data=props.data.map((item)=>{
      return(
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={item.image} style={{width:"220px",height:"220px",padding:"10px"}} alt={item.name} />
            </div>
            <div className="col"><h1>{item.name}</h1></div>
            <div className="col">{item.description}</div>
          </div>
        </div>
      )
    })
    return data;
}

export default Home;
