import React from 'react';
import './RenderMembers.css';
import icon from './layer1.png';

function RenderMembers({ members }) {
    return (
        <div>
            <div className="socMembers"><p><img src={icon} alt="icon"></img><span>Name</span></p></div>
            <div id="statusMembers">
                <h3>Society Members</h3>

                {
                    members.map((member) => {
                        return (
                            <div key={member.flat} className="socMembers">
                                <p><img src={icon} alt="icon"></img><span>{member.name + ' :'} </span><span className="st"><strong>{member.status}</strong></span></p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RenderMembers
