import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import set from 'lodash/set';

import TextField from '../../../shared/TextField';
import TextArea from '../../../shared/TextArea';
import AppContext from '../../../context/AppContext';
import Checkbox from '../../../shared/Checkbox';
import { addItem } from '../../../utils';
import ItemActions from '../../../shared/ItemActions';
import AddItemButton from '../../../shared/AddItemButton';
import ItemHeading from '../../../shared/ItemHeading';
import ProjectSkillTabInput from './ProjectSkillTabInput';
import ProjectSkill from './ProjectSkill';
import ProjSummary from './ProjSummary';
import ProjSummaryInput from './ProjSummaryInput';
import ProjResp from './ProjResp';
import ProjRespInput from './ProjRespInput';

const WorkTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  return (
    <>
      <div className="mb-6 grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Checkbox checked={data.work.enable} onChange={v => onChange('data.work.enable', v)} />
        </div>
        <div className="col-span-5">
          <TextField
            placeholder="Project Details"
            value={data.work.heading}
            onChange={v => onChange('data.work.heading', v)}
          />
        </div>
      </div>

      <hr className="my-6" />

      {data.work.items.map((x, index) => (
        <Item
          dispatch={dispatch}
          first={index === 0}
          index={index}
          item={x}
          key={x.id}
          last={index === data.work.items.length - 1}
          onChange={onChange}
        />
      ))}

      <AddItem data={data} heading={data.work.heading} dispatch={dispatch} onChange1={onChange} />

    </>
  );
};

const Form = ({ item, onChange, identifier = '', onChange1, indexOfItem }) => {
  const { t } = useTranslation(['leftSidebar', 'app']);
  console.log("identifier", `${identifier}`)
  console.log("work identifier", identifier)
  return (
    <div>

      <TextField
        className="mb-6"
        label="Project Name"
        placeholder="Project Name"
        value={item.title}
        onChange={v => onChange(`${identifier}title`, v)}
        example={"For ex: Eletter"}
      />
      <ProjectSkill data={item} onChange={onChange} identifier={identifier} />

      <br />

      <TextField
        className="mb-6"
        label="Summary"
        placeholder="Summary"
        value={item.summary.heading}
        onChange={v => onChange(`${identifier}summary.heading`, v)}
        example={""}
      />


      {identifier == '' ? <ProjSummary onChange={onChange1} example="For ex: Developed the application as part of J2EE Course"/> :
       <ProjSummaryInput onChange={onChange} identifier={identifier} indexOfItem={indexOfItem} example="For ex: Developed the application as part of J2EE Course" />}
      <hr className="my-6" />
    
      <TextField
        className="mb-6"
        label="Responsibility"
        placeholder="Responsibility"
        value={item.responsibility.heading}
        onChange={v => onChange(`${identifier}responsibility.heading`, v)}
      />
       <TextArea
        className="mb-6"
        label="Responsibility Description"
        placeholder="Responsibility Description"
        value={item.responsibility.description}
        onChange={v => onChange(`${identifier}responsibility.description`, v)}
        example={"For ex: As a Developer, I was involved in"}
      />
      {identifier == '' ? <ProjResp onChange={onChange1}  example={"For ex: Designing UI’s part by HTML & CSS"}/> :
       <ProjRespInput onChange={onChange} identifier={identifier} indexOfItem={indexOfItem} example={"For ex: Designing UI’s part by HTML & CSS"}/>}

     
    </div>
  );
};

const AddItem = ({ data, heading, dispatch, onChange1 }) => {
  const [isOpen, setOpen] = useState(false);

  const [item, setItem] = useState({
    id: uuidv4(),
    enable: true,
    title: '',
    projectskill: {
      frontend: {
        enable: true,
        heading: 'Front End Technologies',
        items: "",
      },
      backend: {
        enable: true,
        heading: 'Back End Technologies',
        items: ""
      },
      designpatterns: {
        enable: true,
        heading: 'Design Patterns used',
        items: ""
      },
      rdbsapp: {
        enable: true,
        heading: 'RDBMS Application',
        items: "Oracle 10g and MySQL 5.5",
      },
      tools: {
        enable: true,
        heading: 'Tools Used',
        items: "Apache Tomcat 8.0",
      },
      duration: {
        enable: true,
        heading: 'Duration',
        endDateEnable: true,
        endDateValue:'till now',
        items: {
          start: '',
          end: '',
        }
      },
      teamsize: {
        enable: true,
        heading: 'Team Size',
        items: "",
      },
    },
    summary: {
      enable:true,
      heading:"Summary",
      items: data.projsummary.items
    },
    responsibility: {
      enable:true,
      heading: "Responsibilities",
      description:'',
      items: data.projresp.items
    },


  });



  const onChange = (key, value) => setItem(set({ ...item }, key, value));

  const onSubmit = () => {
    if (item.title === '' || item.role === '') return;

    addItem(dispatch, 'work', item);

    setItem({
      id: uuidv4(),
      enable: true,
      title: '',
      projectskill: {
        frontend: {
          enable: true,
          heading: 'Front End Technologies',
          items: "",
        },
        backend: {
          enable: true,
          heading: 'Back End Technologies',
          items: ""
        },
        designpatterns: {
          enable: true,
          heading: 'Design Patterns used',
          items: ""
        },
        rdbsapp: {
          enable: true,
          heading: 'RDBMS Application',
          items: "Oracle 10g and MySQL 5.5",
        },
        tools: {
          enable: true,
          heading: 'Tools Used',
          items: "Apache Tomcat 8.0",
        },
        duration: {
          enable: true,
          heading: 'Duration',
          items: {
            start: '',
            end: '',
          }
        },
        teamsize: {
          enable: true,
          heading: 'Team Size',
          items: "",
        },

      },
      summary: '',
      responsibility: '',

    });

    setOpen(false);
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} identifier='' onChange1={onChange1} />

        <AddItemButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const Item = ({ item, index, onChange, dispatch, first, last }) => {
  const [isOpen, setOpen] = useState(false);
  const identifier = `data.work.items[${index}].`;

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading title={item.title} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} identifier={identifier} indexOfItem={index} />

        <ItemActions
          dispatch={dispatch}
          first={first}
          identifier={identifier}
          item={item}
          last={last}
          onChange={onChange}
          type="work"
        />
      </div>
    </div>
  );
};

export default WorkTab;
