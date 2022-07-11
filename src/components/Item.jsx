import styled from 'styled-components';

const ItemDiv = styled.div`
    width: 200px;
    height: 300px;
    border: 1px solid black;
    background: #ffe9d1;

    .articleImage {
        width: 60px;
        height: 60px;
        margin: 20px auto;
        display: block;
    }

    .articleImage + p {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .articleP {
        text-align: center;
    }
`

const Item = ({ item }) => {
    return (
        <ItemDiv>
            <img src={item.pictureUrl} alt={item.title} className="articleImage" />
            <p className="articleP">{item.title}</p>
            <br/>
            <p className="articleP">$: {item.price}</p>
            <br/>
            <p className="articleP">{item.description}</p>
        </ItemDiv>
    )
}

export default Item;