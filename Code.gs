//allows inclusion of index_script to front end
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/*
*function is called at the start of the project, renders the webpage
*@e {String} Allows you to make GET requests such as ww.eaxmple.com/title="stuff"
*/
function doGet(e){
  var htmlTemplate = HtmlService.createTemplateFromFile('index');
  var htmlOutput = htmlTemplate.evaluate();
  return htmlOutput.setFaviconUrl("https://image.ibb.co/cLD6gK/calendar_icon.png").setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}