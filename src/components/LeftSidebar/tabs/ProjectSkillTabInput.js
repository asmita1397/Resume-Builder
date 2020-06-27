import React from 'react';
import Checkbox from '../../../shared/Checkbox';
import TextField from '../../../shared/TextField';
import { useTranslation } from 'react-i18next';

const ProjectSkillTabInput = ({ data, onChange, skillList, identifier, example }) => {
    /*  console.log("input", `${identifier}projectskill.${skillList}.heading`) */

    const { t } = useTranslation(['leftSidebar', 'app']);
    return (

        <>
            <div className="my-6 grid grid-cols-6 items-center">
            {/* add OR condition to it fpr which component you dont want checkbox  */}
 {skillList === "teamsize" ||  skillList ==="tools" || skillList === "duration" ? null :  <div className="col-span-1">
                    <Checkbox
                        checked={data.enable}
                        onChange={v => onChange(`${identifier}projectskill.${skillList}.enable`, v)}
                    />
                </div>}

                <div className="col-span-5">
                    <TextField
                        placeholder="Tools used in Projects"
                        value={data.heading}
                        onChange={v => onChange(`${identifier}projectskill.${skillList}.heading`, v)}
                    />
                </div>

            </div>


            {(skillList === "duration" ? <>

                <div className="grid grid-cols-1 col-gap-4">
                    <TextField
                        className="mb-12"
                        label={t('app:item.startDate.label')}
                        placeholder="Jan 2019"
                        type="month"
                        value={data.items.start}
                        onChange={v => onChange(`${identifier}projectskill.${skillList}.items.start`, v)}
                    />

                    <TextField
                        className="mb-12"
                        label={t('app:item.endDate.label')}
                        placeholder="Jun 2019"
                        value={data.items.end}
                        type="month"
                        onChange={v => onChange(`${identifier}projectskill.${skillList}.items.end`, v)}
                    />
                    <div className="my-6 grid grid-cols-6 items-center">
                        <div className="col-span-1">
                            <Checkbox
                                checked={data.endDateEnable}
                                onChange={v => onChange(`${identifier}projectskill.${skillList}.endDateEnable`, v)}
                            />
                        </div>

                        <div className="col-span-5">
                            <TextField
                                placeholder="End Date"
                                value={data.endDateValue}
                                onChange={v => onChange(`${identifier}projectskill.${skillList}.endDateValue`, v)}
                            />
                        </div>

                    </div>
                </div>

            </> : <TextField
                    placeholder={data.heading}
                    value={data.items}
                    onChange={v => onChange(`${identifier}projectskill.${skillList}.items`, v)}
                    example={example}
                />)}
        </>
    );
}

export default ProjectSkillTabInput;