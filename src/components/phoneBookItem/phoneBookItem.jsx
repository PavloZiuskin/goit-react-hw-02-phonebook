import {Container}from "components/phoneBookItem/phoneItem.styled"
export const ContactsItem = ({ item, onClick }) => {
    return (<Container>
        <span>{item.name}: {item.number}</span>
                <button type="button" onClick={()=>{onClick(item.id)}}>delete</button>
    </Container>)
}