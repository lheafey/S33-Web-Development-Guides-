import React, { useState } from 'react';
import './CSS.css';

function DescriptionCss() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="descriptionCss">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png" alt="css pic" />
      <h2>Short Description of CSS</h2>
      <p>
        CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation
        of a document written in HTML or XML (including XML dialects such as SVG, MathML, etc.). It
        controls the layout, appearance, and visual formatting of web pages.
      </p>
      <p>
        CSS can be applied to HTML elements using selectors, properties, and values. It enables
        developers to customize the colors, fonts, spacing, and other design aspects of their web
        pages, making them visually appealing and user-friendly.
      </p>
      {showMore && (
        <div>
          <h3>Example:</h3>
          <p>
            CSS operates on a rule-based model where style rules are applied to elements based on
            their selectors. For example:
          </p>
          <pre>
            {`
            /* Select all <p> elements */
            p {
              color: blue;
            }

            /* Select all elements with class "button" */
            .button {
              background-color: #4caf50;
              border: none;
              color: white;
              padding: 10px 24px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              cursor: pointer;
              border-radius: 12px;
            }
            `}
          </pre>
        </div>
      )}
      <button className="toggleButton" onClick={toggleShowMore}>
        {showMore ? 'Hide Example' : 'Show Example'}
      </button>
    </div>
  );
}

export default DescriptionCss;