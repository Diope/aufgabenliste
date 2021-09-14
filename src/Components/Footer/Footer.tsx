import {FooterStyle} from './styles'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <FooterStyle>
            Made With 🧡 by <a href="https://github.com/diope">Dipet</a> {currentYear}
        </FooterStyle>
    )
}