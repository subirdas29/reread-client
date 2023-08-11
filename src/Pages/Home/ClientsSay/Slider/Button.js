import styled from "styled-components";

export default styled.button.attrs(({ type = "button" }) => ({ type }))`
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 1.6em;
  background-color: rgba(103, 58, 183, 0.1);
  color: ${props => (props.disabled ? "#999" : "#333")};
  box-shadow: 0 0 1px 3px rgb(244, 67, 68);
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #fff;
    background-color: rgb(244, 67, 68);
    box-shadow: 0 0 1px 3px rgb(244, 67, 68);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;