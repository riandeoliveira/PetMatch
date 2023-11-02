import { Link, Stack } from "expo-router";
import { ReactElement } from "react";
import * as S from "./styles";

export const NotFoundScreen = (): ReactElement => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <S.Container>
        <S.Title>Esta tela não existe.</S.Title>
        <Link href="/">
          <S.LinkText>Vá para a tela inicial!</S.LinkText>
        </Link>
      </S.Container>
    </>
  );
};
