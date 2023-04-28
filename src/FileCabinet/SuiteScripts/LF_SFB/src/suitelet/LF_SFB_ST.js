/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NAmdConfig /SuiteScripts/LF_SFB/src/ReactConfig.json
 */
define(['N/ui/serverWidget', 'N/file'], (serverWidget, file) => {
  /**
   * Defines the Suitelet script trigger point.
   * @param {Object} scriptContext
   * @param {ServerRequest} scriptContext.request - Incoming request
   * @param {ServerResponse} scriptContext.response - Suitelet response
   * @since 2015.2
   */
  const onRequest = (scriptContext) => {
    if (scriptContext.request.method === 'GET') {
      // Add form
      const form = serverWidget.createForm({
        title: 'LF Simple File Backup',
      });
      const field = form.addField({
        id: 'custfield_html',
        type: serverWidget.FieldType.INLINEHTML,
        label: 'HTML',
      });
      field.defaultValue = `
        <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <div id="app"></div>
        <script>
          ${logic.getComponent('MainContainer')}
          // import React from 'react';
          // import ReactDOM from 'react-dom/client';
          // const root = ReactDOM.createRoot(document.getElementById('app'));
          // console.log(root)
          // pass root to getComponent() to be able to render each component
        </script>
      `;
      scriptContext.response.writePage(form);
    }
  };

  return {onRequest};
});
