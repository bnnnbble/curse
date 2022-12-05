function showFile(input) {
    excelRunner(input.files[0])
}
function excelRunner(file){
    var reader = new FileReader();
    
    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object[0]);
        document.cookie = encodeURIComponent("reading_xlsx_data") + '=' + encodeURIComponent(json_object);
      })

    };

    reader.onerror = function(ex) {
      alert(ex);
    };

    reader.readAsBinaryString(file);
};