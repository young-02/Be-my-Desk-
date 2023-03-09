import styled from 'styled-components';

declare interface AuthUITypeProps {
  children?: React.ReactNode;
  headingTitle?: string;
  width?: number;
  height?: number;
}

function CustomAuthUI({ headingTitle, children }: AuthUITypeProps) {
  return (
    <StyledBackground>
      <StyledDiv>
        <div className="headingDiv">
          <p>{headingTitle}</p>
        </div>
        <div>{children}</div>
      </StyledDiv>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)
    no-repeat center;
  background-size: cover;
`;

const StyledDiv = styled.div<{ width?: number; height?: number }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.29);
  border-radius: 20px;
  padding: 20px 40px;

  .headingDiv {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    justify-content: center;
  }
`;

export default CustomAuthUI;
