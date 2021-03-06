import React, { useState, useContext } from 'react';

import AppContext from '../../context/AppContext';
import TabBar from '../../shared/TabBar';
import ProfileTab from './tabs/Profile';
import ObjectiveTab from './tabs/Objective';
import WorkTab from './tabs/Work';
import EducationTab from './tabs/Education';
import AwardsTab from './tabs/Awards';
import CertificationsTab from './tabs/Certifications';
import SkillsTab from './tabs/Skills';
import ExtrasTab from './tabs/Extras';
import LanguagesTab from './tabs/Languages';
import ReferencesTab from './tabs/References';
import HobbiesTab from './tabs/Hobbies';
import ProjectSkillsTab from './tabs/ProjectSkill';

const LeftSidebar = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data } = state;
  //modified code
  const tabs = [
    { key: 'profile', name: data.profile.heading },
    { key: 'objective', name: data.objective.heading },
    { key: 'skills', name: data.skills.heading },
    { key: 'education', name: data.education.heading },
    { key: 'awards', name: data.awards.heading },
    { key: 'work', name: data.work.heading },



  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].key);
  // const onChange = (key, value) => {
  //   console.log("key of the event", value)
  //   dispatch({
  //     type: 'on_input',
  //     payload: {
  //       key,
  //       value,
  //     },
  //   });

  //   dispatch({ type: 'save_data' });
  // };




  const onChange = (key, value, errorKey, errorType) => {

    console.log("key of the event", value)
    dispatch({
      type: 'on_input',
      payload: {
        key,
        value,
      },
    });
    switch (errorType) {
      case "string":  if(value=="")
                      {
                        dispatch({type: 'on_input',payload: { key:errorKey, value:"field is empty"},});
                      }
                      else if(!value.match(/[a-zA-Z]+/))
                         {
                          dispatch({type: 'on_input',payload: { key:errorKey, value:"alphabets only!!"},});
                         }
                      else
                      {
                        dispatch({type: 'on_input',payload: { key:errorKey, value:""},});
                      }
break;
                      case "number":  if(value=="")
                      {
                        dispatch({type: 'on_input',payload: { key:errorKey, value:"field is empty"},});
                      }
                      else if(!value.match(/[0-9]+/))
                         {
                          dispatch({type: 'on_input',payload: { key:errorKey, value:"numbers only!!"},});
                         }
                      else
                      {
                        dispatch({type: 'on_input',payload: { key:errorKey, value:""},});
                      }
                      break;

    }

    dispatch({ type: 'save_data' });
  };





  const renderTabs = () => {
    
    switch (currentTab) {
      case 'profile':
        return <ProfileTab data={data} onChange={onChange} />;
      case 'objective':
        return <ObjectiveTab data={data} onChange={onChange} />;
      case 'skills':
        return <SkillsTab data={data} onChange={onChange} />;
      case 'education':
        return <EducationTab data={data} onChange={onChange} />;
      case 'awards':
        return <AwardsTab data={data} onChange={onChange} />;
      case 'work':
        return <WorkTab data={data} onChange={onChange} />;


      default:
        return null;
    }
  };

  return (
    <div
      id="leftSidebar"
      className="animated slideInLeft z-10 py-6 h-screen bg-white col-span-1 shadow-2xl overflow-y-scroll"
    >
      <TabBar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="px-6">{renderTabs()}</div>
    </div>
  );
};

export default LeftSidebar;
