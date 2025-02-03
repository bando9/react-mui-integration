import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BoxNumber(props) {
    // eslint-disable-next-line react/prop-types
    const { title = 'Box Number', number, percent, chart } = props;

    return (
        <div style={{ border: '1px solid #000', borderRadius: 5, height: 250, padding: '10px' }}>
            <h3>{title}</h3>
            {number && (
                <div style={{fontSize:70, fontWeight:'bold',textAlign:'center', }}>
                    {number}
                </div>
            )}
            {percent && (
                <div style={{fontSize:25, fontWeight:'bold',textAlign:'center', color:'#77bc77' }}>
                    <ArrowUpwardIcon />{percent}%
                </div>
            )}
            {chart && chart}
        </div>
    )
}

export default BoxNumber