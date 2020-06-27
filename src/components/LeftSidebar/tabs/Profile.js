import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '../../../shared/Dropdown';
import TextField from '../../../shared/TextField';
import educationList from './eduction.json';
import branchList from './branch.json';
import stackList from './stacks.json';
import months from './months.json';
import Checkbox from '../../../shared/Checkbox';
import DropDownOption from './DropDownOption';
const ProfileTab = ({ data, onChange,  }) => {
  const { t } = useTranslation('leftSidebar');


  return (
    <div>


      <div className="grid grid-cols-2 col-gap-4">
      <TextField
          className="mb-6"
          label="First Name"
          placeholder="Jane"
          value={data.profile.firstName.name}
          error={data.profile.firstName.error}
          onChange={v => onChange('data.profile.firstName.name', v,'data.profile.firstName.error',"string")}
        />
        

        <TextField
          className="mb-6"
          label="Last Name"
          placeholder="Doe"
          value={data.profile.lastName.name}
          error={data.profile.lastName.error}
          onChange={v => onChange('data.profile.lastName.name', v,'data.profile.lastName.error',"string")}
        />
      </div>


      <DropDownOption label={"Primary Skill"} onChange={onChange} options={stackList} dataKey={'data.profile.subtitle'} />

      <hr className="my-6" />


      <DropDownOption label={"Highest Education"} onChange={onChange} options={educationList} dataKey={'data.profile.education'} />
      <hr className="my-6" />

      <div className="my-6 grid grid-cols-6 items-center">
        <div className="col-span-1">
          <Checkbox
            checked={data.profile.branch.enable}
            onChange={v => onChange('data.profile.branch.enable', v)}
          />
        </div>
        <div className="col-span-5">
          <TextField
            disabled="true"
            placeholder="Summary"
            value={data.profile.branch.heading}
            onChange={v => onChange('data.branch.profile.heading', v)}
          />
        </div>
      </div>
      <DropDownOption /* label={"Branch"} */ onChange={onChange} options={branchList} dataKey={'data.profile.branch.items'} />

      <hr className="my-6" />
      <TextField
        className="mb-6"
        label="Total Exp."
        placeholder="total experience(for ex: 2.3)"
        value={data.profile.tolexp.name}
        // onChange={v => onChange('data.profile.tolexp', v)}
        example={"For example 2"}
        error={data.profile.tolexp.error}
        onChange={v => onChange('data.profile.tolexp.name', v,'data.profile.tolexp.error',"number")}
      />

<DropDownOption  label={"Months"}  onChange={onChange} options={months} dataKey={'data.profile.tolmonths'} />


      <hr className="my-6" />

      <TextField
        className="mb-6"
        label="Relevant Exp."
        placeholder="relevant experience(for ex: 2.3)"
        value={data.profile.relexp.name}
        example={"For example: 1"}
        // onChange={v => onChange('data.profile.relexp', v)}
        error={data.profile.relexp.error}
        onChange={v => onChange('data.profile.relexp.name', v,'data.profile.relexp.error',"number")}
      />
<DropDownOption label={"Months"} onChange={onChange} options={months} dataKey={'data.profile.relmonths'} />
      

    </div >
  );
};

export default ProfileTab;
