const Excel = require('exceljs')
const fs = require('graceful-fs');

var data =[{
    domainName:'Replace Me',
    ecom:'true or false',
    proff:'company value here',
    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)}

}]
var array = fs.readFileSync('Leads_updated.txt').toString().split("\n");


let workbook = new Excel.Workbook()
let worksheet = workbook.addWorksheet('Domains')


worksheet.columns =[
    {header:'Domain Name', key:'domainName'},
    {header:'E-commerce or Lead?',key:'ecom'},
    {header:'Proff Link',key:'proff'}
    // evt proff amount
    // evt mail/tel
]
worksheet.spliceColumns(1, array[3])




worksheet.columns.forEach(column => {
    column.width = column.header.length < 18 ? 18 : column.header.length
  })
worksheet.getRow(1).font = {bold: true}
data.forEach((e, index) => {
    const rowIndex = index + 2
    worksheet.addRow({
        ...e    })})
    // evt special rows

    const totalNumberOfRows = worksheet.rowCount
worksheet.addRow([
    '',
    'Total Lead Count',
    { // Will prop not work - string + string weirdness
        formula: `=sum(A2:A${totalNumberOfRows})`
    }
])
// Styling
worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
    worksheet.getCell(`A${rowNumber}`).border = {
      top: {style: 'thin'},
      left: {style: 'thin'},
      bottom: {style: 'thin'},
      right: {style: 'none'}
    }
    const insideColumns = ['B', 'C']

    insideColumns.forEach((v) => {
        worksheet.getCell(`${v}${rowNumber}`).border = {
          top: {style: 'thin'},
          bottom: {style: 'thin'},
          left: {style: 'none'},
          right: {style: 'none'}
        }
      })})
const totalCell = worksheet.getCell(`B${worksheet.rowCount}`)
totalCell.font = {bold: true}
totalCell.alignment = {horizontal: 'center'}

workbook.xlsx.writeFile('Domains.xlsx')
console.log("File Created")
