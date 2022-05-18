import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: url(https://picsum.photos/600/400) top center;
  background-size: cover;
  height: 400px;
  position: relative;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  padding: 20px 10px;
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  padding: 20px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-family: MillerBanner, Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: #fff;
  margin-bottom: 5px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackIconWrapper = styled.div`
  cursor: pointer;
`;

export const Reviews = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #fff;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DetailsList = styled.ul`
  margin: 0;
  padding: 10px;
`;

export const Details = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid rgb(182 159 88 / 20%);
`;

export const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

export const Description = styled.div`
  padding: 20px 10px;
`;
