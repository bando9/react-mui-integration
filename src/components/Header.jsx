import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

function Header(){
    return (
        <div style={{ display: 'flex', gap: '1rem' }} >
            <DatePicker label="Auto date range" />
            <TextField
                id="outlined-select-currency"
                select
                label="Services"
                defaultValue="All"
                style={{ minWidth:100 }}
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="outlined-select-currency"
                select
                label="Posts"
                defaultValue="All"
                style={{ minWidth:100 }}
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default Header;