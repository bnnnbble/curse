function showFile(input) {
    excelRunner(input.files[0])
}
function excelRunner(file){
    var reader = new FileReader();
    fileName = file.name;
    fileName = fileName.split('.');
    fileName = fileName[0];
    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach(function(sheetName) {
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object[0]);
        var json_object_xy = JSON.stringify(XL_row_object);
        document.cookie = encodeURIComponent("reading_xlsx_data") + '=' + encodeURIComponent(json_object);
        document.cookie = encodeURIComponent("reading_xlsx_data_xy") + '=' + encodeURIComponent(json_object_xy);
        document.cookie = encodeURIComponent("fileName") + '=' + encodeURIComponent(fileName);
      })
    };

    reader.onerror = function(ex) {
      alert(ex);
    };

    reader.readAsBinaryString(file);
};