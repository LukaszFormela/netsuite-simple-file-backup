/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/ui/serverWidget", "N/fle"], (serverWidget, file) => {
  /**
   * Defines the Suitelet script trigger point.
   * @param {Object} scriptContext
   * @param {ServerRequest} scriptContext.request - Incoming request
   * @param {ServerResponse} scriptContext.response - Suitelet response
   * @since 2015.2
   */
  const onRequest = (scriptContext) => {
    if (scriptContext.request.method === "GET") {
      // Add form
      const form = serverWidget.createForm({
        title: "LF Simple Backup GDriver",
      });

      const field = form.addField({
        id: 'custfield_html',
        type: serverWidget.FieldType.INLINEHTML,
        label: 'HTML'
      })

      field.defaultValue = 
    }
  };

  return { onRequest };
});
