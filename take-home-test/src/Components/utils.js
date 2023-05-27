import { utils, writeFile } from 'xlsx';

// Function to export data to Excel
export const exportToExcel = (data) => {
  // Create a new workbook
  const workbook = utils.book_new();

  // Convert data to worksheet format
  const worksheet = utils.json_to_sheet(data);

  // Add the worksheet to the workbook
  utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Generate a file name
  const fileName = 'data.xlsx';

  // Export the workbook as an Excel file
  writeFile(workbook, fileName);
};
