import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = ({ setSelectedMenu }) => {
  const [activeMenu, setActiveMenu] = useState("myinfo"); // 현재 선택된 메뉴 상태, 선택 메뉴 계속 색상 유지

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // 선택된 메뉴 업데이트
    setSelectedMenu(menu); // 부모 컴포넌트에 선택된 메뉴 전달
  };

  return (
    <SidebarContainer>
      <MenuGroup>
        <MenuItem
          isActive={activeMenu === "myinfo"}
          onClick={() => handleMenuClick("myinfo")}
        >
          내 정보
        </MenuItem>
        <MenuItem
          isActive={activeMenu === "myinfomodify"}
          onClick={() => handleMenuClick("myinfomodify")}
        >
          내 정보 수정
        </MenuItem>
        <MenuItem
          isActive={activeMenu === "deleteaccount"}
          onClick={() => handleMenuClick("deleteaccount")}
        >
          회원 탈퇴
        </MenuItem>
      </MenuGroup>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 30px;
  border-right: 1px solid #ddd;
`;

const MenuGroup = styled.div`
  margin-top: 120px; /* 메뉴를 전체적으로 아래로 이동 */
`;

const MenuItem = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? "#f06569" : "#4f4f4f"}; /* 선택된 메뉴 색상 변경 */
  font-weight: ${(props) =>
    props.isActive ? "bold" : "normal"}; /* 선택된 메뉴 굵게 */

  &:hover {
    color: #f06569;
    font-weight: bold;
  }
`;
