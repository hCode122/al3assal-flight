import Slide from '@mui/material/Slide';
import HeaderText from '../ResultSection/HeaderText';
import LogoSwiper from './LogoSwiper';

const TrustedBy = () => {
    return (
        <div className='flex flex-col lg:mt-0 mt-24 lg:mt-0 gap-18 px-10 lg:px-14'>
                <HeaderText text={'Trusted By'} />
                <LogoSwiper />
        </div>
    )
}

export default TrustedBy