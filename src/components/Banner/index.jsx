import ImgBanner from '/imagens/imagens/banner.png'
import './Banner.css'

const Banner = () => {
    // JSX
    return (
        <header className='banner'>
            <img src={ImgBanner} alt="O banner principal da página do Organo" />
        </header>
    )
}

export default Banner