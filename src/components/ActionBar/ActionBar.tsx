import styled from "@emotion/styled";
import React from "react";
import { ButtonType } from "../../common/types/game";
import { CustomButton } from "../CustomButton/CustomButton";

interface ActionBarProps {
  onButtonClick: (buttonType: ButtonType) => void | Promise<void>;
}

export const ActionBar: React.FC<ActionBarProps> = ({ onButtonClick }) => (
  <ActionButtonContainer>
    <CustomButton onClick={() => onButtonClick("RESTART")} label="Play again" />
    <CustomButton onClick={() => onButtonClick("END")} label="End game" />
  </ActionButtonContainer>
);

const ActionButtonContainer = styled.div`
  grid-area: action-buttons;
  margin-top: 3rem;
`;