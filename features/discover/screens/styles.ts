import { Dimensions, Image as NativeImage } from "react-native";
import TinderCard from "react-tinder-card";
import styled from "styled-components/native";



export const Container = styled.View``;

export const TinderContainer = styled(TinderCard)``;

export const Image = styled(NativeImage)`
  
`;

export const ImageContainer = styled.View`
  height: 100px;
  align-items: center;
  justify-content: center;
  width: 100px;
  flex: 1;
`;
