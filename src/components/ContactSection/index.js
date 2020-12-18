import React from "react";
import {
  ContactContainer,
  ContactHeading,
  ContactTitle,
  ContactH1,
  ContactBody,
  ContactWrapper,
  ContactForm,
  ContactFieldset,
  NameWrap,
  NameLabel,
  NameInput,
  EmailWrap,
  EmailLabel,
  EmailInput,
  SubjectWrap,
  SubjectLabel,
  SubjectInput,
  MessageWrap,
  MessageLabel,
  MessagetextArea,
  SubmitWrap,
  SubmitButton,
  LoaderWrap,
  LoaderGif,
  ContactFormError,
  ContactSuccess,
  SuccessIcon,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeading className="row section-head">
        <ContactTitle className="two columns header-col">
          <ContactH1>Get In Touch.</ContactH1>
        </ContactTitle>
      </ContactHeading>

      <ContactBody className="row">
        <ContactWrapper className="eight columns">
          <ContactForm id="contactForm" name="contactForm">
            <ContactFieldset>
              <NameWrap>
                <NameLabel htmlFor="contactName">
                  Name <span className="required">*</span>
                </NameLabel>
                <NameInput
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  //   onChange={(e) => setName(e.target.value)}
                />
              </NameWrap>

              <EmailWrap>
                <EmailLabel htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </EmailLabel>
                <EmailInput
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  //   onChange={(e) => setEmail(e.target.value)}
                />
              </EmailWrap>

              <SubjectWrap>
                <SubjectLabel htmlFor="contactSubject">Subject</SubjectLabel>
                <SubjectInput
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  //   onChange={(e) => setSubject(e.target.value)}
                />
              </SubjectWrap>

              <MessageWrap>
                <MessageLabel htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </MessageLabel>
                <MessagetextArea
                  //   onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></MessagetextArea>
              </MessageWrap>

              <SubmitWrap>
                <SubmitButton
                  type="submit"
                  //   onClick={handleClick}
                  className="submit"
                >
                  Submit
                </SubmitButton>
                <LoaderWrap id="image-loader">
                  <LoaderGif alt="" src="images/loader.gif" />
                </LoaderWrap>
              </SubmitWrap>
            </ContactFieldset>
          </ContactForm>

          <ContactFormError id="message-warning"> Error </ContactFormError>
          <ContactSuccess id="message-success">
            <SuccessIcon className="fa fa-check"></SuccessIcon>Your message was
            sent, thank you!
          </ContactSuccess>
        </ContactWrapper>
      </ContactBody>
    </ContactContainer>
  );
};

export default ContactSection;
