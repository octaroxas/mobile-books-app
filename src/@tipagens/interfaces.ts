import { collectionBooks, collectionList, statisticsList } from '../@tipagens/types'

export interface ColectionItemProps {
    list: Array<collectionList>
}

export interface BooksItemProps {
    list: Array<collectionBooks>
}

export interface StatisticsItemsProps {
    list: Array<statisticsList>
}