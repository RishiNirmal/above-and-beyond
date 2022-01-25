import React, { useState } from "react";




export default function ContactForm(props) {
  const [open, setOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    // const service = e.target.select_service.value;

    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "mktg.aboveandbeyond@gmail.com",
      Password: "axbbooietrapsmpo",
      To: 'info@beyondaviation.ca',
      From: "mktg.aboveandbeyond@gmail.com",
      Subject: "Above & Beyond - Contact Form",
     Body: ' <body><style>a{color: #9cc44a; text-decoration: none;}</style> <table cellspacing="0" cellpadding="0" width="100%" style="padding: 0;"> <tbody> <tr> <td> <table cellpadding="0" cellspacing="0" style="margin: 0px auto 0px; text-align: center; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1) ; border-radius: 4px; background-color: #fff; padding:30px; width:100%; max-width: 800px; border: 1px solid #ccc;" > <tr> <td> <div style="padding:15px;margin:0;"> <table style="border-bottom:1px solid #ccc;margin-bottom:25px;width:100%"> <tr> <td style="width:100%;display:table"> <div style="text-align: center;"> <img src="https://dev.01s.in/above-and-beyond/assets/Logo/logo.png" width="300px"> </div> </td> </tr> </table> <table class="Enquiry"  style="border-collapse: collapse; width:100%;  background-color: #0b3e64; color: #ffffff;"> <tr style="text-align: center;" class="Enquiry-head"> <th colspan="2" style=" padding: 15px;font-size: 20px;text-transform: uppercase;border: 1px solid #ccc;border-bottom: none;">Consultation Form - Above & Beyond</th> </tr> <tr> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">First Name:</td> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">'+firstName+'</td> </tr> <tr> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">Last Name:</td> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">'+lastName+'</td> </tr><tr> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">Email:</td> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">'+email+'</td> </tr>     <tr> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">Message:</td> <td style=" padding: 10px; border: 1px solid #ccc; text-align: left;">'+message+'</td> </tr> </table> </div> </td> </tr> </table> </td> </tr> </tbody> </table> </body> '
      // Body: "Name :" + firstName + " " + lastName + "<br> Email: " + email + "<br>Message: " + message,
      
    })
      .then(
        (result) => {
          if (result === "OK") {
            setOpen(true)
            setTimeout(() => {
              window.location.reload();
            }, 0)
          }
        }
      );

  }

  return (
    <>
      <form className="wpcf7 clearfix" onSubmit={sendEmail} >
        {/* <fieldset>
      <label>
        <span className="required">*</span> Your request:
      </label>
      <select className="wpcf7-form-control-wrap wpcf7-select" id="contact-inquiry" name="select_service" required>
        <option value="I need an offer for contract logistics">I need an offer for contract logistics</option>
        <option value="I need an offer for air freight" >I need an offer for air freight</option>
        <option value="I want to become your partner">I want to become your partner</option>
        <option value="I have some other request">I have some other request</option>
      </select>
    </fieldset> */}
        <fieldset>
          <label>
            <span className="required">*</span> First Name:
          </label>
          <input type="text" className="wpcf7-text" id="contact-name" name="first_name" required />
        </fieldset>
        <fieldset>
          <label>
            <span className="required">*</span> Last Name:
          </label>
          <input type="text" className="wpcf7-text" id="contact-last-name" name="last_name" required />
        </fieldset>
        <fieldset>
          <label>
            <span className="required">*</span> Email:
          </label>
          <input type="email" className="wpcf7-text" id="contact-email" name="email" required />
        </fieldset>
        <fieldset>
          <label>
            <span className="required">*</span> Message:
          </label>
          <textarea rows={8} className="wpcf7-textarea" id="contact-message" defaultValue={""} name="message" required />
        </fieldset>
        <input type="submit" className="wpcf7-submit" defaultValue="send" />
      </form>
      {
        open && (

          <div
            className="modal fade form-poup"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <h1 className="successful-content">Thanks For Contacting Us</h1>
          </div>
        )

      }
    </>
  );
}


