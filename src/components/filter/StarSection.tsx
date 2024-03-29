//hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//icons
import StarRateIcon from '@mui/icons-material/StarRate';
//slices
import { filterSlice } from '@/GlobalRedux/slices';

export default function StarRate() {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        dispatch(
            filterSlice.actions.setFilters({
                key: 'minStar',
                value: selected + 1,
            })
        );
    }, [selected]);

    const texts = [
        '1 Star Or Above',
        '2 Stars Or Above',
        '3 Stars Or Above',
        '4 Stars Or Above',
        '5 Stars',
    ];

    return (
        <div style={divStyle}>
            {texts.map((text, index) => (
                <div
                    key={index}
                    style={innerDivStyle}
                    onClick={() => setSelected(index)}
                >
                    <input
                        type="checkbox"
                        style={checkBoxStyle}
                        checked={selected === index}
                    />
                    <StarRateIcon sx={starStyle} />
                    <p style={pStyle}>{text}</p>
                </div>
            ))}
        </div>
    );
}

const checkBoxStyle: React.CSSProperties = {
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    accentColor: 'gray',
    border: '0.25rem solid green',
    borderRadius: '50%',
};

const divStyle: React.CSSProperties = {
    display: 'flex',
    margin: 10,
    marginLeft: '15%',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const innerDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
};

const pStyle: React.CSSProperties = {
    marginTop: '2px',
    marginLeft: 10,
    color: 'black',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
};

const starStyle: React.CSSProperties = {
    color: 'orange',
    marginLeft: 1,
};
