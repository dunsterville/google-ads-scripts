var CPA_PRECENT_DIFFERENCE = 0.10; // Precent difference 0.10 = 10%
var Email_ids = "your@email.it"//Insert your Email id here i.e "abc@gmail.com,abc@xyz.com"
function main() {
  send_account_notification();
}
function send_account_notification() {
  Logger.log("Script running started..");
  var startDate = getPastDateAdwords(1);
  var endDate = getPastDateAdwords(2);
  var resStart = getData(startDate);
  var resEnd = getData(endDate);
  var accountReportStart = AdWordsApp.report(resStart);
  var accountReportEnd = AdWordsApp.report(resEnd);
  var rowsStart = accountReportStart.rows();
  var rowsEnd = accountReportEnd.rows();
  while (rowsStart.hasNext()) {
    var row = rowsStart.next();
    var CostStart = row['CostPerConversion']
    CostStart = parseFloat(CostStart)
  }
  while (rowsEnd.hasNext()) {
    var row = rowsEnd.next();
    var CostEnd = row['CostPerConversion']
    CostEnd = parseFloat(CostEnd)
    var account_name = row['AccountDescriptiveName']
  }  
  if (Math.abs((CostStart - CostEnd) / ((CostStart + CostEnd) / 2)) > CPA_PRECENT_DIFFERENCE) {
    Logger.log(" CPA change is below threshold.. send email")
    sendMail(account_name, (CostStart - CostEnd) / ((CostStart + CostEnd) / 2)*100)
  }
  else {
    Logger.log(" CPA change is above threshold.. do not send email..")
  }
  //=====================send email notification=================================
  function sendMail(account_name, PrecentDifference) {
    var html = [];
    html.push(
      "<html>",
      "<body>",
      "<table width=100% cellpadding=0 border=0 cellspacing=0>",
      "<tr bgcolor='#3c78d8′>",
      "<td width=500>",
      "<div style='font: normal 18pt verdana, sans-serif; padding: 3px 10px; color: white'>CPA Precent Difference Alert</div>",
      "</td>",
      "<td align=right>",
      "<div style='font: normal 18pt verdana, sans-serif; padding: 3px 10px; color: white'>" + account_name + "</h1>",
      "</td>",
      "</tr>",
      "</table>",
      "<table width=100% cellpadding=0 border=1 cellspacing=0>",
      "<tr bgcolor='#ddd'>",
      "<td style='font: 12pt verdana, sans-serif; padding: 5px 0px 5px 5px; background-color: #ddd; text-align: center'>CPA has changed by: " + PrecentDifference + "%</td>",
      "</tr>",
      "</table>",
      "</body>",
      "</html>");
    MailApp.sendEmail(Email_ids, 'KB CPA Precent Difference Threshold Script', "", { htmlBody: html.join("\n") });
  }
  //*****************************************************************************
  function getData(date) {
    var query = "SELECT ExternalCustomerId, AccountDescriptiveName, " +
      "CostPerConversion " +
      "FROM ACCOUNT_PERFORMANCE_REPORT " +
      "DURING " + date + ',' + date;
    return query;
  }
  //################################################################################
  function getPastDateAdwords(numDays) {
    var timeZone = AdWordsApp.currentAccount().getTimeZone()
    var today = new Date();
    today.setDate(today.getDate() - numDays);
    return Utilities.formatDate(today, timeZone, 'yyyyMMdd');
  }
}