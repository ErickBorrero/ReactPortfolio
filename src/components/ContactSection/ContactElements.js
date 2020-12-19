import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: #191919;
  padding-top: 96px;
  padding-bottom: 102px;
  color: #636363;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactHeading = styled.div`
  margin-bottom: 42px;
  text-align: center;
`;

export const ContactTitle = styled.div`
  padding-top: 6px;
`;

export const ContactH1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ebeeee;
  margin-bottom: 6px;

  &::before {
    font-family: "FontAwesome";
    content: "\f0e0";
    padding-right: 10px;
    font-size: 72px;
    line-height: 72px;
    color: #ebeeee;
  }
`;

export const ContactBody = styled.div``;

export const ContactWrapper = styled.div``;

export const ContactForm = styled.form`
  margin-bottom: 30px;
  text-align: center;
`;

export const ContactFieldset = styled.fieldset``;

export const NameWrap = styled.div``;

export const NameLabel = styled.label`
  font: 15px/24px "opensans-bold", sans-serif;
  margin: 12px 0;
  color: #ebeeee;
  display: inline-block;
  width: 26%;
`;

export const NameInput = styled.input`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;

  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

export const EmailWrap = styled.div``;

export const EmailLabel = styled.label`
  font: 15px/24px "opensans-bold", sans-serif;
  margin: 12px 0;
  color: #ebeeee;
  display: inline-block;
  width: 26%;
`;

export const EmailInput = styled.input`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;
  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

export const SubjectWrap = styled.div``;

export const SubjectLabel = styled.label`
  font: 15px/24px "opensans-bold", sans-serif;
  margin: 12px 0;
  color: #ebeeee;
  display: inline-block;
  width: 26%;
`;

export const SubjectInput = styled.input`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;

  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

export const MessageWrap = styled.div``;

export const MessageLabel = styled.label`
  font: 15px/24px "opensans-bold", sans-serif;
  margin: 12px 0;
  color: #ebeeee;
  display: inline-block;
  width: 26%;
`;

export const MessagetextArea = styled.textarea`
  padding: 18px 20px;
  color: #eee;
  background: #373233;
  margin-bottom: 42px;
  border: 0;
  outline: none;
  font-size: 15px;
  line-height: 24px;
  width: 65%;

  &:focus {
    color: #fff;
    background-color: #11abb0;
  }
`;

export const SubmitWrap = styled.div``;

export const SubmitButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  background: #0d0d0d;
  border: none;
  cursor: pointer;
  height: auto;
  display: inline-block;
  border-radius: 3px;
  margin-left: 26%;

  &:hover {
    color: #0d0d0d;
    background: #fff;
  }
`;

export const LoaderWrap = styled.div`
  display: none;
  position: relative;
  left: 18px;
  top: 17px;
`;

export const LoaderGif = styled.img``;

export const ContactFormError = styled.div`
  display: none;
  background: #0f0f0f;
  padding: 24px 24px;
  margin-bottom: 36px;
  width: 65%;
  margin-left: 26%;
  color: #d72828;
`;

export const ContactSuccess = styled.div`
  display: none;
  background: #0f0f0f;
  padding: 24px 24px;
  margin-bottom: 36px;
  width: 65%;
  margin-left: 26%;
  color: #11abb0;
`;

export const SuccessIcon = styled.i`
  margin-right: 10px;
`;
