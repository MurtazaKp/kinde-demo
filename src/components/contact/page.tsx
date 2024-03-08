export default function page() {

    function checkMandatory6040407000000454604() {
      var mndFileds = new Array('Last Name');
      var fldLangVal = new Array('Last\x20Name');
      for (let i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToContacts6040407000000454604'][mndFileds[i]] as HTMLInputElement;
  
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            if (fieldObj.type === 'file') {
              alert('Please select a file to upload.');
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type === 'checkbox') {
            if (fieldObj.checked === false) {
              alert('Please accept ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
  
          try {
            if (fieldObj.name === 'Last Name') {
              var name = fieldObj.value;
            }
          } catch (e) {}
        }
      }
  
      var urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
        var webform = document.getElementById('webform');
        var service = urlparams.get('service');
        var smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', service);
        smarturlfield.setAttribute('name', 'service');
        webform.appendChild(smarturlfield);
      }
      var submitButton = document.querySelector('.crmWebToEntityForm.formsubmit') as HTMLInputElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
    }
  
    function tooltipShow6040407000000454604(el : any) {
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay === 'none') {
        var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (let i = 0; i < allTooltip.length; i++) {
          allTooltip[i].style.display = 'none';
        }
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    }
   
    return (
      <>
        <form
          id="webform"
          action="https://crm.zoho.com/crm/WebToContactForm"
          name={"WebToContacts6040407000000454604"}
          method="POST"
          onSubmit={(e) => { e.preventDefault(); checkMandatory6040407000000454604(); }}
          acceptCharset="UTF-8"
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="xnQsjsdp"
            value="d8a1353f2eaf6ce07bb9e72b834157877d590d9c469dc500e02f3e76b9dc9983"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
          <input
            type="text"
            style={{ display: "none" }}
            name="xmIwtLD"
            value="755fb2b6b39d18f7d75095fae361de5e0ff5d9da99766cbc4679dde1dde53194dfe38b518d6168b2721ab364ada5a746"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="actionType"
            value="Q29udGFjdHM="
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="returnURL"
            value="https&#x3a;&#x2f;&#x2f;one-hash-poc.vercel.app&#x2f;"
          />
            
  
          <div
            className="zcwf_title"
            style={{ maxWidth: "600px", color: "black", fontFamily: "Arial" }}
          >
            Contact Form
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="First_Name">First Name</label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="First_Name" name="First Name"/>
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Last_Name">
                Last Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="Last_Name" name="Last Name"/>
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Email">Email</label>
            </div>
            <div className="zcwf_col_fld">
              <input
                type="email"
                autoComplete="false"
                id="Email"
                name="Email"
                data-crmlabel=""
              />
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Phone">Phone</label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="Phone" name="Phone"/>
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Mailing_City">Mailing City</label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="Mailing_City" name="Mailing City"/>
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Mailing_Country">Mailing Country</label>
            </div>
            <div className="zcwf_col_fld">
              <input
                type="text"
                id="Mailing_Country"
                name="Mailing Country"
              />
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div
              className="zcwf_col_lab"
              style={{ fontSize: "12px", fontFamily: "Arial" }}
            >
              <label htmlFor="Description">Description</label>
            </div>
            <div className="zcwf_col_fld">
              <textarea id="Description" name="Description"></textarea>
              <div className="zcwf_col_help"></div>
            </div>
          </div>
          <div className="zcwf_row">
            <div className="zcwf_col_lab"></div>
            <div className="zcwf_col_fld">
              <input
                type="submit"
                id="formsubmit"
                className="formsubmit zcwf_button"
                value="Submit"
                title="Submit"
              />
              <input
                type="reset"
                className="zcwf_button"
                name="reset"
                value="Reset"
                title="Reset"
              />
            </div>
          </div>
        </form>
      </>
    );
  }
  