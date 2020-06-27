import React, { useState, useContext } from 'react';

import AppContext from '../../../context/AppContext';
import Checkbox from '../../../shared/Checkbox';
import TextField from '../../../shared/TextField';
import { addItem, deleteItem, moveItemUp, moveItemDown } from '../../../utils';
import ItemHeading from '../../../shared/ItemHeading';
import SkillTabInput from './SkillTabInput';

const SkillsTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  console.log("ppppppppp", onChange)
  const skillList = []
  for (var key in data.skills1) {
    skillList.push(key)
  }


  // console.log("skillList", skillList)
  return (

    <>


      {/*  <div className="my-6 grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Checkbox
            checked={data.skills.enable}
            onChange={v => onChange('data.skills.enable', v)}
          />
        </div>
        <div className="col-span-5">
          <TextField
            placeholder="Heading"
            value={data.skills.heading}
            onChange={v => onChange('data.skills.heading', v)}
          />
        </div>

      </div>*/}
      {/* <hr className="my-6" /> 

       {data.skills.items.map((x, index) => (
        <Item item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
      ))}

      <AddItem heading={data.skills.heading} dispatch={dispatch} />  */}





      {//modified  code
        skillList.map((val) => {
          switch (val) {
            case "languages": return (
              <>
                <SkillTabInput data={data.skills1.languages} onChange={onChange} skillList={val} />
                {data.skills1.languages.items.map((x, index) => (
                  <Item1 heading={data.skills1.languages.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.languages.heading} dispatch={dispatch} example={"Java"} />

              </>)
            case "technology": return (
              <>
                <SkillTabInput data={data.skills1.technology} onChange={onChange} skillList={val} />
                {data.skills1.technology.items.map((x, index) => (
                  <Item1 heading={data.skills1.technology.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.technology.heading} dispatch={dispatch} example={"JSP and JDBC"} />
              </>)
            case "frontend": return (
              <>
                <SkillTabInput data={data.skills1.frontend} onChange={onChange} skillList={val} />
                {data.skills1.frontend.items.map((x, index) => (
                  <Item1 heading={data.skills1.frontend.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.frontend.heading} dispatch={dispatch} example={"HTML"} />
              </>)
            case "backend": return (
              <>
                <SkillTabInput data={data.skills1.backend} onChange={onChange} skillList={val} />
                {data.skills1.backend.items.map((x, index) => (
                  <Item1 heading={data.skills1.backend.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.backend.heading} dispatch={dispatch} example={"J2EE"} />
              </>)
            case "designpatterns": return (
              <>
                <SkillTabInput data={data.skills1.designpatterns} onChange={onChange} skillList={val} />
                {data.skills1.designpatterns.items.map((x, index) => (
                  <Item1 heading={data.skills1.designpatterns.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.designpatterns.heading} dispatch={dispatch} example={"Singleton"} />
              </>)
            case "rdbsapp": return (
              <>
                <SkillTabInput data={data.skills1.rdbsapp} onChange={onChange} skillList={val} />
                {data.skills1.rdbsapp.items.map((x, index) => (
                  <Item1 heading={data.skills1.rdbsapp.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.rdbsapp.heading} dispatch={dispatch} example={"MySQl 5.5"} />
              </>)
            case "webservers": return (
              <>
                <SkillTabInput data={data.skills1.webservers} onChange={onChange} skillList={val} />
                {data.skills1.webservers.items.map((x, index) => (
                  <Item1 heading={data.skills1.webservers.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.webservers.heading} dispatch={dispatch} example={"Apache Tomcat 8.0"} />
              </>)
            case "aws": return (
              <>
                <SkillTabInput data={data.skills1.aws} onChange={onChange} skillList={val} />
                {data.skills1.aws.items.map((x, index) => (
                  <Item1 heading={data.skills1.aws.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.aws.heading} dispatch={dispatch} example={"EC2"} />
              </>)
            case "cdtools": return (
              <>
                <SkillTabInput data={data.skills1.cdtools} onChange={onChange} skillList={val} />
                {data.skills1.cdtools.items.map((x, index) => (
                  <Item1 heading={data.skills1.cdtools.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.cdtools.heading} dispatch={dispatch} example={"SonarLint"} />
              </>)
            case "vcsystem": return (
              <>
                <SkillTabInput data={data.skills1.vcsystem} onChange={onChange} skillList={val} />
                {data.skills1.vcsystem.items.map((x, index) => (
                  <Item1 heading={data.skills1.vcsystem.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.vcsystem.heading} dispatch={dispatch} example={"GitHub"} />
              </>)
            case "batool": return (
              <>
                <SkillTabInput data={data.skills1.batool} onChange={onChange} skillList={val} />
                {data.skills1.batool.items.map((x, index) => (
                  <Item1 heading={data.skills1.batool.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.batool.heading} dispatch={dispatch} example={"Maven"} />
              </>)
            case "cicdtool": return (
              <>
                <SkillTabInput data={data.skills1.cicdtool} onChange={onChange} skillList={val} />
                {data.skills1.cicdtool.items.map((x, index) => (
                  <Item1 heading={data.skills1.cicdtool.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.cicdtool.heading} dispatch={dispatch} example={"Jenkins"} />
              </>)
            case "othertools": return (
              <>
                <SkillTabInput data={data.skills1.othertools} onChange={onChange} skillList={val} />
                {data.skills1.othertools.items.map((x, index) => (
                  <Item1 heading={data.skills1.othertools.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.othertools.heading} dispatch={dispatch} example={"Fiddler"} />
              </>)
            case "sdlc": return (
              <>
                <SkillTabInput data={data.skills1.sdlc} onChange={onChange} skillList={val} />
                {data.skills1.sdlc.items.map((x, index) => (
                  <Item1 heading={data.skills1.sdlc.heading} skillList={val} item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
                ))}
                <AddItem1 skillList={val} heading={data.skills1.sdlc.heading} dispatch={dispatch} example={"Waterfall Model and Agile"} />
              </>)
          }
        })

      }






    </>
  );
};

const Form = ({ heading, item, onChange, formVal,example }) => {
  return (
    <>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={heading}
        value={item}
        onChange={e => onChange(e.target.value)}
        type="text"
      />
      {formVal=="add"?<small>For ex: {example}</small>:null}
    </>
  );
};


const AddItem1 = ({ skillList, heading, dispatch, example }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState('');

  const add = () => {
    if (item === '') return;

    addItem(dispatch, `skills1.${skillList}`, item);

    setItem('');
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Form heading={heading} item={item} onChange={setItem} formVal={"add"} example={example} />
          </div>

          <button
            type="button"
            onClick={add}
            className="col-span-1 bg-gray-600 hover:bg-gray-700 text-sm font-medium rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons font-bold text-white text-lg">add</i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};


const Item1 = ({ heading, skillList, item, index, onChange, dispatch }) => {
  const identifier = `data.skills1.${skillList}.items[${index}]`;

  return (
    <div className="my-4 grid grid-cols-12">
      <div className="col-span-9">
        <Form heading={heading} item={item} onChange={v => onChange(identifier, v)} formVal={"input"} />
      </div>

      <button
        type="button"
        onClick={() => moveItemUp(dispatch, `skills1.${skillList}`, item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">arrow_upward</i>
        </div>
      </button>

      <button
        type="button"
        onClick={() => moveItemDown(dispatch, `skills1.${skillList}`, item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">arrow_downward</i>
        </div>
      </button>

      <button
        type="button"
        onClick={() => deleteItem(dispatch, `skills1.${skillList}`, item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">close</i>
        </div>
      </button>
    </div>
  );
};
export default SkillsTab;
