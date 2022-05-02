import styled from "styled-components";
import { palette, breakpoints } from "../../styles/basicTheme";

export const Wrapper = styled.div`
  @keyframes slidein {
    from {
      margin-left: 20%;
      width: 100%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    background-color: ${palette.purple};
    position: absolute;
    width: 100%;
    height: 60%;
    z-index: 0;
    top: 0;
  }
  .main {
    z-index: 1;
    background-color: ${palette.white};
    padding: 40px 20px;
    border-radius: 12px;
    box-shadow: 5px 10px ${palette.purple};
    width: 400px;
    height: 300px;
    @media only screen and (max-width: ${breakpoints.screenMobile}) {
        width: 99%;
        padding: 40px 0;
        }
  }
  .title {
    font-size: 24px;
    padding: 10px 0;
    font-weight: 600;
  }
  .subtitle {
    font-size: 20px;
    padding: 10px 0;
  }
  .description {
    font-size: 20px;
    padding: 10px 0;
  }
  .start {
    padding: 12px;
    margin: 30px 0 0 0;
  }
  .questions {
    z-index: 1;
    background-color: ${palette.white};
    padding: 20px;
    border-radius: 12px;
    box-shadow: 5px 10px ${palette.purple};
    width: 400px;
    height: 300px;
    text-align: left;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: ${breakpoints.screenMobile}) {
        width: 99%;
        padding: 40px 0;
        }
    .singleQuestion {
      animation-duration: 1s;
      animation-name: slidein;
      @media only screen and (max-width: ${breakpoints.screenMobile}) {
        padding: 0 20px;
        }
      .question {
        margin-bottom: 15px;
        font-weight: 700;
      }
      label {
        display: block;
        padding: 5px 0;
      }
    }

    .buttons {
      bottom: 20px;
      right: 20px;
      position: absolute;
      display: flex;
    }
  }
`;

export const BtnWrapper = styled.div`
  button {
    background-color: ${palette.purple};
    border: none;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;
    color: ${palette.white};
    text-transform: capitalize;
    margin-left: 5px;
    &[disabled] {
      opacity: 50%;
      &:hover {
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    transition: transform 0.2s;
    img {
      width: 20px;
      vertical-align: middle;
    }
    &:hover {
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
