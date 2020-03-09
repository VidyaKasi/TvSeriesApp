import React from 'react';
import loadersrc from  '../../Assets/loading-gif-transparent-4.gif';

const Loader = (props) =>(
    <div>
<img 
style={{ width: 75 }}
src={loadersrc} 
alt="loading image"/>
    </div>
);

export default Loader;