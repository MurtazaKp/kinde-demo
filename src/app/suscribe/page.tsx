import React from "react";

const Subscribe = () => {
  return (
    <div className="kuiembed-container">
      <form
        method="post"
        action="https://setoos.kinde.com/widgets/subscribe/v1/subscribe"
        data-kui-form="true"
        id="id__kui_form"
        noValidate
      >
        {/* do not remove this or risk form bot signups */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            data-kui-element="true"
            type="text"
            id="id__kui_p_0fb67a0e1d7d47c0b12ec7c0af02dd16"
            name="p_0fb67a0e1d7d47c0b12ec7c0af02dd16"
            tabIndex={-1}
            value=""
          />
        </div>
        <fieldset>
          <legend>
            <span className="kuiembed-heading">Stay in the loop</span>
            <span className="kuiembed-sub-heading">
              Hear from us about product updates, news and events
            </span>
          </legend>
          <div className="kuiembed-form">
            <div className="kuiembed-field">
              <label
                className="kuiembed-label"
                data-kui-name="new_name"
                htmlFor="id__kui_new_name"
              >
                First name
              </label>
              <input
                className="kuiembed-input-field__name"
                type="text"
                id="id__kui_new_name"
                data-kui-element="true"
                name="new_name"
              />
            </div>
            <div className="kuiembed-field">
              <label
                className="kuiembed-label"
                data-kui-name="new_email"
                htmlFor="id__kui_new_email"
              >
                Email
              </label>
              <input
                className="kuiembed-input-field__email"
                type="email"
                id="id__kui_new_email"
                name="new_email"
                data-kui-element="true"
                autoComplete="email"
              />
            </div>
            <div className="kuiembed-field">
              <button type="submit" className="kuiembed-button">
                Sign up
              </button>
            </div>
          </div>
          <p
            data-kui-element="true"
            id="id__kui_message"
            className="kuiembed-message"
          ></p>
        </fieldset>
      </form>
      <div className="kuiembed-kinde-logo">
        <p className="kuiembed-kinde-logo__text">
          Powered by<span className="kuiembed-hide-visually"> Kinde</span>
        </p>
        <a href="https://kinde.com" className="kuiembed-kinde-logo__icon">
          <svg viewBox="0 0 86 28" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0.000300, -0.000468)">
              {/* SVG Paths and Polygons */}
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
