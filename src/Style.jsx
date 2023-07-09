import styled from "styled-components";

export const DropdownLabel = styled.label`
  display: inline-block;
  cursor: pointer;
`;

export const DropdownCheckbox = styled.input`
  display: none;
`;

export const DropdownButton = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f1f1f1;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 5px 0 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-top: none;
`;

export const DropdownListItem = styled.li`
  padding: 5px 10px;
  &:hover {
    background-color: #e3e3e3;
  }
`;
export const lightTheme = {
  background: "#f9f9f9",
  text: "#000",
};

export const darkTheme = {
  background: "#222",
  text: "#fff",
};

export const StyledDropdownButton = styled(DropdownList)`
  background-color: ${({ theme }) => theme.background};
`;

export const StyledDropdownList = styled(DropdownList)`
  background-color: ${({ theme }) => theme.background};
`;

export const StyledDropdownListItem = styled(DropdownListItem)`
  color: ${({ theme }) => theme.text};
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 1000px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
