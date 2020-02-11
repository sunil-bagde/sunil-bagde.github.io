import React, { createRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import * as gtag from "../lib/gtag";

export default class Newsletter extends React.Component {
  render() {
    const mailchimpURL = process.env.MAILCHIMP_URL;
    const emailRef = createRef(undefined);

    return null;
  }
}
