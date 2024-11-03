const app = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1_zSZroFpqDwWOOG660o4v7GrmlYt53eEVfd-FPbmpfI/edit?gid=1292299381#gid=1292299381");
const sheet = app.getSheetByName("Tax Calculate");
const sheet1 = app.getSheetByName("Madad Calculate");

function doGet(req) {
  
 if(req.parameter.updatetax) {
    sheet.getRange(req.parameter.id,2).setValue(req.parameter.amount);
    sheet.getRange(req.parameter.id,3).setValue(req.parameter.rpoints);
    sheet.getRange(req.parameter.id,4).setValue(req.parameter.ptor);
       
    return ContentService.createTextOutput("data Updateed!")
   }
   
   else if(req.parameter.updatemadad) {
    sheet1.getRange(req.parameter.id,2).setValue(req.parameter.amount);
    sheet1.getRange(req.parameter.id,3).setValue(req.parameter.fromdate);
    sheet1.getRange(req.parameter.id,4).setValue(req.parameter.todate);
    sheet1.getRange(req.parameter.id,5).setValue(req.parameter.fromyear);
    sheet1.getRange(req.parameter.id,6).setValue(req.parameter.toyear);
    sheet1.getRange(req.parameter.id,7).setValue(req.parameter.frommonth);
    sheet1.getRange(req.parameter.id,8).setValue(req.parameter.tomonth);
       
    return ContentService.createTextOutput("data Updateed!")
   }

   else
   { 
  let data = sheet.getDataRange().getValues();
  data.shift()
  let obj = {
    todo:data
  }
  return ContentService.createTextOutput(JSON.stringify(obj))
}
}


function doPost(req) {
  let data = JSON.parse(req.postData.contents)
  sheet.appendRow(["=row()",data.amount,data.rpoints,data.ptor])
  return ContentService.createTextOutput("Data Received!")
}