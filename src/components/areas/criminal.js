import React from 'react';
import SkinnyNavbar from '../skinnyNavbar.js';
import { Link } from 'react-router-dom';
import Image1 from '../../img/justice-2756939_640.png'
import './css/criminal.css'
import ContactForm from "../contactForm.js"
import Copyright from '../greyCopyright.js'
import {ReactComponent as BackIcon} from '../backIcon.svg';

const Criminal = () => {
  return (
  <>
<div className="container">
  <SkinnyNavbar/>
  <Link className="prev"to="/practice-areas"><BackIcon/></Link><br/>
<h1 className="area-title">Criminal Law </h1>

    <div className="area-info">
      <div className="area-info-wrapper">
      <h2 className="area-header">There's a Correct Way to Approach Criminal Cases...</h2>
        <p className="area-description">If you, a family member, or friend are currently being investigated or have been criminally charged, Newman Law Firm, P.A. can provide you with the information you need to make an informed decision as to how to move forward with your pending case. Often times, clients are fearful of the criminal justice system, and are concerned that the system will not actually deliver the justice that it promises. Here at Newman Law Firm, we are committed to defending you and protecting your rights, ensuring that at all times, justice is served. Newman Law Firm, P.A. is committed to fighting for your justice and your freedom. If you are interested in learning more about how Newman Law Firm, P.A. can provide you with a successful outcome in your case, please contact us to schedule your free initial consultation.
          <br/><br/><br/></p>
      <p className="area-description"><strong className="strong">Jacksonville, Florida Misdemeanor Criminal Defense Attorney</strong> Misdemeanor crimes are punishable with up to twelve months in jail, for first degree misdemeanor charges, or a maximum of sixty days in jail for second degree misdemeanor charges. Misdemeanor charges include, but are not limited to: battery, assault, driving under the influence, disorderly conduct, criminal mischief, and petit theft. Newman Law Firm, P.A. will always seek to resolve these cases in a manner that preserves your record, either by having the charges dropped or obtaining a withheld of adjudication to limit the negative implications on your record. Newman Law Firm, P.A. is committed to aggressively resolving misdemeanor cases, and ensuring that the end result is favorable.If you are unaware of whether the crime you have been charged with is a misdemeanor offense, or you are seeking representation for your misdemeanor charge, please contact us to schedule your free initial consultation.
        <br/><br/><br/></p>
      <p className="area-description"><strong className="strong">
  Jacksonville, Florida Felony Criminal Defense Attorney</strong> <br/>Felony crimes are punishable for a sentence greater than one year, and are classified as first, second, or third degree crimes. The Florida Legislature has identified minimum mandatory sentences to be imposed, and it will always be our goal to receive less than the prescribed minimum mandatory if possible. Newman Law Firm, P.A. recognizes the seriousness of felony charges, and will be committed to adequately defending you in a manner that preserves your record. We will always fight for each client to have the adjudication of guilt withheld, in an effort to preserve your record, and ensure that certain rights such as the right to vote, bear arms, or serve in the military are not taken away from you. If you are in need of representation for a felony charge, please contact Newman Law Firm, P.A. to schedule your free initial consultation.
<br/><br/><br/></p>

      <p className="area-description"><strong className="strong">Jacksonville, Florida Juvenile Criminal Defense Attorney</strong> If you minor child has been charged with a crime, Newman Law Firm, P.A. can assist you in aggressively defending your minor child. Newman Law Firm, P.A. is committed to preserving your minor child’s record, and protecting your minor child’s future. Although the process of defending juvenile allegations can be emotional, we are here to navigate your minor child, and the entire family unit through this process, and will diligently work towards obtaining a successful outcome for your minor child. If you are interested in learning ,more about how Newman Law Firm, P.A. can protect your minor child who is facing criminal allegations, please contact us to schedule your free initial consultation.
        </p>
    </div>
    </div>

<div className="successStories">
<h2 className="area-header">Success Stories in Criminal Cases</h2>
<div className="storyGrid">
<div className="storyContent"><p>In a drug trafficking case, the client was charged with trafficking cocaine after officers stated that they noticed him disposing of large quantities of cocaine out of a moving vehicle. The officers, who allegedly witnessed this, testified against the client. Despite the use of the officers as key witnesses, the client prevailed when the jury entered a verdict of not guilty.</p></div>
<div className="storyContent"><p>In another drug trafficking case, the client was charged with three counts of trafficking morphine, opium, oxycodone, heroin, or other derivatives, but was found not guilty. Attorney Newman cross examined the confidential informant, and the jury determined that the client was not guilty.</p></div>
<div className="storyContent"><p>In a grand theft case, the client was accused of stealing jewelry from a local jeweler. After engaging in intense investigation regarding the case, the case was dismissed within thirty days of the client’s arrest.</p></div>
<div className="storyContent"><p>In a case where the client was charged with aggravated battery with a deadly weapon, Attorney Newman defended him against two eye witnesses who previously identified the client as the alleged shooter. The jury found the client not guilty.</p></div>
<div className="storyContent"><p>In another case where a commercial truck driver was facing the charge of aggravated battery with a deadly weapon, and was in danger of losing his livelihood, Attorney Newman successfully defended that charge in trial, and the client was found not guilty.</p></div>
</div>

</div>

<div className="area-contact"><ContactForm/></div>

<div className="bottomBoxC">
  <Copyright/>
</div>
</div>


</>
  )
}

export default Criminal
