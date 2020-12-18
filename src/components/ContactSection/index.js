import React from "react";

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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EmailWrap>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </ContactFieldset>
          </ContactForm>

          <div id="message-warning"> Error </div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </ContactWrapper>
      </ContactBody>
    </ContactContainer>
  );
};

export default ContactSection;
