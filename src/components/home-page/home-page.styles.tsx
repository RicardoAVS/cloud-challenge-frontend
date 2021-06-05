import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin-bottom: 7em;
  font-weight: 300px;

  p {
    color: rgb(93, 95, 97);
  }
`;

export const LeftContentContainer = styled.div`
  width: 40%;
  text-align: end;
`;

export const RightContentContainer = styled.div`
  width: 40%;
`;

export const Divider = styled.div`
  width: 8px;
  height: auto;
  margin: 0 50px;
  border-radius: 4px;
  background: linear-gradient(
    to bottom,
    rgba(9, 58, 121, 1) 100%,
    rgba(0, 212, 255, 1) 100%,
    rgba(8, 77, 138, 1) 100%,
    rgba(9, 63, 125, 1) 51%,
    rgba(47, 80, 119, 1) 0%
  );
`;

export const Title = styled.div`
  font-size: 44px;
  font-weight: 600;
  margin: 10px 0 50px 0;
  color: rgba(8, 77, 138, 1);
`;
