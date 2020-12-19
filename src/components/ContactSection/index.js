import React, { useState } from "react";
import loaderGif from "../../videos/loader.gif";

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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("eborrero91@gmail.com");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  };

  return (
    <ContactContainer id="contact">
      <ContactHeading className="row section-head">
        <ContactTitle className="col-md-6 header-col">
          <ContactH1>Get In Touch.</ContactH1>
        </ContactTitle>
      </ContactHeading>

      <ContactBody className="row">
        <ContactWrapper className="col-md-8">
          <ContactForm id="contactForm" name="contactForm">
            <ContactFieldset>
              <NameWrap>
                <NameLabel htmlFor="contactName">
                  Name <span className="required">*</span>
                </NameLabel>
                <NameInput
                  value={name}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </NameWrap>

              <EmailWrap>
                <EmailLabel htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </EmailLabel>
                <EmailInput
                  value="eborrero91@gmail.com"
                  type="text"
                  defaultValue="eborrero91@gmail.com"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EmailWrap>

              <SubjectWrap>
                <SubjectLabel htmlFor="contactSubject">Subject</SubjectLabel>
                <SubjectInput
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </SubjectWrap>

              <MessageWrap>
                <MessageLabel htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </MessageLabel>
                <MessagetextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></MessagetextArea>
              </MessageWrap>

              <SubmitWrap>
                <SubmitButton
                  type="submit"
                  onClick={handleClick}
                  className="submit"
                >
                  Submit
                </SubmitButton>
                <LoaderWrap id="image-loader">
                  <LoaderGif alt="" src={loaderGif} />
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
