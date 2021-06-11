import React from 'react';

function RenderMembers({members}) {
    return (
        <div>
            {
                members.map((member) => {
                    return(
                        <div key={member.flat}>
                            <p><span>{member.name+' :'} </span><strong>{member.status}</strong></p>
                        </div>
                    )    
                })
            }
        </div>
    )
}

export default RenderMembers
