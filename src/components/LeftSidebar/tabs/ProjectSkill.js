import React, { useState, useContext } from 'react';

import AppContext from '../../../context/AppContext';
import { addItem, deleteItem, moveItemUp, moveItemDown } from '../../../utils';
import ItemHeading from '../../../shared/ItemHeading';
import ProjectSkillTabInput from './ProjectSkillTabInput';

const ProjectSkill = ({ data, onChange, identifier }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  const skillList = []
  for (var key in data.projectskill) {
    skillList.push(key)
  }
  // console.log("identifier",`${identifier}`) 

  return (

    <>
     
      {//modified  code
        skillList.map((val) => {
          switch (val) {
            case "frontend": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.frontend} onChange={onChange} skillList={val} identifier={identifier}  example="For ex: HTML, CSS, React JS"/>
                <hr className="my-6" />
              </>)
            case "backend": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.backend} onChange={onChange} skillList={val} identifier={identifier} example="For ex: Java, J2EE"/>
                <hr className="my-6" />
              </>)
            case "designpatterns": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.designpatterns} onChange={onChange} skillList={val} identifier={identifier} example="For ex: MVC, DAO, DTO and Factory"/>
                <hr className="my-6" />
              </>)
            case "rdbsapp": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.rdbsapp} onChange={onChange} skillList={val} identifier={identifier} example={"For ex:MySQL"}/>
                <hr className="my-6" />
              </>)
            case "tools": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.tools} onChange={onChange} skillList={val} identifier={identifier} example={"For ex:Visual Studio"}/>
                <hr className="my-6" />
              </>)
            case "duration": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.duration} onChange={onChange} skillList={val} identifier={identifier}/>
                <hr className="my-6" />
              </>)
            case "teamsize": return (
              <>
                <ProjectSkillTabInput data={data.projectskill.teamsize} onChange={onChange} skillList={val} identifier={identifier} example={"For ex: 5"}/>
                <hr className="my-6" />
              </>)

          }
        })
      }

    </>
  );
};


export default ProjectSkill;
