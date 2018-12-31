function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').evaluate();
}

function fetchListData() {
  Logger.log('I was called!');
}