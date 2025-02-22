import * as S from "./styles";

export interface PopUpNotification {
  type: "Success" | "Error" | "Warning" | "Info";
  message: string;
}

interface PopUpNotificationsProps {
  popUpNotifications: PopUpNotification[];
}

export const PopUpNotifications: React.FC<PopUpNotificationsProps> = ({
  popUpNotifications,
}) => {
  const errorNotifications = popUpNotifications.filter(
    (notification) => notification.type === "Error"
  );

  return (
    <>
      {errorNotifications.length > 0 && (
        <S.NotificationWrapper>
          <S.sideLeft>
            {/* Substitua o ícone conforme o tipo */}
            <S.icon src="" />
          </S.sideLeft>
          <S.sideRight>
            <S.type>{errorNotifications[0].type}</S.type>
            <S.message>{errorNotifications[0].message}</S.message>
          </S.sideRight>
        </S.NotificationWrapper>
      )}
    </>
  );
};
