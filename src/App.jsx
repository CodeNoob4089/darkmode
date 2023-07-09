import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  DropdownLabel,
  DropdownCheckbox,
  StyledDropdownButton,
  lightTheme,
  darkTheme,
  StyledDropdownList,
  StyledDropdownListItem,
  Container,
} from "./Style";

const ButtonWithDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <DropdownLabel>
          <DropdownCheckbox
            type="checkbox"
            checked={isOpen}
            onChange={toggleDropdown}
          />
          <StyledDropdownButton>
            {isOpen ? "구매 선택 ▲" : "구매 선택 ▼"}
          </StyledDropdownButton>
          {isOpen && (
            <StyledDropdownList>
              <StyledDropdownListItem
                onClick={() => handleItemClick("검은색바지")}
              >
                검은색바지
              </StyledDropdownListItem>
              <StyledDropdownListItem
                onClick={() => handleItemClick("파란색바지")}
              >
                파란색바지
              </StyledDropdownListItem>
              <StyledDropdownListItem
                onClick={() => handleItemClick("빨간색바지")}
              >
                빨간색바지
              </StyledDropdownListItem>
            </StyledDropdownList>
          )}
        </DropdownLabel>
        {selectedItem && <div>{selectedItem}</div>}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "라이트 모드" : "다크 모드"} 전환
        </button>
      </Container>
    </ThemeProvider>
  );
};

export default ButtonWithDropdown;
