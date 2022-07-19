import styled from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 200ms ease-in-out;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 10;
    background-color: white;
    width: 450px;
    max-width: 80%;
`

const ModalHeader = styled.div`
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const ModalBody = styled.div`
    padding: 10px 15px;
    font-size: 1.15rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 1rem;
`

const CloseButton = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
`

const ModalTitle = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    padding: 10px;
    color: #2c3e50;
    text-align: center;

    .articleImage {
        width: 30px;
        height: 30px;
        margin: auto;
        display: inline-flex;
        border-radius: 50%;
    }
`

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`

const ItemDetail = ({ item, setIsOpen }) => {

    return (
        <>
            <Overlay onClick={() => setIsOpen(false)}></Overlay>
            <ModalDiv>
                <ModalHeader>
                    <ModalTitle>{item.title}</ModalTitle>
                    <img src={item.pictureUrl} alt={item.title} className="articleImage" />
                    <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
                </ModalHeader>
                <ModalBody>
                    <p>{item.description}</p>
                    <br/>
                    <p>$: {item.price}</p>
                </ModalBody>
            </ModalDiv>
        </>
    )
}

export default ItemDetail;