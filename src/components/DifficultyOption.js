
import { UnCheckedBox, CheckedBox, DifficultyMenu } from '../App.styled';

const DifficultyOption = (props) => {
    const { setting, checked, symbol, handleClick }= props;
    return (
        <DifficultyMenu onClick={(e)=>{handleClick(e, setting.toLowerCase() )}}>
            {checked[setting.toLowerCase()] === false && <UnCheckedBox >♢</UnCheckedBox>}
            {checked[setting.toLowerCase()] === true && <CheckedBox symbol={symbol} >{symbol}</CheckedBox>}
            {setting}
            {checked[setting.toLowerCase()] === false && <UnCheckedBox >♢</UnCheckedBox>}
            {checked[setting.toLowerCase()] === true && <CheckedBox symbol={symbol} >{symbol}</CheckedBox>}
        </DifficultyMenu>
    )
}

export default DifficultyOption