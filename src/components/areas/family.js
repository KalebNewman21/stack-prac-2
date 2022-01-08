import React from 'react';
import SkinnyNavbar from '../skinnyNavbar.js';
import { Link } from 'react-router-dom';
import Image1 from '../../img/justice-2756939_640.png'
import './css/family.css'
import ContactForm from "../contactForm.js"
import Copyright from '../copyright.js'
import {ReactComponent as BackIcon} from '../backIcon.svg';


const Family = () => {
  return (
  <>
  <div className="container">
    <SkinnyNavbar/>
    <Link className="prev"to="/practice-areas"><BackIcon/></Link><br/>
  <h1 className="area-title">Family Law</h1>


      <div className="area-info">
        <div className="area-info-wrapper">
        <h2 className="area-header">There's a Correct Way to Approach Family Matters...</h2>
          <p className="area-description">Newman Law Firm P.A. is committed to providing you with representation in all family law matters. We recognize that family law matters can be highly emotional, and require sensitivity for each party involved. We can provide you with representation that is client centered, focusing obtaining a successful end result for both you and your family. It is our ability to objectively identify the issues, and to provide our clients with the sensitivity that is essential in family law matters, that sets us apart from other counselors at law. You can rely on us to work diligently on your behalf, be committed to seeing your matter through to resolution, and protect the rights of you and your family. Please contact us at your earliest convenience so that we can begin to help you and your family obtain a successful outcome.
            <br/><br/><br/></p>
        <p className="area-description"><strong className="strong">Jacksonville, Florida Divorce Attorney</strong> Divorce is a highly emotional process, and choosing the right person to represent you can seem like an overwhelming task. However, here at Newman Law Firm, P.A. we are committed to protecting your best interest as you navigate through the process of divorce. Our goal will be to provide you with effective representation that is both objective, and focused on the end result that you desire. Our primary goal will always be to limit any negative implications that flow from a divorce, and keep you informed at all times, of your options throughout the process. Additionally, during the pending divorce, we will be able to request temporary relief for you, if you are in need of temporary support, exclusive use of the martial home, or a temporary timesharing schedule for the minor children of the marriage. As mediation is required in all divorce actions in the State of Florida, we will attend mediation, and attempt to come to an agreement that is reasonable for you, and your family. In the event that we are unable to compromise with your spouse at mediation, Newman Law Firm P.A. will be more than willing to advocate on your behalf before the Judge. Newman Law Firm P.A. is prepared to represent you in your divorce, and is committed to helping you achieve your best case scenario throughout the process. If you would like more information about how we can be of assistance to you, please call or email us to schedule your initial consultation
          <br/><br/><br/></p>
        <p className="area-description"><strong className="strong">
      Jacksonville, Florida Child Support Attorney</strong> <br/>Newman Law Firm P.A. is prepared to provide representation to you if you would like to obtain child support for your child, or a modification of an existing child support order. We will fight for your child support order to be based on the child support guidelines, and request a deviation from those guidelines when the circumstances permit. If you are in need of a modification of an existing child support order, we are prepared to identify the substantial change in circumstance that should result in the Court modifying your existing order. Newman Law Firm P.A. is capable and willing to represent Fathers and Mothers, as they fight to ensure that their minor children are being adequately provided based on Florida Statutory Law. If you are in need of additional information regarding obtaining child support, or modification of an existing child support order, please call or email us to schedule your initial consultation.
  <br/><br/><br/></p>

        <p className="area-description"><strong className="strong">Jacksonville, Florida Child Custody Attorney</strong>Recently, Florida Law has changed visitation terminology from “custody” to “timesharing”. Timesharing is representative of the cooperative process which permits both parents to play an active role in the life of the minor child. If you are a parent who is in need of a timesharing agreement with your minor child, Newman Law Firm P.A. is prepared to file the necessary documents with the Court so that you can begin to exercise visitation with your child. Additionally, if you are a parent who is in need of a change in a previous timesharing plan, we are prepared to identify the substantial change in circumstance that permits a change in the timesharing. At Newman Law Firm P.A. we will be able to work cooperatively with you in an effort to identify what the best timesharing plan is for you and your minor child. If you have concerns regarding unfitness of the other parent, we are prepared to utilize tools such as emergency motions which would permit that one parent have to immediately surrender the minor child to the other parent, or in the alternative, we are prepared to request that a Custody Evaluator be appointed to your case to make a detailed assessment of the best interest of the minor child for timesharing purposes. If you are in need of additional information regarding timesharing, please call or email us to schedule your initial consultation.
    <br/><br/><br/>      </p>



        <p className="area-description"><strong className="strong">Jacksonville, Florida Paternity Attorney</strong>Newman Law Firm P.A. can represent you in an action to determine paternity or disestablish paternity. We will be able to file the necessary motions so that the Court orders scientific testing to determine whether you are the parent of the minor child. If you are determined to be the biological parent, we will be able to represent you in your efforts to create a timesharing agreement, or determination of the child support obligation that should be assessed. If you are attempting to disestablish paternity based on facts that have become known to you, we will be able to represent you as you fight to disestablish yourself as a parent at law of the minor child. We can assist you if you have been served with a paternity suit, or in the alternative, if you would like to file a paternity suit. If you are in need of additional information regarding paternity actions, please call or email us to schedule your initial consultation.
                <br/><br/><br/>  </p>



        <p className="area-description"><strong className="strong">Jacksonville, Florida Injunction Attorney</strong>If you are in need of representation to obtain an injunction because you are in fear of imminent danger or harm, Newman Law Firm P.A. is prepared to attend the injunction hearing with you, and provide you with the representation that you need to ensure that a legally binding document is in place to protect you and your family. Additionally, if someone is wrongfully attempting to have an injunction put in place against you, we are prepared to provide all of the evidence necessary to show the Court that there is no reasonable fear of imminent danger or harm. We will advocate on your behalf, so that you leave Court with the end result you are seeking, whether it is to protect yourself and your family, or to oppose the imposition of a permanent injunction against you. If you are in need of additional information regarding injunctions, please call or email us to schedule your initial consultation.
                  </p>
      </div>
      </div>

  <div className="successStories">
  <h2 className="area-header">Success Stories in Criminal Cases</h2>
  <div className="storyGrid">
  <div className="storyContent"><p></p></div>
  <div className="storyContent"><p></p></div>
  <div className="storyContent"><p></p></div>
  <div className="storyContent"><p></p></div>
  <div className="storyContent"><p></p></div>

  </div></div>

  <div className="area-contact"><ContactForm/></div>

  <div className="bottomBoxC">
    <Copyright/>
  </div>
  </div>
</>
  )
}

export default Family
