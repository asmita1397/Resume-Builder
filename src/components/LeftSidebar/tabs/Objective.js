import React, { useState, useContext } from 'react';

import AppContext from '../../../context/AppContext';
import Checkbox from '../../../shared/Checkbox';
import TextField from '../../../shared/TextField';
import { addItem, deleteItem, moveItemUp, moveItemDown } from '../../../utils';
import ItemHeading from '../../../shared/ItemHeading';


const ObjectiveTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  console.log("ppppppppp", onChange)
/*   const skillList = []
  for (var key in data.objective1) {
    skillList.push(key)
  }
 */


  return (

    <>


      <div className="my-6 grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Checkbox
            checked={data.objective.enable}
            onChange={v => onChange('data.objective.enable', v)}
          />
        </div>
        <div className="col-span-5">
          <TextField
            placeholder="Summary"
            value={data.objective.heading}
            onChange={v => onChange('data.objective.heading', v)}
          />
        </div>
      </div>
      <hr className="my-6" />

      {data.objective.items.map((x, index) => (
        <Item item={x} key={index} index={index} onChange={onChange} dispatch={dispatch} />
      ))}

      <AddItem heading={data.objective.heading} dispatch={dispatch} />

    </>
  );
};

const Form = ({ item, onChange ,formVal}) => {
  return (
    <>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="Summary Objective"
        value={item}
        onChange={e => onChange(e.target.value)}
        type="text"

      />
      { formVal=="add"?<small>For ex: Working as a Developer</small>:null}
    </>
  );
};

const AddItem = ({ heading, dispatch }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState('');

  const add = () => {
    if (item === '') return;

    addItem(dispatch, 'objective', item);

    setItem('');
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Form item={item} onChange={setItem} formVal={"add"} />
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

const Item = ({ item, index, onChange, dispatch }) => {
  const identifier = `data.objective.items[${index}]`;

  return (
    <div className="my-4 grid grid-cols-12">
      <div className="col-span-9">
        <Form item={item} onChange={v => onChange(identifier, v)}  formVal={"input"} />
      </div>

      <button
        type="button"
        onClick={() => moveItemUp(dispatch, 'objective', item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">arrow_upward</i>
        </div>
      </button>

      <button
        type="button"
        onClick={() => moveItemDown(dispatch, 'objective', item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">arrow_downward</i>
        </div>
      </button>

      <button
        type="button"
        onClick={() => deleteItem(dispatch, 'objective', item)}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg">close</i>
        </div>
      </button>
    </div>
  );
};

export default ObjectiveTab;




