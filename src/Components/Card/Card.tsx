
import { CardContainer } from "./styles"


interface ICardProps {
    text: string
    id: string
}

export const Card = ({text}: ICardProps) => {
    return (
        <CardContainer>
            {text}
        </CardContainer>
    )
}