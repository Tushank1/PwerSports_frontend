import React from "react";
import "../pages_css/Warranty.css";
import Header from "./Header";
import Footer from "./Footer";

const Warranty = () => {
  return (
    <>
      <Header />
      <div className="warranty_outer_container">
        <div className="warranty_inner_container">
          <div className="warranty_working_container">
            <div className="warranty_working_container_heading">
              <h1>WARRANTY POLICY</h1>
            </div>
            <div className="warranty_working_container_content">
              <span>
                PowerSports offers a warranty against manufacturing defects on
                most products. The warranty period will be considered from the
                date of purchase by the customer. Please find below the warranty
                period for the various products sold by us.
              </span>
              <ol>
                <li>Helmets - 2 yrs</li>
                <li>Apparel - 6 months</li>
                <li>Boots - 6 months</li>
                <li>Accessories are not covered under warranty.</li>
              </ol>
              <h4>Warranty Terms & Conditions: General</h4>
              <ul>
                <li>
                  Each PowerSports product has a specific warranty duration,
                  found under the “Warranty” section on the product page
                  atpowersports.in.
                </li>
                <li>
                  Warranty applies only to products bought at full MRP from
                  PowerSports exclusive stores, authorized dealers, or
                  powersports.in. View our list of authorized resellers here
                  https://powersports.in/pages/our-network.
                </li>
                <li>
                  Products purchased under discounts or offers are not covered
                  under warranty.
                </li>
                <li>
                  Activate your recently purchased product for warranty at
                  https://powersports.in/pages/warranty-activation. We will need
                  clear images of the original tax invoice. Incomplete or late
                  submissions won't be accepted.
                </li>
                <li>
                  To claim a warranty, please mail us at contact@powersports.in.
                  In the mail please explain the issue faced and attach clear
                  images or videos and the purchase invoice. The claim will be
                  rejected in the absence of a purchase invoice.
                </li>
                <li>
                  The warranty covers manufacturing defects only. Any issue or
                  damage due to wear and tear, misuse, alterations, damage from
                  use, etc are not covered under warranty.
                </li>
                <li>
                  PowerSports is the sole authority for accepting or rejecting a
                  claim.
                </li>
                <li>
                  For accepted claims, we will try to arrange a reverse pickup
                  from the customer's address. The customers are requested to
                  pack their product carefully. Any helmet sent to us without a
                  box will make its warranty void. Also, PowerSports cannot be
                  held liable for any damage during transit due to inadequate
                  packing.
                </li>
                <li>
                  If a customer's pincode is not serviceable by our logistics
                  partner, then the customer is requested ship the product to us
                  and we will reimburse the shipping cost at actuals but upto a
                  maximum limit of Rs. 500. Again, any helmet sent to us without
                  a box will make its warranty void and PowerSports cannot be
                  held liable for any damage during transit due to inadequate
                  packing.
                </li>
                <li>
                  If a claim is rejected but service is possible at a cost, then
                  no reverse pickup will be arranged and no compensation will be
                  made towards shipping costs incurred by the customer.
                  PowerSports will however send the product back to the customer
                  free of charge.
                </li>
                <li>
                  The final warranty acceptance occurs only after our Quality
                  Check team verifies the received product. Inconsistencies with
                  the claim can result in rejection.
                </li>
                <li>
                  Repair is our first solution for valid claims. Only when the
                  product is irreparable, we will give another or equivalent
                  product. If the replacement is also unavailable, store credit
                  will be issued that can be used for purchases on our website.
                  No cash refunds are made under any circumstance. PowerSports
                  will be the only deciding authority on the course of action.
                </li>
                <li>
                  The color of the spares used in case of a repair might not
                  completely match that of the original product color.{" "}
                </li>
                <li>
                  In case of a replacement and the same color or graphic isn't
                  unavailable, the customer must select another graphic in the
                  same model.
                </li>
                <li>
                  Any replacement done during the warranty period will not
                  extend the warranty of the product.
                </li>
                <li>
                  Warranty for products bought using store credit runs from the
                  original product's purchase date.
                </li>
                <li>
                  Purchasing a PowerSports product means agreeing to our
                  warranty terms.
                </li>
                <li>Warranty policy may change without notice.</li>
              </ul>
              <h4>Warranty Terms & Conditions: Helmets</h4>
              <span>
                The warranty of 2 yrs on Helmets is against manufacturing
                defects only.{" "}
              </span>
              <span>
                Warranty cannot be claimed under following circumstances:
              </span>
              <ul>
                <li>Wear and tear due to regular usage.</li>
                <li>Damage caused by an accident or a fall.</li>
                <li>
                  Physical damage to the helmet by dropping it or by any other
                  mishandling.
                </li>
                <li>
                  Color fading due to usage or exposure to sun. High viz colors
                  are likely to fade faster on sun exposure.
                </li>
                <li>Problems occurring due to lack of maintenance.</li>
                <li>Usage under atypical conditions.</li>
                <li>
                  Any modifications or customizations to the helmet will void
                  its warranty.
                </li>
                <li>
                  Use of paint, adhesives, glue, screws, etc will also make the
                  warranty void.
                </li>
                <li>Application of chemicals that could harm the product.</li>
                <li>Scratches or marks or rusts occurring due to usage.</li>
                <li>Scratches and marks on the visor.</li>
                <li>Color chipping on the EPS. </li>
                <li>
                  Rider experiencing subjective issues like fit, comfort, noise,
                  aerodynamics, etc are not covered under warranty.
                </li>
                <li>
                  Helmet accessories like visors, cheek pads, chin curtains,
                  pinlock, spoiler, etc. are not covered under warranty.
                </li>
                <li>
                  PSI cannot be held liable for any cosmetic damage the product
                  may have while purchasing. Customers are advised to check the
                  product thoroughly before purchasing.{" "}
                </li>
              </ul>
              <h4>Warranty Terms & Conditions: Apparel</h4>
              <span>
                PSI offers 6 months warranty on all it's apparel against
                manufacturing defects.
              </span>
              <span>
                Warranty cannot be claimed under following circumstances:
              </span>
              <ul>
                <li>Wear and tear due to regular usage.</li>
                <li>Damage caused by an accident or a fall.</li>
                <li>Damage to the apparel due to mishandling.</li>
                <li>
                  Color fading due to usage or exposure to sun. High viz colors
                  are likely to fade faster on sun exposure.
                </li>
                <li>Problems occurring due to lack of maintenance.</li>
                <li>Usage under atypical conditions.</li>
                <li>
                  Any modifications or customizations to the product will void
                  its warranty.
                </li>
                <li>
                  Application of chemicals or strong detergents that could harm
                  the product.
                </li>
                <li>Exposure to high heat source.</li>
                <li>
                  Rider experiencing subjective issues like fit, comfort, etc
                  are not covered under warranty.
                </li>
                <li>
                  Damage to accessories like zippers, stitches, buttons, liners,
                  fabric, patches and prints due to usage.
                </li>
                <li>Fabric pilling.</li>
                <li>
                  PSI cannot be held liable for any cosmetic damage the product
                  may have while purchasing. Customers are advised to check the
                  product thoroughly before purchasing.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Warranty;
