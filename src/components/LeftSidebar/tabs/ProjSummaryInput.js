import React, { useState, useContext } from 'react';

import AppContext from '../../../context/AppContext';
import Checkbox from '../../../shared/Checkbox';
import TextField from '../../../shared/TextField';
import { addItem, deleteItem, moveItemUp, moveItemDown, deleteItem1 } from '../../../utils';
import ItemHeading from '../../../shared/ItemHeading';
import SkillTabInput from './SkillTabInput';

const ProjSummaryInput = ({ onChange, identifier, indexOfItem,example }) => {

  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { data } = state

  

  return (

    <>

      {data.work.items[indexOfItem].summary.items.map((x, index) => (
        <Item item={x} key={index} index1={index} onChange={onChange} dispatch={dispatch} identifier1={identifier} indexOfItem={indexOfItem} />
      ))}

      <AddItem heading={data.projsummary.heading} dispatch={dispatch} indexOfItem={indexOfItem}  example={example}/>

    </>
  );
};

const Form = ({ item, onChange,formVal,example }) => {
  return (
    <>
    <textarea
      rows="5"
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      placeholder="Project Summary"
      value={item}
      onChange={e => onChange(e.target.value)}
      type="text"
    />
 {formVal=="add"?<small>{example}</small>:null}
 </>
  );
};

const AddItem = ({ heading, dispatch, indexOfItem,example }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState('');

  const add = (e) => {
    if (item === '') return;

    e.currentTarget.value == "para" ? addItem(dispatch, `work.items[${indexOfItem}].summary`, {
      buttonVal: e.currentTarget.value,
      description: item
    }) :
      addItem(dispatch, `work.items[${indexOfItem}].summary`, {
        buttonVal: e.currentTarget.value,
        description: item
      })

    setItem('');
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4">
            <Form item={item} onChange={setItem} formVal={"add"} example={example}/>
          </div>
          <button
            type="button"
            onClick={add}
            value="para"
            className="col-span-2 bg-gray-600 hover:bg-gray-700 text-sm font-medium rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-white text-lg">add</i>
              <span className="text-sm text-white">{"Add as para"}</span>
            </div>
          </button>
          <button
            type="button"
            onClick={add}
            value="bullet"
            className="col-span-2 bg-gray-600 hover:bg-gray-700 text-sm font-medium rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-white text-lg">add</i>
              <span className="text-sm text-white">{"Add as points"}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};


const Item = ({ item, index1, onChange, dispatch, identifier1, indexOfItem }) => {
  const identifier = `${identifier1}summary.items[${index1}].description`;

  return (
    <div className="my-4 grid grid-cols-12">
      <div className="col-span-11">
        <Form item={item.description} onChange={v => onChange(identifier, v)} formVal="input" />
      </div>



      <button
        type="button"
        onClick={() => deleteItem1(dispatch, `work.items[${indexOfItem}].summary`, item.description)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">close</i>
        </div>
      </button>
    </div>
  );
};

export default ProjSummaryInput;
