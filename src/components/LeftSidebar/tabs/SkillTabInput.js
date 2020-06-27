import React from 'react';
import Checkbox from '../../../shared/Checkbox';
import TextField from '../../../shared/TextField';
const SkillTabInput = ({ data, onChange, skillList }) => {
   
    return (

        <>
            <hr className="my-6" />
            
            <div className="my-6 grid grid-cols-6 items-center">
                <div className="col-span-1">
                    <Checkbox
                        checked={data.enable}
                        onChange={v => onChange(`data.skills1.${skillList}.enable`, v)}
                    />
                </div>
                <div className="col-span-5">
                    <TextField
                        placeholder="Technical skill heading "
                        value={data.heading}
                        onChange={v => onChange(`data.skills1.${skillList}.heading`, v)}
                    />
                </div>

            </div>

        </>
    );
}

export default SkillTabInput;