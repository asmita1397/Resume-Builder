/* eslint-disable new-cap */
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { savePDF } from '@progress/kendo-react-pdf';

const move = (array, element, delta) => {
  const index = array.indexOf(element);
  const newIndex = index + delta;
  if (newIndex < 0 || newIndex === array.length) return;
  const indexes = [index, newIndex].sort((a, b) => a - b);
  array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]);
};

const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

const copyToClipboard = text => {
  const textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  const successful = document.execCommand('copy');
  document.body.removeChild(textArea);
  return successful;
};

const saveData = dispatch => dispatch({ type: 'save_data' });

const addItem = (dispatch, key, value) => {
  dispatch({
    type: 'add_item',
    payload: {
      key,
      value,
    },
  });

  saveData(dispatch);
};

const deleteItem = (dispatch, key, value) => {
  dispatch({
    type: 'delete_item',
    payload: {
      key,
      value,
    },
  });

  saveData(dispatch);
};

const deleteItem1 = (dispatch, key, value) => {
  dispatch({
    type: 'delete_item1',
    payload: {
      key,
      value,
    },
  });

  saveData(dispatch);
};

const moveItemUp = (dispatch, key, value) => {
  dispatch({
    type: 'move_item_up',
    payload: {
      key,
      value,
    },
  });

  saveData(dispatch);
};

const moveItemDown = (dispatch, key, value) => {
  dispatch({
    type: 'move_item_down',
    payload: {
      key,
      value,
    },
  });

  saveData(dispatch);
};

const importJson = (event, dispatch) => {
  const fr = new FileReader();
  fr.addEventListener('load', () => {
    const importedObject = JSON.parse(fr.result);
    dispatch({ type: 'import_data', payload: importedObject });
    dispatch({ type: 'save_data' });
  });
  fr.readAsText(event.target.files[0]);
};

const saveAsPdf = (pageRef, panZoomRef, quality, type) => {
  panZoomRef.current.autoCenter(1);
  panZoomRef.current.reset();
  setTimeout(() => {
  savePDF(pageRef.current, {
    allPages: true,
    paperSize: 'A4',
    fileName: `mmm.pdf`,
    scale: 0.75,

  })
},500)
}
/* new Promise(resolve => {
  panZoomRef.current.autoCenter(1);
  panZoomRef.current.reset();

  setTimeout(() => {
    html2canvas(pageRef.current, {
      scale: 7,
      useCORS: true,
      allowTaint: true,
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpeg', quality / 100);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: type === 'unconstrained' ? [canvas.width, canvas.height] : 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      let marginX = 0;
      let marginY = 0;

      if (type !== 'unconstrained') {
        marginX = (pageWidth - canvasWidth) / 2;
        marginY = (pageHeight - canvasHeight) / 2;
      }

      doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight, null, 'FAST');
      // doc.save(`RxResume_${Date.now()}.pdf`);
      const dataLoc=JSON.parse(localStorage.getItem('state'))
      // doc.save(`RxResume_${Date.now()}.pdf`);
      doc.save(`TestYantra_${dataLoc.data.profile.firstName.name} ${dataLoc.data.profile.lastName.name}_${dataLoc.data.profile.subtitle}_${dataLoc.data.profile.tolexp}
      .pdf`);
      resolve();
    });
  }, 250);
});
*/
const saveAsMultiPagePdf = (pageRef, panZoomRef, quality) => {
  const dataLoc=JSON.parse(localStorage.getItem('state'))
      // doc.save(`RxResume_${Date.now()}.pdf`);
     

  panZoomRef.current.autoCenter(1);
  panZoomRef.current.reset();
  setTimeout(() => {
  savePDF(pageRef.current, {
    allPages: true,
    paperSize: 'A4',
    fileName: `TestYantra_${dataLoc.data.profile.firstName.name} ${dataLoc.data.profile.lastName.name}_${dataLoc.data.profile.subtitle}_${dataLoc.data.profile.tolexp}.pdf`,
    scale: 0.755,

  })
},500)
}
/*  new Promise(resolve => {
   panZoomRef.current.autoCenter(1);
   panZoomRef.current.reset();

   setTimeout(() => {
     html2canvas(pageRef.current, {
       scale: 5,
       useCORS: true,
       allowTaint: true,
     }).then(canvas => {
       const image = canvas.toDataURL('image/jpeg', quality / 100);
       const doc = new jsPDF({
         orientation: 'portrait',
         unit: 'px',
         format: 'a4',
       });

       const pageHeight = doc.internal.pageSize.getHeight();
       const canvasWidth = doc.internal.pageSize.getWidth();
       const canvasHeight = (canvas.height * canvasWidth) / canvas.width;
       let marginTop = 0;
       let heightLeft = canvasHeight;

       doc.addImage(image, 'JPEG', 0, marginTop, canvasWidth, canvasHeight);
       heightLeft -= pageHeight;

       while (heightLeft >= 0) {
         marginTop = heightLeft - canvasHeight;
         doc.addPage();
         doc.addImage(image, 'JPEG', 0, marginTop, canvasWidth, canvasHeight);
         heightLeft -= pageHeight;
       }
        const dataLoc=JSON.parse(localStorage.getItem('state'))
        const tolexp = dataLoc.data.profile.tolexp.name.split(".")
        const years = tolexp[0]?tolexp[0] == 0  ? '' : tolexp[0] == 1 ? `${tolexp[0]} Year` : `${tolexp[0]} Years`:'';
        const months= tolexp[1]?tolexp[1] == 0 ? '' : tolexp[1] == 1 ? `${tolexp[1]} Month` : `${tolexp[1]} Months`:'';
       // doc.save(`RxResume_${Date.now()}.pdf`);
       doc.save(`TestYantra_${dataLoc.data.profile.firstName.name} ${dataLoc.data.profile.lastName.name}_${dataLoc.data.profile.subtitle}_${years} ${months}.pdf`);
       resolve();
     });
   }, 250);
 });
*/
export {
  move,
  hexToRgb,
  copyToClipboard,
  saveData,
  addItem,
  deleteItem,
  deleteItem1,
  moveItemUp,
  moveItemDown,
  importJson,
  saveAsPdf,
  saveAsMultiPagePdf,
};
