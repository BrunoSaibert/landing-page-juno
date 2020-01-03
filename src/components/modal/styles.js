import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  outline: 0;

  &::before{
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 80;
    background-color: ${props => props.theme.grayScale.dark};
    opacity: 0.5;
  }
`;

export const Dialog = styled.div`
  position: relative;
  width: auto;
  max-width: 500px;
  max-height: calc(100vh - 100px);
  margin: 50px auto;
  z-index: 90;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 100px);
  pointer-events: auto;
  background-color: ${props => props.theme.grayScale.light};
  border: 1px solid ${props => props.theme.grayScale.gray};
  border-radius: 6px;
  overflow: hidden;
`;

export const Header = styled.div`
  background-color: ${props => props.theme.color.primary_pastel};
  color: ${props => props.theme.color.primary_dark};
  border-bottom: 1px solid ${props => props.theme.grayScale.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .modal-title {
    margin: 0;
  }
`;

export const Close = styled.button.attrs({
  type: "buttom"
})`
  background: transparent;
  color: ${props => props.theme.grayScale.dark};
  border: 0;
  font-size: 24px;
  line-height: 24px;
  padding: 20px;
  margin: -20px;
  margin-top: -25px;
  font-weight: bold;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    opacity: .5;
  }
`;

export const Body = styled.div`
  padding: 20px;
  color: ${props => props.theme.grayScale.dark};
  overflow-y: auto;
`;

export const Footer = styled.div`
  background-color: ${props => props.theme.color.primary_pastel};
  padding: 20px;
  border-top: 1px solid ${props => props.theme.grayScale.gray};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
