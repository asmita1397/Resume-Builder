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

const EducationTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  return (
    <>
      <div className="mb-6 grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Checkbox
            checked={data.education.enable}
            onChange={v => onChange('data.education.enable', v)}
          />
        </div>
        <div className="col-span-5">
          <TextField
            placeholder="Education"
            value={data.education.heading}
            onChange={v => onChange('data.education.heading', v)}
          />
        </div>
      </div>

      <hr className="my-6" />

      {data.education.items.map((x, index) => (
        <Item
          item={x}
          key={x.id}
          index={index}
          onChange={onChange}
          dispatch={dispatch}
          first={index === 0}
          last={index === data.education.items.length - 1}
        />
      ))}

      <AddItem heading={data.education.heading} dispatch={dispatch} />
    </>
  );
};

const Form = ({ item, onChange, identifier = '' }) => {
  const { t } = useTranslation(['leftSidebar', 'app']);

  return (
    <div>
      <TextField
        className="mb-6"
        label="Title"
        placeholder="SSLC"
        value={item.title}
        onChange={v => onChange(`${identifier}title`, v)}
        example={"For ex: SSLC"}
      />

      <TextField
        className="mb-6"
        label="College Name"
        placeholder="College Name"
        value={item.name}
        onChange={v => onChange(`${identifier}name`, v)}
        example={"For ex: RV College"}
      />

      <TextField
        className="mb-6"
        label="University"
        placeholder="University"
        value={item.university}
        onChange={v => onChange(`${identifier}university`, v)}
        example={"For ex: VTU, Belgavi"}
      />

      <TextField
        className="mb-6"
        label="Pass out Year"
        placeholder="2012"
        value={item.year}
        onChange={v => onChange(`${identifier}year`, v)}
        example={"For ex: 2020"}
      />


      <TextField
        className="mb-6"
        label="Percentage"
        placeholder="90"
        value={item.percentage}
        onChange={v => onChange(`${identifier}percentage`, v)}
        example={"For ex: 90"}
      />


    </div>
  );
};

const AddItem = ({ heading, dispatch }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState({
    id: uuidv4(),
    enable: true,
    title: '',
    name: '',
    university: '',
    year: '',
    percentage: '',

  });

  const onChange = (key, value) => setItem(set({ ...item }, key, value));

  const onSubmit = () => {
    if (item.name === '' || item.major === '') return;

    addItem(dispatch, 'education', item);

    setItem({
      id: uuidv4(),
      enable: true,
      title: '',
      name: '',
      university: '',
      year: '',
      percentage: '',
    });

    setOpen(false);
  };

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading heading={heading} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} />
        <AddItemButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const Item = ({ item, index, onChange, dispatch, first, last }) => {
  const [isOpen, setOpen] = useState(false);
  const identifier = `data.education.items[${index}].`;

  return (
    <div className="my-4 border border-gray-200 rounded p-5">
      <ItemHeading title={item.name} setOpen={setOpen} isOpen={isOpen} />

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <Form item={item} onChange={onChange} identifier={identifier} />

        <ItemActions
          dispatch={dispatch}
          first={first}
          identifier={identifier}
          item={item}
          last={last}
          onChange={onChange}
          type="education"
        />
      </div>
    </div>
  );
};

export default EducationTab;
