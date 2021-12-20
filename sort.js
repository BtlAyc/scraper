
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var firstRow = 2;
  var fullRange = sheet.getRange(firstRow, 1, sheet.getLastRow() - firstRow + 1, sheet.getLastColumn());
  fullRange.sort({column:6, ascending: false});
  SpreadsheetApp.flush();

  try{

    MailApp.sendEmail('okan@analyticahouse.com', 'data',' Betul Ayci - sorted data', { attachments: SpreadsheetApp.getActiveSpreadsheet()});
  }
  catch(err){
    Logger.log(err)
  }
}
