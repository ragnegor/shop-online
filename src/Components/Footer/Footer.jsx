import React from "react";
import style from "./Footer.module.css";
import {Link} from "react-router-dom";


function Footer (props) {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contacts}>
          <Link to={props.data.contacts.logo.link}><img src={props.data.contacts.logo.picture} alt={props.data.contacts.logo.alt}/></Link>
          <a href={props.data.contacts.email.link}><img src={props.data.contacts.email.icon} alt={props.data.contacts.email.alt}/>{props.data.contacts.email.mail}</a>
          <a href={props.data.contacts.location.link}><img src={props.data.contacts.location.icon} alt={props.data.contacts.location.alt}/>{props.data.contacts.location.city}</a>
        </div>
        <ol>
          <li>{props.data.pages.header}</li>
          <li><a href={props.data.pages.link1.link}>{props.data.pages.link1.item}</a></li>
          <li><a href={props.data.pages.link2.link}>{props.data.pages.link2.item}</a></li>
          <li><a href={props.data.pages.link3.link}>{props.data.pages.link3.item}</a></li>
        </ol>

        <ol>
          <li>{props.data.product.header}</li>
          <li><a href={props.data.product.link1.link}>{props.data.product.link1.item}</a></li>
          <li><a href={props.data.product.link2.link}>{props.data.product.link2.item}</a></li>
          <li><a href={props.data.product.link3.link}>{props.data.product.link3.item}</a></li>
        </ol>

        <ol>
          <li>{props.data.followUs.header}</li>
          <ol>
            <li><a href={props.data.followUs.facebook.link}><img src={props.data.followUs.facebook.icon} alt={props.data.followUs.facebook.alt}/></a></li>
            <li><a href={props.data.followUs.twitter.link}><img src={props.data.followUs.twitter.icon} alt={props.data.followUs.twitter.alt}/></a></li>
            <li><a href={props.data.followUs.instagram.link}><img src={props.data.followUs.instagram.icon} alt={props.data.followUs.instagram.alt}/></a></li>
          </ol>
        </ol>
      </div>


      <p>{props.data.copyright}</p>
    </footer>
  )
}

export default Footer;