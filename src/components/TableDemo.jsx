import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    
  ];
  
  const rows = [
    { id: 1, col1: 'Snow', col2: 'Jon'},
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome'},
    { id: 3, col1: 'MUI', col2: 'is Amazing'},  
  ];

  function TableDemo(){
    return (
        <div>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                slots={{ toolbar: GridToolbar }} 
            />
        </div>
    )
  }

  export default TableDemo;