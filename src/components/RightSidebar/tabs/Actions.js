/* eslint-disable new-cap */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '../../../shared/TextField';
import stackList from '../../../components/LeftSidebar/tabs/stacks.json'
import PageContext from '../../../context/PageContext';
import DropDownOption from '../../../components/LeftSidebar/tabs/DropDownOption';
import fontList from './fontFamily.json';
// import { importJson } from '../../../utils';


const ActionsTab = ({ data, theme, dispatch, onChange }) => {
  const pageContext = useContext(PageContext);
  const { setPrintDialogOpen } = pageContext;
  const { t } = useTranslation('rightSidebar');
  const fileInputRef = useRef(null);

  // const exportToJson = () => {
  //   const backupObj = { data, theme };
  //   const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(backupObj))}`;
  //   const dlAnchor = document.getElementById('downloadAnchor');
  //   dlAnchor.setAttribute('href', dataStr);
  //   dlAnchor.setAttribute('download', `RxResumeBackup_${Date.now()}.json`);
  //   dlAnchor.click();
  // };
  /* const fontOptions = [
    'Lato',
    'Montserrat',
    'Nunito',
    'Open Sans',
    'Raleway',
    'Rubik',
    'Source Sans Pro',
    'Titillium Web',
    'Ubuntu',
    'Bahnschrift SemiCondensed',
    'Segoe UI',
    'Book Antiqua'
  ]; */
  // const loadDemoData = () => {
  //   dispatch({ type: 'load_demo_data' });
  //   dispatch({ type: 'save_data' });
  // };

  const resetEverything = () => {
    dispatch({ type: 'reset' });
    dispatch({ type: 'save_data' });
  };


  return (
    <div>
      {/* <div className="shadow text-center text-sm p-5">{t('actions.disclaimer')}</div> */}

      {/* <hr className="my-6" /> */}

      {/* <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.importExport.heading')}</h6>

        <p className="text-sm">{t('actions.importExport.body')}</p>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => importJson(e, dispatch)}
        />
        <a id="downloadAnchor" className="hidden" />

        <div className="mt-4 grid grid-cols-2 col-gap-6">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">publish</i>
              <span className="text-sm">{t('actions.importExport.buttons.import')}</span>
            </div>
          </button>

          <button
            type="button"
            onClick={exportToJson}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons mr-2 font-bold text-base">get_app</i>
              <span className="text-sm">{t('actions.importExport.buttons.export')}</span>
            </div>
          </button>
        </div>
      </div> */}

      {/* <hr className="my-6" /> */}

      {/* <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.downloadResume.heading')}</h6>
        <div className="text-sm">{t('actions.downloadResume.body')}</div>

        <button
          type="button"
          onClick={() => setPrintDialogOpen(true)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">save</i>
            <span className="text-sm">{t('actions.downloadResume.buttons.saveAsPdf')}</span>
          </div>
        </button>
      </div> */}

      {/* <hr className="my-6" /> */}

      {/* <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.loadDemoData.heading')}</h6>

        <div className="text-sm">{t('actions.loadDemoData.body')}</div>

        <button
          type="button"
          onClick={loadDemoData}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">flight_takeoff</i>
            <span className="text-sm">{t('actions.loadDemoData.buttons.loadData')}</span>
          </div>
        </button>
      </div> */}

      {/* <hr className="my-6" /> */}

      <div className="shadow text-center p-5">
        <h6 className="font-bold text-sm mb-2">{t('actions.reset.heading')}</h6>

        <div className="text-sm">{t('actions.reset.body')}</div>

        <button
          type="button"
          onClick={resetEverything}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-5 rounded"
        >
          <div className="flex justify-center items-center">
            <i className="material-icons mr-2 font-bold text-base">refresh</i>
            <span className="text-sm">{t('actions.reset.buttons.reset')}</span>
          </div>
        </button>
      </div>

   <hr className="my-6" />
      

      <div>
       {/*  <TextField
          className="mb-3"
          label={t('fonts.fontFamily.label')}
          placeholder="Avenir Next"
          value={theme.font.family}
          onChange={v => onChange('theme.font.family', v)}
        /> */}
        <DropDownOption  label={t('fonts.fontFamily.label')} onChange={onChange} options={fontList} dataKey={'theme.font.family'} />

       {/*  <p className="text-gray-800 text-xs">{t('fonts.fontFamily.helpText')}</p> */}
      </div>
   
    </div>
  );
};

export default ActionsTab;
